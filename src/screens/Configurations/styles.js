import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content:center;
    width:100%;
    padding:20px 20px 10px 20px;
    background-color:${props=>props.theme.background};
`;

export const Scroler = styled.ScrollView`
    flex: 1;
    
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
`;

export const Texto = styled.Text`
    font-size:16px;
    color:${props=>props.theme.color};
    letter-spacing:1px;
    padding-left:10px;
    flex:8;
    font-family:"Poppins-Regular";

`;
export const Barra = styled.View`
    height:1.5px;
    width:100%;
    background-color:rgba(159,173,191,0.4);
`;
