import React from 'react';
import IconBack from '../assets/img/IconBack.svg';
import {useNavigation} from '@react-navigation/native';
import {useStateValue} from '../state/ContextProvider';
import styled from 'styled-components/native';

const Voltar = styled.Text`
    font-size:16px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
    margin-left:4px;
    
`;
const Back = styled.TouchableOpacity`
    flex-direction:row;
    margin-bottom:5px;
    margin:20px 0 10px 0;
    
`;

export default () => {
    const navigation=useNavigation();
    const [state, dispach]=useStateValue();
    const handleClickBack =()=>{
        navigation.goBack();
    }

    return(
        <Back onPress={handleClickBack}>
            <IconBack fill={state.theme.color} width="26" height="26"></IconBack>
            <Voltar>Voltar</Voltar>
        </Back>
    );
}