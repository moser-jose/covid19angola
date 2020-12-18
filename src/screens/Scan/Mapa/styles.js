import React from 'react';
import styled from 'styled-components/native';

export const ContainerMap = styled.SafeAreaView`
    flex: 1;
    background-color:${props=>props.theme.background};
`;
export const Container = styled.View`
    width:100%;
    padding:0 20px;
    background-color:${props=>props.theme.background};
`;

export const Mund = styled.View`
    flex:1;
    width:100%;
`; 

