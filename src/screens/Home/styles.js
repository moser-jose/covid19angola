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

export const DadosPais = styled.View`
    
    /* position:absolute; */
    /* top:-10px; */
`;
/* export const Texto = styled.Text`
font-size:16px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
    margin-left:4px;
    background-color:${props=>props.theme.container};;
`; */

export const Titulo = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;
export const TextoPais = styled.Text`
    font-size:18px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
    margin-left:4px;
`;
export const Flag = styled.Image`
`;
export const TextoContinente = styled.View`
    flex-direction:row;
    margin-top:20px;
`;
export const TextoContinenteTexto = styled.Text`
    font-size:12px;
    font-family:"Poppins-Medium";
    color:${props=>props.theme.color};
`;
export const DadosDetalhes = styled.View`
    width:100%;
    margin:1px 1px 20px 1px;
    background-color:${props=>props.theme.container};;
    elevation:2;
    border-radius:8px;
    padding:10px;
    margin-top: 20px;
`;
export const MapaContainer = styled.View`
    margin-top:20px;
    width:100%;
`;
export const Botao = styled.TouchableOpacity`
    justify-content:center;
    width:100%;
    align-items:center;
`;
export const BotaoText = styled.Text`
    font-family:"Poppins-Bold";
    font-size:12px;
    color:${props=>props.theme.background};
    background-color:${props=>props.theme.color};
    padding:4px 30px;
    border-radius:4px;
    letter-spacing:1px;
`;