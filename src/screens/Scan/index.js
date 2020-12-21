import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import TesteCovid from '../../components/TesteCovid';
import ContainerTituloDiferente from '../../components/ContainerTitulo';
import ScanIcon from '../../assets/img/Two-tone-Scan.svg';
import FilterIcon from '../../assets/img/Bulk-Filter.svg';
import Pais from '../../components/Pais';
import Api from '../../api/Api';
import {useStateValue} from '../../state/ContextProvider';
import {useStateValueLang} from '../../state/ContextLang';

import Text from '../../components/Text';
import { 
    Container,
    Scroler,
    Search,
    SearchDiv,
    Input,
    Filter,
    
    Loading
} from './styles';

export default () => {
    const [state, dispach]=useStateValue();
    const [loading, setLoading]=useState(false);
    const [data, setData]=useState([]);
    const [copia, setDataCopia]=useState([]);
    const [all, setAll]=useState([]);
    const [lang, setlang] = useStateValueLang()

    const getPaises = async () => {
        setLoading(true);
        let res =await Api.getAngola();
        let al =await Api.getAngola();
        setData(res);
        setDataCopia(res);
        setAll(al);
        setLoading(false);
        
    }
    
    filtrar = query => {
        const ob=copia;
        if (query == '') {
            return setData(ob);
        }
        else{
            var newData=[];
            newData = ob.filter(l => l.country.toLowerCase().match(query));
        }
        setData(newData);
    };
    useEffect(()=>{
        async function getStorageLang (){
            const Idioma= await AsyncStorage.getItem("idioma");
            if(Idioma=== '1'){
                setlang({
                  type:'en_US'
                });
                return;
            }
            else if(Idioma==='2'){
              setlang({
                type:'pt_PT'
              });
              return;
            }
            else{
              setlang({
                type:'fr_FR'
              });
              return;
            }
          
          } 
          getStorageLang();
        getPaises();
    },[]);
    return(
        <Container>
                <ContainerTituloDiferente titulo={<Text text='pesquisar.titulo'/>} bandeira={2}>
                </ContainerTituloDiferente>
 
            <Scroler >
                <TesteCovid></TesteCovid>
                <Search>
                    <SearchDiv>
                        <ScanIcon stroke={state.theme.firstIconSearch} fill={state.theme.background} width="16" heigth="16"></ScanIcon>


                        {lang.locale.local =='en_US' ?<Input 
                        placeholder="Enter a country name"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={query=>this.filtrar(query)}
                        ></Input>:<Input 
                        
                        placeholder="Introduza o nome de um país"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={query=>this.filtrar(query)}
                        ></Input> }
                        
                        
                    </SearchDiv>
                    <Filter><FilterIcon fill={state.theme.secondIconSearch}></FilterIcon></Filter>
                </Search>
                
                {loading==true ? <Loading size="large" color={state.theme.color}></Loading>
                :
                <View style={{marginTop:20}}>
                    <Pais dados={data} all={all}></Pais>
                </View>
                
                }
            </Scroler>
        </Container>
    );
}