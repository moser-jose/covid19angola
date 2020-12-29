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
import Text from '../../components/Text';
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
            url:"https://github.com/moser-jose/covid19angola",
            message:"Instale o App Covid-19 Angola e tenha todas as informações das estatísticas da Covid-19 em Angola e ao redor do mundo. Faça o download em https://github.com/moser-jose/covid19angola/releases/download/v1.0.1/Covid-19.Angola.apk"
        },{
            dialogTitle:"Partilhe o App Covid-19 Angola"
        })
    }
    return(
        <Container>
            <ContainerTitulo titulo={<Text text='configuracao.titulo'/>} bandeira={1}></ContainerTitulo>
            <Scroler>
                <TesteCovid></TesteCovid>
                <ConstainerSetting>
                    <ContainerTexto onPress={handleClickTema}>
                        <Icon fill={state.theme.color} width="20" height="20"></Icon>
                        <Texto><Text text='configuracao.tema'/></Texto>
                        <IconNext fill={state.theme.color} width="20" height="20"></IconNext>
                    </ContainerTexto>
                    <Barra></Barra>
                    <ContainerTexto onPress={handleClickIdioma}>
                        <Idioma fill={state.theme.color} width="20" height="20"></Idioma>
                        <Texto><Text text='configuracao.idioma'/></Texto>
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
                        <Texto><Text text='configuracao.partilha'/></Texto>
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
                        <Texto><Text text='configuracao.sobre'/></Texto>
                        <IconNext fill={state.theme.color} width="20" height="20"></IconNext>
                    </ContainerTexto>
                </ConstainerSetting>
            </Scroler>
        </Container>
    );
}