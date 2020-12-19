import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';
import IconBack from '../../../assets/img/IconBack.svg';
import {useStateValue} from '../../../state/ContextProvider';
import Voltar from '../../../components/Voltar';
import Resultados from '../../../components/Resultados';
import PercentagemCovid from '../../../components/PercentagemCovid';
import Numeral from 'numeral';
import "numeral/locales/pt-pt";
import { 
    Container,
    Scroler,
    Bandeira,
    Texto,
    DadosPais,
    Titulo,
    TextoPais,
    Flag,
    TextoContinente,
    TextoContinenteTexto,
    DadosDetalhes,
    VoltarContainer,
    MapaContainer,
    Botao,
    BotaoText
} from './styles';

export default () => {
    const route=useRoute();
    const [state, dispach]=useStateValue();
    const navigation=useNavigation();
    const prettyPrintStat = (stat) =>
    stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
    const [paisInfo, setpaisInfo]=useState({
        all:route.params.all,
        country: route.params.country,
        active: route.params.active,
        countryInfo: route.params.countryInfo,
        continent: route.params.continent,
        population: route.params.population,
        todayCases: route.params.todayCases,
        cases: route.params.cases,
        todayRecovered: route.params.todayRecovered,
        recovered: route.params.recovered,
        todayDeaths: route.params.todayDeaths,
        deaths: route.params.deaths,
        critical: route.params.critical,
        tests: route.params.tests
    });
    
    const handelerClick =()=>{
        navigation.navigate('Mapa',{
            all:paisInfo.all,
            data:paisInfo,
            countryInfo:paisInfo.countryInfo
        });
    };
    return(
        <Container>
            <Bandeira>
                <VoltarContainer>
                    <Voltar></Voltar>
                </VoltarContainer>
                <Image
                        source= {{uri:paisInfo.countryInfo.flag}}
                        style={{
                            width: '100%',
                            height: '100%', 
                            resizeMode: 'cover' }}
                    ></Image>
                    
            </Bandeira>
            
            <DadosDetalhes>
            <MapaContainer>
            <DadosPais>
                    <Titulo>
                        <TextoPais>{paisInfo.country}</TextoPais>
                        <Flag source= {{uri:paisInfo.countryInfo.flag}}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius:15, 
                            resizeMode: 'cover' }}></Flag>
                    </Titulo>
                    <Titulo>
                        <TextoContinente>
                            <TextoContinenteTexto>
                                Continente: 
                            </TextoContinenteTexto>
                            <TextoContinenteTexto style={{fontWeight:"bold", marginLeft:5}}>
                                { paisInfo.continent}
                            </TextoContinenteTexto>
                        </TextoContinente>
                        <TextoContinente>
                            <TextoContinenteTexto >
                                População: 
                            </TextoContinenteTexto>
                            <TextoContinenteTexto style={{fontWeight:"bold", marginLeft:5}}>
                                {prettyPrintStat(paisInfo.population)}
                            </TextoContinenteTexto>
                        </TextoContinente>
                        
                    </Titulo>
                </DadosPais>
                
                        <Botao onPress={handelerClick}>
                            <BotaoText>
                                Ver Mapa
                            </BotaoText>
                        </Botao>
                    </MapaContainer>
            </DadosDetalhes>
            <Scroler>
                <Resultados dados={paisInfo}></Resultados>
                <PercentagemCovid dados={paisInfo}></PercentagemCovid>
            </Scroler>
        </Container>
    );
}