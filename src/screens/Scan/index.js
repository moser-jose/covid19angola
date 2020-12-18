import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import TesteCovid from '../../components/TesteCovid';
import ContainerTituloDiferente from '../../components/ContainerTitulo';
import ScanIcon from '../../assets/img/Two-tone-Scan.svg';
import FilterIcon from '../../assets/img/Bulk-Filter.svg';
import Pais from '../../components/Pais';
import Api from '../../api/Api';
import {useStateValue} from '../../state/ContextProvider';
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

    const getPaises = async () => {
        setLoading(true);
        let res =await Api.getAngola();
        setData(res);
        setDataCopia(res);
        
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
        getPaises();
    },[]);
    console.log(data);
    return(
        <Container>
                <ContainerTituloDiferente titulo="Tracker" bandeira={2}>
                </ContainerTituloDiferente>
 
            <Scroler >
                <TesteCovid></TesteCovid>
                <Search>
                    <SearchDiv>
                        <ScanIcon stroke={state.theme.firstIconSearch} fill={state.theme.background} width="16" heigth="16"></ScanIcon>
                        <Input 
                            placeholder="Introduza o nome de um país"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={query=>this.filtrar(query)}
                            ></Input>
                    </SearchDiv>
                    <Filter><FilterIcon fill={state.theme.secondIconSearch}></FilterIcon></Filter>
                </Search>
                
                {loading==true ? <Loading size="large" color={state.theme.color}></Loading>
                :
                <View style={{marginTop:20}}>
                    <Pais dados={data}></Pais>
                </View>
                
                }
            </Scroler>
        </Container>
    );
}