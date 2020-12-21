import React, {useState, useEffect} from 'react';
import {Share} from 'react-native';
import TesteCovid from '../../components/TesteCovid';
import ContainerTitulo from '../../components/ContainerTitulo';
import Icon from '../../assets/img/IconScan.svg';
import IconNext from '../../assets/img/IconRight.svg';
import IconApp from '../../assets/img/IconApp.svg';
import IconFeedback from '../../assets/img/IconFeedback.svg';
import IconShare from '../../assets/img/share.svg';
import IconInfo from '../../assets/img/IconInfo.svg';
import Idioma from '../../assets/img/Idioma.svg';
import IconPrivacidade from '../../assets/img/privacidade.svg';
import IconTermos from '../../assets/img/termos.svg';

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

export default () => {
    const [state, dispach]=useStateValue();
    const navigation=useNavigation();
    const handleClickTema =()=>{
        navigation.navigate('Temas');
    }
    const handleClickSobre =()=>{
        navigation.navigate('Sobre');
    }

    const handleClickIdioma =()=>{
        navigation.navigate('Idioma');
    }
    const handleClickShare=()=>{
        Share.share({
            title:"Covid-19 Angola",
            url:"www.google.com",
            message:"Instale o App Covid-19 Angola e tenha todas as informações das estatísticas da Covid-19 em Angola e ao redor do mundo. Faça o download em www.google.com"
        },{
            dialogTitle:"Partilhe o App Covid-19 Angola"
        })
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
                    <Barra></Barra>
                    <ContainerTexto onPress={handleClickIdioma}>
                        <Idioma fill={state.theme.color} width="20" height="20"></Idioma>
                        <Texto>Idioma</Texto>
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
                    <ContainerTexto onPress={handleClickShare}>
                        <IconShare fill={state.theme.color} width="20" height="20"></IconShare>
                        <Texto>Partilhar o App</Texto>
                        <IconNext fill={state.theme.color} width="20" height="20"></IconNext>
                    </ContainerTexto>
                   {/*  <Barra></Barra>
                    <ContainerTexto onPress={handleClickShare}>
                        <IconPrivacidade fill={state.theme.color} width="20" height="20"></IconPrivacidade>
                        <Texto>Política de Privacidade</Texto>
                        <IconNext fill={state.theme.color} width="20" height="20"></IconNext>
                    </ContainerTexto>
                    <Barra></Barra>
                    <ContainerTexto onPress={handleClickShare}>
                        <IconTermos fill={state.theme.color} width="20" height="20"></IconTermos>
                        <Texto>Termos e Condições</Texto>
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