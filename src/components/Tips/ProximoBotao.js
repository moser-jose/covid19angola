import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    width: 60%;
    height: 8%;
    background-color: #FF4B63;
    border-radius: 24;/* 
    marginVertical: '5%', */
    justify-content: center;
    align-items: center;
    margin-top:40px;
    margin-bottom:30px;
    elevation:1;
    padding-top:5px;
`;

const Texto = styled.Text`
    font-size: 20px;
    letter-spacing:1px;
    color:#FFF;
    font-family: 'Poppins-Bold';
`;

export default ProximoBotao = props => {
    return (
        <Container onPress={props.onClick}>
            <Texto>{props.children}</Texto>
        </Container>
    );
};
