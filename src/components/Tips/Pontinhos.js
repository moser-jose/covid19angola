import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const PontinhoBold = styled.TouchableOpacity`
        width: 18px;
        height: 9px;
        border-radius: 4px;
        background-color: #FF4B63;
        margin: 0 4px;
`;
const PontinhoLight = styled.TouchableOpacity`
        width: 35px;
        height: 9px;
        border-radius: 4px;
        background-color: ${props=>props.theme.pontinhos};
        margin: 0 4px;
        /* marginHorizontal: '1.5%',
        marginVertical: '0.5%' */
`;


export const DotBold = () => {
     return (
        <PontinhoBold></PontinhoBold>
    );
};

export const DotLight = ({onp}) => {
    return (
        <PontinhoLight onPress={onp}></PontinhoLight>
    )
}


