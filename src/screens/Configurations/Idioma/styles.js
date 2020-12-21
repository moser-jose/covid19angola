import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content:center;
    width:100%;
    padding:0 20px 10px 20px;
    background-color:${props=>props.theme.background};
`;

export const Scroler = styled.ScrollView`
    flex: 1;
    
`;


export const Voltar = styled.Text`
    font-size:12px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
    margin-left:4px;
    
`;
export const Back = styled.TouchableOpacity`
    flex-direction:row;
    
    margin-bottom:5px;
    
`;
export const TextoTema = styled.Text`
    font-size:20px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
    margin-top:30px;
    letter-spacing:1px;
    
`;
export const ConstainerSetting = styled.View`
    flex: 1;
    background-color:${props=>props.theme.container};
    elevation:2;
    border-radius:12px;
    margin: 20px 1px;
    padding:0 20px 0 20px;

`;
export const ContainerTexto = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    padding:10px 0;
    justify-content:center;
`;

export const Texto = styled.Text`
    font-size:16px;
    color:${props=>props.theme.color};
    letter-spacing:1px;
    flex:8;
    font-family:"Poppins-Regular";

`;
export const TextoTemaLight = styled.Text`
    font-size:12px;
    color:${props=>props.theme.color};
    font-family:"Poppins-Regular";
    margin-top:-6px;
    
    margin-bottom:20px;

`;

export const Barra = styled.View`
    height:1.5px;
    width:100%;
    background-color:rgba(159,173,191,0.4);
`;


export const TextoDispositivo = styled.Text`
    font-size:10px;
    color:rgba(159,173,191,9);
    letter-spacing:1px;
    font-family:"Poppins-Regular";
    margin-top:-4px;
`;
export const Dispositivo = styled.View`
    flex:1;
`;
export const Imagem = styled.View`
    height:20px;
    width:20px;
    background-color:red;
    border-radius:10px;
    margin-right:5px;
`;
export const Image = styled.Image`
`;