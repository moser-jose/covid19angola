import React, {useState, useEffect} from 'react';
import TesteCovid from '../../components/TesteCovid';
import UltimaAtualizacao from '../../components/UltimaAtualizacao';
import Resultados from '../../components/Resultados';
import ContainerTitulo from '../../components/ContainerTitulo';
import PercentagemCovid from '../../components/PercentagemCovid';
import {useStateValue} from '../../state/ContextProvider';
import Separador from '../../components/Separador';
import {useNavigation} from '@react-navigation/native';
import Api from '../../api/Api';
import Numeral from 'numeral';
import "numeral/locales/pt-pt";
import Text from '../../components/Text';
import { 
    Container,
    Scroler,
    Loading,
    DadosCovid,
    DadosCovidAngola,
    DadosPais,
    Titulo,
    TextoPais,
    Flag,
    TextoContinente,
    TextoContinenteTexto,
    DadosDetalhes,
    MapaContainer,
    Botao,
    BotaoText
} from './styles';

export default () => {
    const [state,dispach]=useStateValue();
    const [loading, setLoading]=useState(false);
    const [data, setData]=useState([]);
    const [countryInfo, setCountryInfo]=useState([]);
    const [all, setAll]=useState([]);
    const navigation=useNavigation();
    Numeral.locale('pt-pt');
    const formatarNumero = (stat) =>
    stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
    const getHandlerAngola = async () => {
        setLoading(true);
        let res =await Api.getAngolaPais("angola");
            setData(res);
            setAll(res);
            setLoading(false);
        }


        const handlerClickPais =()=>{
            navigation.navigate('Mapa',{
                all:all,
                data:data,
                countryInfo:countryInfo
            });
        };
    useEffect(() => {
        let isActive = true;
        setLoading(true);
        const getAngola = async () => {
            setLoading(true);
            let res =await Api.getAngolaPais("angola");
            let al =await Api.getAngola();
            if (isActive) {
                setData(res);
                setAll(al);
                setCountryInfo(res.countryInfo);
                setLoading(false);
            }}
            getAngola();
        
        return () => {
            isActive = false;
        };
    }, []);
    
    return(
        <Container>
            
                <ContainerTitulo bandeira={1} titulo="Angola">
                </ContainerTitulo>
            <Scroler>
            
                <TesteCovid></TesteCovid>
                {loading == true
                ? 
                    <Loading size="large" color={state.theme.color}></Loading> 
                : 
                <DadosCovidAngola>
                      
            <DadosDetalhes>
                
                    <DadosPais>
                        <Titulo>
                            <TextoPais>{data.country}</TextoPais>
                            <Flag source= {{uri:countryInfo.flag}}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius:15, 
                                resizeMode: 'cover' }}></Flag>
                        </Titulo>
                        <Titulo>
                            <TextoContinente>
                                <TextoContinenteTexto>
                                <Text text='pesquisar.continente'/>: 
                                </TextoContinenteTexto>
                                <TextoContinenteTexto style={{fontWeight:"bold", marginLeft:5}}>
                                    { data.continent}
                                </TextoContinenteTexto>
                            </TextoContinente>
                            <TextoContinente>
                                <TextoContinenteTexto >
                                <Text text='pesquisar.populacao'/>: 
                                </TextoContinenteTexto>
                                <TextoContinenteTexto style={{fontWeight:"bold", marginLeft:5}}>
                                {formatarNumero(data.population)}
                                </TextoContinenteTexto>
                            </TextoContinente>
                            
                        </Titulo>
                    </DadosPais>
                    <MapaContainer>
                        <Botao onPress={handlerClickPais}>
                            <BotaoText>
                            <Text text='pesquisar.verMapa'/>
                            </BotaoText>
                        </Botao>
                    </MapaContainer>
                </DadosDetalhes>
                    <DadosCovid>
                        <UltimaAtualizacao onp={getHandlerAngola} dados={data.updated}></UltimaAtualizacao>
                        <Resultados dados={data} key={data.country}></Resultados> 
                        <PercentagemCovid dados={data} key={data.updated}></PercentagemCovid>
                    </DadosCovid>
                    
                </DadosCovidAngola>
                } 
            </Scroler>
        </Container>
    );
}