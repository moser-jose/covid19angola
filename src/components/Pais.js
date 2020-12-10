import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import { FlatList,Image } from 'react-native';
import Api from '../api/Api';
import Numeral from 'numeral';
import "numeral/locales/pt-pt";
import {useNavigation} from '@react-navigation/native';

const Pais = styled.View`
    background-color:${props=>props.theme.container};;
    elevation:2;
    padding:10px;
    border-radius:4px;
    margin:1px;
    margin-bottom:10px;
`;

const Dados = styled.View`
    flex-direction:row;
    
`;
const Imagem = styled.View`
    width:50px;
    height:50px;
    border-radius:25px;
    border:3px solid ${props=>props.theme.color};;
    overflow:hidden;
    elevation:2;
`;

const PaisContainer = styled.View`
    flex:1;
`;
const NomePais = styled.Text`
    padding-left:10px;
    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:16px;
    color:${props=>props.theme.color};;
`;

const DadosPais = styled.View`
    flex-direction:row;
    flex:1;
    padding-left:10px;
    padding-bottom:10px;
    justify-content:space-between;
`;
const NomePaisDados = styled.Text`
    font-family:"Poppins-Light";
    font-size:10px;
    color:${props=>props.theme.color};
`;
const DadosCovid = styled.View`
    justify-content:space-between;
    flex-direction:row;
    flex:1;
    width:100%;
    padding-left:10px;
`;

const DadosCovidLeft = styled.View`
    width:32%;
`;
const DadosCovidMidlle = styled.View`
    width:32%;
`;
const DadosCovidRight = styled.View`
    width:32%;
`;
const DadosCont = styled.View`
    align-items:center;
    flex:1;
    flex-direction:row;

`;
const Populacao= styled.View`
    align-items:center;
    flex:1;
    flex-direction:row;
    justify-content:flex-end;

`;
const NomePaisDadosValor = styled.Text`
    font-family:"Poppins-Bold";
    font-size:9px;
    color:${props=>props.theme.color};
`;
const Novo = styled.Text`
    font-family:"Poppins-Bold";
    font-size:10px;
    color:${props=>props.theme.color};
    letter-spacing:1px;
`;
const Casos = styled.Text`
    font-family:"Poppins-Bold";
    font-size:9px;
    text-transform:uppercase;
    letter-spacing:1px;
    
`;
const Vermais= styled.TouchableOpacity`
    margin-top:10px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;
const VermaisTexo= styled.Text`
    font-family:"Poppins-Bold";
    font-size:12px;
    color:${props=>props.theme.background};
    background-color:${props=>props.theme.color};
    padding:4px 30px;
    border-radius:4px;
    letter-spacing:1px;
    
`;


export default ({dados}) => {
    Numeral.locale('pt-pt');
    const navigation=useNavigation();
    return( 
        <FlatList
        /* style={{flex:1}} */
                    data={dados}
                    keyExtractor={(item) => item.country}
                    renderItem={PaisDados}
                    >
        </FlatList>
    );

    function PaisDados(item){
        const{country,countryInfo,continent,population,active,todayCases,cases,todayRecovered,recovered,todayDeaths,deaths, critical, tests}=item.item;
        const prettyPrintStat = (stat) =>
        stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
        const handlerClickPais =()=>{
            navigation.navigate('Pais',{
                country:country,
                active: active,
                countryInfo:countryInfo,
                continent:continent,
                population:population,
                todayCases:todayCases,
                cases:cases,
                todayRecovered:todayRecovered,
                recovered:recovered,
                todayDeaths:todayDeaths,
                deaths:deaths,
                critical:critical,
                tests:tests
            });
        };
        return(
            
        <Pais>
        <Dados>
            <Imagem>
            <Image
                    source={{uri:`${countryInfo.flag}`}}
                    style={{ width: 60, height: 60, resizeMode:'cover' }}
                >

                </Image>
            </Imagem>
            <PaisContainer>
                <NomePais>{country}</NomePais>
                <DadosPais>
                    <DadosCont>
                        <NomePaisDados>Continente: </NomePaisDados>
                        <NomePaisDadosValor>{continent}</NomePaisDadosValor>
                    </DadosCont>
                    <Populacao>
                        <NomePaisDados>População: </NomePaisDados>
                        <NomePaisDadosValor>{prettyPrintStat(population)}</NomePaisDadosValor>
                    </Populacao>
                </DadosPais>
                <DadosCovid>
                    <DadosCovidLeft>
                        <Casos style={{color:'#ff8040'}}>Activos</Casos>
                        <Novo style={{color:'#ff8040'}}>[{prettyPrintStat(todayCases)}]</Novo>
                        <Novo style={{color:'#ff8040'}}>{prettyPrintStat(cases)}</Novo>
                        
                    </DadosCovidLeft>
                    <DadosCovidMidlle>
                        <Casos style={{color:'#21BA4F'}}>Recuperados</Casos>
                        <Novo style={{color:'#21BA4F'}}>[{prettyPrintStat(todayRecovered)}]</Novo>
                        <Novo style={{color:'#21BA4F'}}>{prettyPrintStat(recovered)}</Novo>
                    </DadosCovidMidlle>
                    <DadosCovidRight>
                        <Casos style={{color:'#FF3131'}}>Mortes</Casos>
                        <Novo style={{color:'#FF3131'}}>[{prettyPrintStat(todayDeaths)}]</Novo>
                        <Novo style={{color:'#FF3131'}}>{prettyPrintStat(deaths)}</Novo>
                    </DadosCovidRight>
                </DadosCovid>
            </PaisContainer>
        </Dados>
        <Vermais onPress={handlerClickPais}>
            <VermaisTexo >Ver Mais</VermaisTexo>
        </Vermais>
    </Pais>    

        );
    }
}