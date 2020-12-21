import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Numeral from 'numeral';
import {useStateValue} from '../state/ContextProvider';
import "numeral/locales/pt-pt";
import Api from '../api/Api';
import Separador from './Separador';
import {VictoryScatter,VictoryLine,VictoryLabel,VictoryAxis, VictoryChart, VictoryTheme } from "victory-native";
import moment from 'moment';
import 'moment/locale/pt';

import Text from './Text';
const DivGraf = styled.View`
    flex:1;
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
    padding-bottom:20px;
    height:350px;
    
`;
const Loading = styled.ActivityIndicator`
    margin:20px 0;
    color:${props=>props.theme.color};
`;
export function GraficoLinhaCasos({country}) {
  moment.locale('pt');
  const [dataCasos, setDataCasos] = useState({});
  const [state,dispach]=useStateValue();
  const [width,setWidth]=useState(0);
  const [height,setHeight]=useState(0);
  const [loading, setLoading]=useState(false);

  const buildChartDataCasos = (data) => {
    const formatarNumero = (stat) =>
    stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
    let chartDataActive = [];
    let lastDataPoint;
    for (let date in data) {
      if (lastDataPoint) {
        let newDataPoint = {
          x:moment(date).format('L'),
          y: data[date] - lastDataPoint,
          u:formatarNumero(data[date] - lastDataPoint)
        };
        chartDataActive.push(newDataPoint);
      }
      lastDataPoint = data[date]; 
    } 
    return chartDataActive;
  };
  useEffect(() => {
    let isMounted = true;

    const getHistorico = async () => {
      setLoading(true);
      let res =await Api.getPaisHistorico(country);
      let chartDataCasos = buildChartDataCasos(res.timeline.cases);
      if (isMounted) {
        setDataCasos(chartDataCasos);
      }
      setLoading(false);
  }
  getHistorico();
  return () => { isMounted = false };
  }, []);
    return (
      <>
      {
        
        loading == true
        ? 
            <Loading size="large" color={state.theme.color}></Loading> 
        : 
        dataCasos?.length > 0 && (
          <DivGraf>
    <Separador titulo={<Text text='graficoLinhaCasos.titulo'/>} descricao={<Text text='graficoLinhaCasos.descricao'/>}></Separador>
    <DivCont onLayout={(event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        setWidth(width);
        setHeight(height);
        }}>
      <VictoryChart domainPadding={22}
        width={width} height={height}
        theme={VictoryTheme.material}>
      <VictoryLine 
          interpolation={"cardinal"} data={dataCasos}
          style={{ data: { stroke: '#007BFF'} }}
          labelComponent={<VictoryLabel  style={{fill:`${state.theme.color}`,fontWeight:"bold", fontSize:12}} />}
          labels={({ datum }) => datum.u}
      />
      <VictoryAxis style={{tickLabels: { fill: `${state.theme.color}`, fontSize: 9, fontWeight:'bold'  }}} /* crossAxis={false} *//>
      <VictoryScatter data={dataCasos}
          size={5}
          style={{ data: { fill: '#007BFF' } }}
      />
      </VictoryChart>
    </DivCont>
</DivGraf>
        )
      }
   </>
  );
}
export function GraficoLinhaRecuperados({country}) {
  moment.locale('pt');
  const [dataRecuperdos, setDataRecuperados] = useState({});
  const [state,dispach]=useStateValue();
  const [width,setWidth]=useState(0);
  const [height,setHeight]=useState(0);
  const [loading, setLoading]=useState(false);

  const buildChartDataRecuperados = (data) => {
    const formatarNumero = (stat) =>
    stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
    let chartDataActive = [];
    let lastDataPoint;
    for (let date in data) {
      if (lastDataPoint) {
        let newDataPoint = {
          x:moment(date).format('L'),
          y: data[date] - lastDataPoint,
          u:formatarNumero(data[date] - lastDataPoint)
        };
        chartDataActive.push(newDataPoint);
      }
      lastDataPoint = data[date]; 
    } 
    return chartDataActive;
  };
  useEffect(() => {
    let isMounted = true;

    const getHistorico = async () => {
      setLoading(true);
      let res =await Api.getPaisHistorico(country);
      let chartDataRecuperados = buildChartDataRecuperados(res.timeline.recovered);
      if (isMounted) {
        setDataRecuperados(chartDataRecuperados);
      }
      setLoading(false);
  }
  getHistorico();
  return () => { isMounted = false };
  }, []);
    return (
      <>
      {
        
        loading == true
        ? 
            <Loading size="large" color={state.theme.color}></Loading> 
        : 
        dataRecuperdos?.length > 0 && (
          <DivGraf>
    <Separador titulo={<Text text='graficoLinhaRecuperados.titulo'/>} descricao={<Text text='graficoLinhaRecuperados.descricao'/>}></Separador>
    <DivCont onLayout={(event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        setWidth(width);
        setHeight(height);
        }}>
      <VictoryChart domainPadding={22}
        width={width} height={height}
        theme={VictoryTheme.material}>
      <VictoryLine 
          interpolation={"cardinal"} data={dataRecuperdos}
          style={{ data: { stroke: '#21BA4F'} }}
          labelComponent={<VictoryLabel  style={{fill:`${state.theme.color}`,fontWeight:"bold", fontSize:12}} />}
          labels={({ datum }) => datum.u}
      />
      <VictoryAxis style={{tickLabels: { fill: `${state.theme.color}`, fontSize: 9, fontWeight:'bold'  }}} crossAxis={true}/>
      <VictoryScatter data={dataRecuperdos}
          size={5}
          style={{ data: { fill: '#21BA4F' } }}
      />
      </VictoryChart>
    </DivCont>
</DivGraf>
        )
      }
   </>
  );
    }

