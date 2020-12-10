import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content:center;
    width:100%;
    /* background-color:#F2F6F8; */
    background-color:${props=>props.theme.background};
    padding:20px 20px 0 20px;
    
`;

export const Scroler = styled.ScrollView`
    flex: 1;
    
    
`;
export const Loading = styled.ActivityIndicator`
    margin:20px 0;
    color:${props=>props.theme.color};
`;
export const DadosCovid = styled.View`
`;

export const Graficos = styled.View`
    
`;

export const GraficosView = styled.View`
    margin:1px;
`;

export const Texto = styled.Text`

`;
export const Angola = styled.View`
    margin:1px;
    
    
    
    
`;
export const DadosAngola = styled.View`
    flex-direction:row;
    justify-content:space-between;
    flex:1;
    
   
`;

export const Dados = styled.View`
    background-color:${props=>props.theme.container};
    width:49%;
    padding:10px;
    overflow:hidden;
    border-radius:12px;
    elevation:2;
    margin-bottom:10px;
    height:90px;
    
`;

export const DadosCont = styled.View`
`;
export const Titulo = styled.Text`
    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:14px;
    color:${props=>props.theme.color};
`;

export const TextoCont = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
`;
export const TituloDado = styled.Text`
    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:18px;
    text-align:right;
    color:${props=>props.theme.color};
`;

export const TituloDadoNew = styled.Text`
    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:10px;
    text-align:right;
    margin-right:6px;
    color:${props=>props.theme.color};
    
`;
export const TituloDadoCritico = styled.Text`

    font-family:"Poppins-Bold";
    letter-spacing:1px;
    font-size:14px;
    color:${props=>props.theme.color};
`;
export const DadosCovidAngola = styled.View`

`;
