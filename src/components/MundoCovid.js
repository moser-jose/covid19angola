import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Numeral from 'numeral';
import "numeral/locales/pt-pt";
const Container = styled.View`
    flex:1;
    justify-content:center;
    width:100%;
`;

const Casos = styled.TouchableOpacity`
    margin:0 4px;
    justify-content: center;
    align-items:center;
    position: relative;
    flex:1;
`;
const NovosCasos = styled.Text`
    color:#007BFF;
    font-size:10px;
    font-weight:bold;
`;
const TotalCasos = styled.Text`
    font-size:16px;
    font-weight:bold;
    margin:5px 0 0 0;
    
`;
const CasoAtivo = styled.Text`
    font-size:10px;
    font-family:"Poppins-Light";
    letter-spacing:1px;
    color:${props=>props.theme.color};
    margin:5px 0 0 0;
`;
const DivCont = styled.ScrollView`
    
    flex-direction:row;
    flex:1;
`;
const Barra = styled.View`
    width:100%;
    height:2px;
    background-color:#007BFF;
    position:absolute;
    top:0;
`;


export default({dados,active,cases,deaths,critical,recovered}) =>{
    Numeral.locale('pt-pt');
    const [act, setAct]=useState(false);
    const [cas, setCas]=useState(true);
    const [dea, setDea]=useState(false);
    const [crit, setCrit]=useState(false);
    const [rec, setRec]=useState(false);
    const prettyPrintStat = (stat) =>
        stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
    
    
        const handlerClickCases=()=>{
            setAct(false);
            setCas(true);
            setDea(false);
            setCrit(false);
            setRec(false);
            cases();
        }

        const handlerClickActive=()=>{
            active();
            setAct(true);
            setCas(false);
            setDea(false);
            setCrit(false);
            setRec(false);
            
        }
        const handlerClickDeaths=()=>{
            setAct(false);
            setCas(false);
            setDea(true);
            setCrit(false);
            setRec(false);
            deaths();
        }
        const handlerClickRecovered=()=>{
            setAct(false);
            setCas(false);
            setDea(false);
            setCrit(false);
            setRec(true);
            recovered();
        }
        const handlerClickCritical=()=>{
            setAct(false);
            setCas(false);
            setDea(false);
            setCrit(true);
            setRec(false);
            critical();
        }
        

    return(
            <Container>
                <DivCont horizontal>
                    <Casos onPress={handlerClickCases}>
                        {
                            cas==true && <Barra style={{backgroundColor:"#007BFF"}}></Barra>
                        }
                        <NovosCasos style={{color:"#007BFF"}}>[{prettyPrintStat(dados.todayCases)}]</NovosCasos>
                        <TotalCasos style={{color:"#0078FF"}}>{prettyPrintStat(dados.cases)}</TotalCasos>
                        <CasoAtivo>Total casos</CasoAtivo>
                    </Casos>
                    <Casos onPress={handlerClickActive}>
                        {
                            act==true && <Barra style={{backgroundColor:"#ff8040"}}></Barra>
                        }
                        
                        <NovosCasos></NovosCasos>
                        <TotalCasos style={{color:"#ff8040"}}>{prettyPrintStat(dados.active)}</TotalCasos>
                        <CasoAtivo >Activos</CasoAtivo>
                    </Casos>
                    <Casos onPress={handlerClickCritical}>
                        {
                            crit==true && <Barra style={{backgroundColor:"#FFBB33"}}></Barra>
                        }
                        <NovosCasos></NovosCasos>
                        <TotalCasos style={{color:"#FFBB33"}}>{prettyPrintStat(dados.critical)}</TotalCasos>
                        <CasoAtivo >Estado critíco</CasoAtivo>

                    </Casos>
                    <Casos onPress={handlerClickRecovered}>
                        {
                            rec==true && <Barra style={{backgroundColor:"#21BA4F"}}></Barra>
                        }
                        <NovosCasos style={{color:"#21BA4F"}}>[{prettyPrintStat(dados.todayRecovered)}]</NovosCasos>
                        <TotalCasos style={{color:"#21BA4F"}}>{prettyPrintStat(dados.recovered)}</TotalCasos>
                        <CasoAtivo >Recuperados</CasoAtivo>
                        
                    </Casos>
                    <Casos onPress={handlerClickDeaths}>
                        {
                            dea==true && <Barra style={{backgroundColor:"#FF3131"}}></Barra>
                        }
                        <NovosCasos style={{color:"#FF3131"}}>[{prettyPrintStat(dados.todayDeaths)}]</NovosCasos>
                        <TotalCasos style={{color:"#FF3131"}}>{prettyPrintStat(dados.deaths)}</TotalCasos>
                        <CasoAtivo>Mortes</CasoAtivo>
                    </Casos>
                </DivCont>
            </Container>
    )
}


