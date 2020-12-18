import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color:${props=>props.theme.background};;
    flex: 1;
    position: relative;
    padding:0px 20px 20px 20px;
    align-items:center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    margin-top:10px;
`;

export const TituloApp = styled.View`
    width:100%;
    text-align: center;
    margin-top:5px;
`;
export const TituloBold = styled.Text`

    color:${props=>props.theme.color};
    font-family:"Poppins-Bold";
    font-size: 25px;
    letter-spacing: 1px;
    text-align: center;

`;
export const TituloLightItalic = styled.Text`
    color:${props=>props.theme.title};
    font-family:"Poppins-LightItalic";
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
    margin-top:-10px;
`;

export const Redes = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    background-color:${props=>props.theme.container};
    padding:10px;
    elevation:2;
    margin:4px 1px;
    border-radius:4px;
    justify-content:space-between;
`;
export const RedesTexto = styled.Text`
   color:${props=>props.theme.color};
    font-family:"Poppins-Medium";
    font-size: 14px;
    letter-spacing: 1px;
    margin-left:4px;
    flex:.9;
    font-weight:bold;
`;
export const RedesTextoDef = styled.Text`
   color:${props=>props.theme.color};
    font-family:"Poppins-Medium";
    font-size: 16px;
    letter-spacing: 1px;
    border-radius:4px;
    padding:5px 10px;
    
    margin-top:20px;
`;
export const RedesDev= styled.View`
    flex-direction:row;
    align-items:center;
    background-color:${props=>props.theme.container};
    padding:10px;
    elevation:2;
    margin:4px 1px;
    border-radius:4px;
    justify-content:space-between;
`;
export const RedesDevDev= styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    background-color:${props=>props.theme.container};
    padding:10px;
    elevation:2;
    margin:4px 1px;
    border-radius:4px;
    justify-content:space-between;
`;


export const Social = styled.TouchableOpacity`
    
`;
export const Vers = styled.View`
    justify-content:center;
    align-items:center;
`;

export const Versao = styled.Text`
    background-color:#FF4B63;
    padding:4px 10px;
    border-radius:3px;
    font-size:10px;
    color:#FFF;
    font-family:"Poppins-Bold";
    margin:10px 0;
    text-align:center;
    width:27%;
    
`;
export const VoltarContainer = styled.View`
    width:100%;
`;
