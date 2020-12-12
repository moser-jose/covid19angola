import React from 'react';
import styled from 'styled-components/native';
import IconAtivosAzul from '../assets/img/ativos_laranja.svg';
import IconMortes from '../assets/img/mortes.svg';
import IconVerdeClaro from '../assets/img/recuperados_verde_claro.svg';
import CriticosIcon from '../assets/img/criticos';
import CasesIcon from '../assets/img/cases';
import TestsIcon from '../assets/img/tests';
import Numeral from 'numeral';
import "numeral/locales/pt-pt";

const Container = styled.View`
    flex:1;
    justify-content:center;
`;

const Casos = styled.View`
    margin:1px;
    border-radius:12px;
    justify-content: center;
    align-items:center;
    background-color:${props=>props.theme.container};
    width:32%;
    position: relative;
    padding:10px;
    elevation:2;

`;
const NovosCasos = styled.Text`
    color:#007BFF;
    font-size:10px;
    font-weight:bold;
    margin-top:10px;
`;
const TotalCasos = styled.Text`
    font-size:20px;
    font-weight:bold;
    margin:5px 0 0 0;
`;
const CasoAtivo = styled.Text`
    font-size:12px;
    font-weight:bold;
    letter-spacing:1px;
`;
const DivCont = styled.View`
    width:100%;
    flex-direction:row;
    flex:1;
    justify-content:space-between;
`;

const DadosAngola = styled.View`
    flex-direction:row;
    justify-content:space-between;
    flex:1;
    
   
`;

const Dados = styled.View`
    background-color:${props=>props.theme.container};
    width:49%;
    padding:10px;
    overflow:hidden;
    border-radius:12px;
    elevation:2;
    margin-bottom:10px;
    height:90px;
    
`;

const DadosCont = styled.View`

`;
const Titulo = styled.Text`
    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:14px;
    color:${props=>props.theme.color};
`;

const TextoCont = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
`;
const TituloDado = styled.Text`
    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:18px;
    text-align:right;
    color:${props=>props.theme.color};
`;

const TituloDadoNew = styled.Text`
    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:9px;
    text-align:right;
    margin-right:2px;
    color:${props=>props.theme.color};
    
`;
const TituloDadoCritico = styled.Text`

    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:14px;
    color:${props=>props.theme.color};
`;
export default({dados}) =>{
    Numeral.locale('pt-pt');
    const formatarNumero = (stat) =>
    stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
    return(
            <Container>
                <DadosAngola>
                            <Dados>
                                <DadosCont>
                                    <Titulo>Total de Casos</Titulo>
                                    <TextoCont>
                                        <CasesIcon width="24" height="24"></CasesIcon>
                                        <TituloDadoNew>[{formatarNumero(dados.todayCases)}]</TituloDadoNew>
                                        <TituloDado>{formatarNumero(dados.cases)}</TituloDado>
                                    </TextoCont>
                                </DadosCont>
                            </Dados>
                            <Dados>
                                <DadosCont>
                                <TituloDadoCritico>Estado crítico</TituloDadoCritico>
                                        <TextoCont>
                                        <CriticosIcon width="24" height="24"></CriticosIcon>
                                        <TituloDado >{formatarNumero(dados.critical)}</TituloDado>
                                    </TextoCont>
                                </DadosCont>
                            </Dados>
                        </DadosAngola>
                        
                <DadosAngola>
                            <Dados style={{width:'100%'}}>
                                <DadosCont style={{width:'100%'}}>
                                        
                                    <TextoCont style={{marginTop:0}}>
                                    <Titulo >Testes realizados</Titulo>
                                        <TestsIcon width="24" height="24"></TestsIcon>
                                    </TextoCont>
                                    <TituloDado style={{marginTop:10}}>{formatarNumero(dados.tests)}</TituloDado>
                                </DadosCont>
                            </Dados>
                        </DadosAngola>
                <DivCont>
                    <Casos>
                        <IconAtivosAzul></IconAtivosAzul>
                        <NovosCasos></NovosCasos>
                        <TotalCasos style={{color:"#ff8040"}}>{formatarNumero(dados.active)}</TotalCasos>
                        <CasoAtivo style={{color:"#ff8040"}}>Activos</CasoAtivo>
                        
                    </Casos>
                    <Casos>
                        <IconVerdeClaro></IconVerdeClaro>
                        <NovosCasos style={{color:"#21BA4F"}}>[{formatarNumero(dados.todayRecovered)}]</NovosCasos>
                        <TotalCasos style={{color:"#21BA4F"}}>{formatarNumero(dados.recovered)}</TotalCasos>
                        <CasoAtivo style={{color:"#21BA4F"}}>Recuperados</CasoAtivo>
                        
                    </Casos>
                    <Casos>
                        <IconMortes></IconMortes>
                        <NovosCasos style={{color:"#FF3131"}}>[{formatarNumero(dados.todayDeaths)}]</NovosCasos>
                        <TotalCasos style={{color:"#FF3131"}}>{formatarNumero(dados.deaths)}</TotalCasos>
                        <CasoAtivo style={{color:"#FF3131"}}>Mortes</CasoAtivo>
                    </Casos>
                </DivCont>
            </Container>
    )
}


