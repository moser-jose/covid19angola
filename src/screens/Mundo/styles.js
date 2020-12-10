import React from 'react';
import styled from 'styled-components/native';

export const ContainerMap = styled.SafeAreaView`
    flex: 1;
    background-color:${props=>props.theme.background};
`;

export const TituloMundo = styled.View`
    padding:20px 20px 0 20px; 
    background-color:${props=>props.theme.background};
`;

export const Map = styled.View`
    width:100%;
    height:100%;
`;

export const Container = styled.View`
    height:50%;
    width:100%;
    padding:10px 20px;
    height: 110px;
    position:absolute;
    bottom:.1px;
    background-color:${props=>props.theme.container};
`;

export const Scroler = styled.View`
    flex: 1;
`;


export const TextoCovidTitulo = styled.Text`
    font-size:18px;
    margin:0 0 -8px 0;
    color:${props=>props.theme.color};
    font-family:'Poppins-Bold';
`;
export const TextoCovidTituloDesc = styled.Text`
    font-size:10px;
    margin-bottom:10px;
    color:${props=>props.theme.color};
    font-family:'Poppins-Light';
    letter-spacing:1px;
`;
export const Loading = styled.ActivityIndicator`
    margin:20px 0;
`;
/* export const FlatListEmergencia = styled.FlatList`
    flex:1;
`; */


export const Cont = styled.View`
    flex:1;
    padding:5px;
    border-radius:12px;
`;

export const NumerosEmergencia = styled.View`
    flex:1;
    elevation:2;
    padding:10px;
    background-color:${props=>props.theme.container};
    border-radius:12px;
    width:100%;
    
`;

export const EmergenciaTitulo = styled.View`
    flex:1;
    align-items:center;
`;

export const Foto = styled.View`
    justify-content:center;
    align-items:center;
    overflow:hidden;
    width:40px;
    height:40px;
    border-radius:20px;
    elevation:2;
    border:2px solid #0E3360;
`;

export const Texto = styled.View`
    padding:4px 0 2px 0;
    
`;

export const TextoTitulo = styled.Text`
    font-size:12px;
    font-family:'Poppins-Bold';
`;
export const TextoNumeroNew = styled.Text`
    font-size:9px;
    font-family:'Poppins-Bold';
`;


export const TextoDescricao = styled.View`
    height:1.2px;
    width:80%;
    background-color:#0E3360;
    margin-bottom:10px;
`;
export const EmergenciaNum = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
`;

export const ResultadosPais = styled.View`
    padding:16px 60px;
    color:#fff;
    background-color:#0E3360;
    margin-top:20px;
    border-radius:6px;
    letter-spacing:1px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;
export const FlatListEmergencia = styled.FlatList`
    
`;


export const Casos = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-top:7px;
`;

export const TextoCaso = styled.Text`
   font-size:10px;
   font-family:'Poppins-Regular';
`;
export const TextoNumero = styled.Text`
    font-size:10px;
    font-family:'Poppins-Bold';
`;


export const TituloApp = styled.Text`
    color:#0E3360;
    font-size:18px;
    font-family:'Poppins-Bold';
    justify-content:flex-start;
    
`;

export const ContainerTitulo = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin:20px 20px;
    elevation:2;

`;

export const Imagem = styled.View`
    /* border-radius:50%; */
    justify-content:center;
    align-items:center;
    overflow:hidden;
    width:30px;
    height:30px;
    border-radius:15px;
    elevation:2;
    border:1px solid #0E3360;
`;
export const Image = styled.Image`
`;
export const Botoes = styled.View`
    height:40px;
    flex:1;
    width:100%;
    position:absolute;
    
    z-index:3000;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    
`; 
export const CovidNumero = styled.TouchableOpacity`
    padding:2px 12px;
    border-radius:4px;
    elevation:2;
    margin:0 4px;
    

`; 
export const TextoBotao = styled.Text`
    font-family:"Poppins-Medium";
    font-size:12px;
    color:#FFF;
    letter-spacing:1px;
`; 
export const Mund = styled.View`
    flex:1;
    width:100%;
`; 

