import React from 'react';
import styled from 'styled-components/native';
import Separador from './Separador';
import { VictoryPie } from "victory-native";
import {GraficoLinhaCasos,GraficoLinhaRecuperados,GraficoLinhaMortes} from './GraficoLinha';
const Container = styled.View`
    flex:1;
    justify-content:center;
    margin:10px 0;
    overflow:hidden;
`;

const Casos = styled.View`
    height: 20px;
    width:100%;
`;
const TotalCasos = styled.Text`
    font-size:12px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
    align-items:center;
    margin-left:5px;
    align-items:center;
`;
const DivCont = styled.View`
    flex:1;
    border-radius:12px;
    align-items:center;
    background-color:${props=>props.theme.container};
    position: relative;
    elevation:2;
    margin-bottom:10px;
    justify-content:center;
    padding:30px 0 20px 0;
    
`;
const DadosPerc = styled.View`
    flex-direction:row;
    flex:1;
    justify-content:center;
`;
const DivContperc = styled.View`
    flex-direction:row;
    flex:1;
    align-items:center;
    position: relative;
    margin-top:10px;
    justify-content:center;
    
`;
export default({dados}) =>{
    const round = (num, places) => {
        if (!("" + num).includes("e")) {
            return +(Math.round(num + "e+" + places)  + "e-" + places);
        } else {
            let arr = ("" + num).split("e");
            let sig = ""
            if (+arr[1] + places > 0) {
                sig = "+";
            }
            return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
        }
    }
    let dea=round((dados.deaths/(dados.cases)*100),1)+"%";
    let act=round((dados.active/(dados.cases)*100),1)+"%";
    let rec=round((dados.recovered/(dados.cases)*100),1)+"%";
    const dataPercentagem = [
        { x: act, y: dados.active },
        { x: rec, y: dados.recovered },
        { x: dea, y: dados.deaths }
    ];
    
    return(
            <Container>
                <Separador titulo={"Percentagens da Covid-19"} descricao={"Distribuição de acordo aos activos, recuperados e mortos "}></Separador>
                <DivCont>
                    
                <VictoryPie 
                    height={200}
                    width={200}
                    cornerRadius={({ datum }) => datum.y * 5}
                    innerRadius={100}
                    labelRadius={65}
                    colorScale={[ "#ff8040", "#21BA4F", "#FF3131" ]}
                    style={{  labels: { fill: "#fff",alignItems:"center" ,justifyContent:"center" ,textAlign:"center", fontSize: 12, fontWeight: "bold" } }}
                    data={dataPercentagem} />

                <DivContperc style={{padding:10}}>
                    <DadosPerc>
                        <Casos style={{width:20, height:20, borderRadius:10,backgroundColor:"#ff8040"}}>
                        </Casos>
                        <TotalCasos>Activos</TotalCasos>
                    </DadosPerc>
                    <DadosPerc>
                    <Casos style={{width:20, height:20, borderRadius:10,backgroundColor:"#21BA4F"}}>
                    </Casos>
                        <TotalCasos>Recuperados</TotalCasos>
                    </DadosPerc>
                    <DadosPerc >
                    <Casos style={{width:20, height:20, borderRadius:10,backgroundColor:"#FF3131"}}>
                    </Casos>
                        <TotalCasos>Mortes</TotalCasos>
                    </DadosPerc>
                    
                </DivContperc>

                </DivCont>
               
                    <GraficoLinhaCasos country={dados.country}></GraficoLinhaCasos>
                    <GraficoLinhaRecuperados country={dados.country}></GraficoLinhaRecuperados>
                    <GraficoLinhaMortes country={dados.country}></GraficoLinhaMortes>


                
            </Container>
    )
}


