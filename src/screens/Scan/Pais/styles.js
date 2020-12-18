import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:${props=>props.theme.background};;
`;
export const Bandeira = styled.View`
    width:100%;
    height:150px;
`;
export const DadosPais = styled.View`
   /*  width:100%;
    height:100px;
    
    background-color:${props=>props.theme.container};;
    elevation:2;
    border-radius:8px;
    padding:20px; */
    /* position:absolute; */
    /* top:-10px; */
`;
export const Scroler = styled.ScrollView`
    padding:0 20px;
    position:relative;
`;
export const Texto = styled.Text`
font-size:16px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
    margin-left:4px;
    background-color:${props=>props.theme.container};;
`;

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

export const VoltarContainer = styled.View`
    padding-left:20px;
`;
export const DadosDetalhes = styled.View`
    padding:20px;
`;
export const MapaContainer = styled.View`
   width:100%;
    background-color:${props=>props.theme.container};;
    elevation:2;
    border-radius:8px;
    padding:10px;
`;
export const Botao = styled.TouchableOpacity`
    justify-content:center;
    width:100%;
    align-items:center;margin-top:20px;
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