import React, {useState, useEffect} from 'react';
import IconBack from '../../../assets/img/IconBack.svg';
import {useNavigation} from '@react-navigation/native';
import IconCheck from '../../../assets/img/IconCheck.svg';
import IconUnCheck from '../../../assets/img/IconUncheck.svg';
import {useStateValue} from '../../../state/ContextProvider';
import AsyncStorage from '@react-native-community/async-storage';
import Voltar from '../../../components/Voltar';
import Text from '../../../components/Text';
import { 
    Container,
    Scroler,
    ConstainerSetting,
    Barra,
    Texto,
    TextoTema,
    TextoTemaLight,
    ContainerTexto,
    Dispositivo,
    TextoDispositivo
} from './styles';



export default () => {
    const navigation=useNavigation();
    const [state, dispach]=useStateValue();
    const [light, setLight]=useState(true);
    const [dark, setDark]=useState(false);
    const [phone, setPhone]=useState(false);
    const handleClickLight=()=>{
        setPhone(false);
        setLight(true);
        setDark(false);
        dispach({
            type:"lighTheme",
        })
    }
    const handleClickDark=()=>{
        setPhone(false);
        setLight(false);
        setDark(true);
        dispach({
            type:"darkTheme",
        })
    }
    const handleClickPhone=()=>{
        setPhone(true);
        setLight(false);
        setDark(false);
        dispach({
            type:"deviceTheme",
        })
    }
    async function getInitialState(){
    const darkModeKey= await AsyncStorage.getItem("Theme");

    if(darkModeKey=== '1'){
        setPhone(false);
        setLight(true);
        setDark(false);
        return;
    }
    else if(darkModeKey=== '2'){
        setPhone(false);
        setLight(false);
        setDark(true);
        return;
    }
    else{
        setPhone(true);
        setLight(false);
        setDark(false);
        return;
    }

}
useEffect(()=>{
    getInitialState();
},[]);

    return(
        <Container>
            <Voltar></Voltar>
            <Scroler>
                <TextoTema><Text text='configuracao.temas.titulo'/></TextoTema>
                <TextoTemaLight><Text text='configuracao.temas.texto'/></TextoTemaLight>
                <ConstainerSetting>
                    <ContainerTexto onPress={handleClickLight}>
                        <Texto><Text text='configuracao.temas.claro'/></Texto>
                        {
                            light ? 
                            
                            <IconCheck fill={state.theme.color} width="20" height="20" style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                            :
                            <IconUnCheck fill={state.theme.color} width="20" height="20" style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                        }
                    </ContainerTexto>
                    <Barra></Barra>
                    <ContainerTexto  onPress={handleClickDark}>
                        <Texto><Text text='configuracao.temas.escuro'/></Texto>
                        {
                                    dark ? 
                                    
                                    <IconCheck fill={state.theme.color} width="20" height="20"  style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                                    :
                                    <IconUnCheck fill={state.theme.color} width="20" height="20"  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                                }
                        
                    </ContainerTexto>
                    <Barra></Barra>
                    <ContainerTexto  onPress={handleClickPhone}>
                        <Dispositivo>
                            <Texto><Text text='configuracao.temas.automatico'/></Texto>
                            <TextoDispositivo>
                            <Text text='configuracao.temas.desc'/>
                            </TextoDispositivo>
                        </Dispositivo>
                        {
                                    phone ? 
                                    
                                    <IconCheck fill={state.theme.color} width="20" height="20"  style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                                    :
                                    <IconUnCheck fill={state.theme.color} width="20" height="20"  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                                }
                    </ContainerTexto>
                    
                </ConstainerSetting>
            </Scroler>
        </Container>
    );
}