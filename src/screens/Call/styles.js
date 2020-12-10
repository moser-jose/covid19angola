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
export const TextoCovidTitulo = styled.Text`
    font-size:20px;
    margin:20px 0 0 0;
    color:${props=>props.theme.color};
    font-family:'Poppins-Bold';
`;
export const TextoCovid = styled.Text`
    font-size:14px;
    margin:10px 0;
    color:${props=>props.theme.color};
    font-family:'Poppins-Regular';
`;
export const Recomendacao = styled.View`
    flex:1;/* 
    align-items:center;
    justify-content:center; */
    background-color:${props=>props.theme.container};
    margin:1px;
    elevation:2;
    border-radius:12px;
    padding:20px;
    flex-direction:column;
`;
export const Recom = styled.View`
    flex:1;
    flex-direction:row;
    align-items:center;
`;
export const Info = styled.View`
    flex:1;
    align-items:center;
    margin-top:20px;
`;
export const Texto = styled.Text`
    font-size:14px;
    color:${props=>props.theme.color};
    font-family:'Poppins-Regular';
    text-align:center;
    margin-top:10px;

`;
export const Fonte = styled.View`
    flex-direction:row;
    margin-top:10px;
`;
export const TextoFonte = styled.Text`
    font-size:10px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
`;
export const TextoFonteLink = styled.Text`
    font-size:10px;
    font-family:"Poppins-Medium";
    color:${props=>props.theme.color};
    margin-left:5px;
    text-decoration:underline;
`;
