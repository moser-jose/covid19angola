import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content:center;
    padding:20px 20px 10px 20px;
    background-color:${props=>props.theme.background};
`;

export const Scroler = styled.View`
    flex: 1;
    width:100%;
    height:100%;
    margin-bottom:190px;
`;
export const Search = styled.View`
    margin:30px  0 10px 0;
    flex-direction:row;
    justify-content:center;
    border-radius:6px;
    background-color:#ddd;
    overflow:hidden;
    align-items:center;
    elevation:2;
`;
export const SearchDiv = styled.View`
    flex:8;
    flex-direction:row;
    background-color:#ddd;
    border-radius:4px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
    elevation:2;
    align-items:center;
    padding:0 10px;

`;

export const Input = styled.TextInput`
    margin-left:2px;
    font-size:16px;
    width:100%;
    letter-spacing:1px;
`;
export const Filter = styled.TouchableOpacity`
    flex:1;
    align-items:center;
    justify-content:center;

`;



export const Loading = styled.ActivityIndicator`
    margin:20px 0;
`;
