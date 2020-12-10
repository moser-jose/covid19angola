import React, {useState, useEffect} from 'react';
import TesteCovid from '../../components/TesteCovid';
import ContainerTitulo from '../../components/ContainerTitulo';
import Icon from '../../assets/img/IconScan.svg';
import IconNext from '../../assets/img/IconRight.svg';
import IconApp from '../../assets/img/IconApp.svg';
import IconFeedback from '../../assets/img/IconFeedback.svg';
import IconInfo from '../../assets/img/IconInfo.svg';

import {useStateValue} from '../../state/ContextProvider';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    Scroler,
    ConstainerSetting,
    ContainerTexto,
    Texto,
    Barra
} from './styles';


/* instagram.com/Piqo.design */

export default () => {
    const [state, dispach]=useStateValue();
    const navigation=useNavigation();
    const handleClickTema =()=>{
        navigation.navigate('Temas');
    }
    const handleClickSobre =()=>{
        navigation.navigate('Sobre');
    }
    return(
        <Container>
            <ContainerTitulo titulo="Configurações" bandeira={1}></ContainerTitulo>
            <Scroler>
                <TesteCovid></TesteCovid>
                <ConstainerSetting>
                    <ContainerTexto onPress={handleClickTema}>
                        <Icon fill={state.theme.color} width="20" height="20"></Icon>
                        <Texto>Temas</Texto>
                        <IconNext fill={state.theme.color} width="20" height="20"></IconNext>
                    </ContainerTexto>
                    {/* <Barra></Barra>
                    <ContainerTexto>
                        <IconApp fill={state.theme.color} width="20" height="20"></IconApp>
                        <Texto>Como usar o App</Texto>
                        <IconNext fill={state.theme.color} width="20" height="20"></IconNext>
                    </ContainerTexto>
                    <Barra></Barra>
                    <ContainerTexto>
                        <IconFeedback fill={state.theme.color} width="20" height="20"></IconFeedback>
                        <Texto>Feedback</Texto>
                        <IconNext fill={state.theme.color} width="20" height="20"></IconNext>
                    </ContainerTexto> */}
                    <Barra></Barra>
                    <ContainerTexto onPress={handleClickSobre}>
                        <IconInfo fill={state.theme.color} width="20" height="20"></IconInfo>
                        <Texto>Sobre o App</Texto>
                        <IconNext fill={state.theme.color} width="20" height="20"></IconNext>
                    </ContainerTexto>
                </ConstainerSetting>
            </Scroler>
        </Container>
    );
}