export function GraficoLinhaMortes({country}) {
  moment.locale('pt');
  const [dataMortes, setDataMortes] = useState({});
  const [state,dispach]=useStateValue();
  const [width,setWidth]=useState(0);
  const [height,setHeight]=useState(0);
  const [loading, setLoading]=useState(false);

  const buildChartDataMortes = (data) => {
    const formatarNumero = (stat) =>
    stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
    let chartDataActive = [];
    let lastDataPoint;
    for (let date in data) {
      if (lastDataPoint) {
        let newDataPoint = {
          x:moment(date).format('L'),
          y: data[date] - lastDataPoint,
          u:formatarNumero(data[date] - lastDataPoint)
        };
        chartDataActive.push(newDataPoint);
      }
      lastDataPoint = data[date]; 
    } 
    return chartDataActive;
  };
  useEffect(() => {
    let isMounted = true;

    const getHistorico = async () => {
      setLoading(true);
      let res =await Api.getPaisHistorico(country);
      let chartDataActive = buildChartDataMortes(res.timeline.deaths);
      if (isMounted) {
        setDataMortes(chartDataActive);
        setLoading(false);
      }
      
  }
  getHistorico();
  return () => { isMounted = false };
  }, []);
    return (
      <>
      {
        
        loading == true
        ? 
            <Loading size="large" color={state.theme.color}></Loading> 
        : 
        dataMortes?.length > 0 && (
          <DivGraf>
    <Separador titulo={<Text text='graficoLinhaMortes.titulo'/>} descricao={<Text text='graficoLinhaMortes.descricao'/>}></Separador>
    <DivCont onLayout={(event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        setWidth(width);
        setHeight(height);
        }}>
      <VictoryChart domainPadding={22}
        width={width} height={height}
        theme={VictoryTheme.material}>
      <VictoryLine 
          interpolation={"cardinal"} data={dataMortes}
          style={{ data: { stroke: '#FF3131'} }}
          labelComponent={<VictoryLabel  style={{fill:`${state.theme.color}`,fontWeight:"bold", fontSize:12}} />}
          labels={({ datum }) => datum.u}
      />
      <VictoryAxis style={{tickLabels: { fill: `${state.theme.color}`, fontSize: 9, fontWeight:'bold'  }}} /* crossAxis={false} *//>
      <VictoryScatter data={dataMortes}
          size={5}
          style={{ data: { fill: '#FF3131' } }}
      />
      </VictoryChart>
    </DivCont>
</DivGraf>
        )
      }
   </>
  );
}