import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import IconCheck from '../../../assets/img/IconCheck.svg';
import IconUnCheck from '../../../assets/img/IconUncheck.svg';
import {useStateValue} from '../../../state/ContextProvider';
import {useStateValueLang} from '../../../state/ContextLang';
import Text from '../../../components/Text'; 
import AsyncStorage from '@react-native-community/async-storage';
import Voltar from '../../../components/Voltar';
import LanguageProvider,{ LanguageContext } from '../../../state/LanguageContext';
import { 
    Container,
    Scroler,
    ConstainerSetting,
    Barra,
    Texto,
    TextoTema,
    TextoTemaLight,
    ContainerTexto,
    Imagem,
    Image
} from './styles';
export default () => {
    const navigation=useNavigation();
    const [state, dispach]=useStateValue();
    const [stateLang,dispachLang]=useStateValueLang(); 
    const [ingles, setIngles]=useState(true);
    const [portugues, setPortugues]=useState(false);
    const [frances, setFrances]=useState(false);
    const handleClickIngles=()=>{
        setFrances(false);
        setIngles(true);
        setPortugues(false);
        dispachLang({
            type:'en_US'
          });
        
    }
    const handleClickPortugues=()=>{
        setFrances(false);
        setIngles(false);
        setPortugues(true);
        dispachLang({
            type:'pt_PT'
          });
       
       
    }
    const handleClickFrances=()=>{
        setFrances(true);
        setIngles(false);
        setPortugues(false);
        dispachLang({
            type:'fr_FR'
          });
    }
    async function getInitialState(){
    const idioma= await AsyncStorage.getItem("idioma");

    if(idioma=== '1'){
        setFrances(false);
        setIngles(true);
        setPortugues(false);
        return;
    }
    else if(idioma=== '2'){
        setFrances(false);
        setIngles(false);
        setPortugues(true);
        return;
    }
    else{
        setFrances(true);
        setIngles(false);
        setPortugues(false);
        return;
    }

}
useEffect(()=>{
    getInitialState();
},[]);
changeLanguage = (language, data) => () => {
    data.changeLanguage(language);
  }
    return(
        /* <LanguageProvider> */
        
        <Container>
            <Voltar></Voltar>
            <Scroler>
                <TextoTema><Text text='configuracao.idiomas.titulo'/></TextoTema>
                <TextoTemaLight><Text text='configuracao.idiomas.texto'/></TextoTemaLight>
                <ConstainerSetting>
                <LanguageContext.Consumer>
                {(data) => {
                    return (
                        <ContainerTexto onPressIn={ handleClickIngles} onPress={this.changeLanguage('en_US', data)}>
                            <Imagem>
                            <Image source= {require('../../../assets/img/us.png')}
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius:10, 
                                    resizeMode: 'cover' }}></Image>
                            </Imagem>
                            <Texto><Text text='configuracao.idiomas.ingles'/></Texto>
                            {
                                ingles ? 
                                
                                <IconCheck fill={state.theme.color} width="20" height="20" style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                                :
                                <IconUnCheck fill={state.theme.color} width="20" height="20" style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                            }
                        </ContainerTexto>
            );
            }}
            
        </LanguageContext.Consumer>
                  <Barra></Barra>
                  <LanguageContext.Consumer>
                  {(data) => {
                    return (
                    <ContainerTexto onPressIn={handleClickPortugues}   onPress={this.changeLanguage('pt_PT', data) }>
                    <Imagem>
                        <Image source= {require('../../../assets/img/pt.png')}
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius:10, 
                                resizeMode: 'cover' }}></Image>
                        </Imagem>
                        <Texto><Text text='configuracao.idiomas.portugues'/></Texto>
                        {
                                    portugues ? 
                                    
                                    <IconCheck fill={state.theme.color} width="20" height="20"  style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                                    :
                                    <IconUnCheck fill={state.theme.color} width="20" height="20"  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                                }
                        
                    </ContainerTexto>
                    );
                }}
                </LanguageContext.Consumer>
                   {/*  <Barra></Barra>
                    
          
                    <ContainerTexto  onPress={handleClickFrances}>
                        <Imagem>
                        <Image source= {require('../../../assets/img/fr.png')}
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius:10, 
                                resizeMode: 'cover' }}></Image>
                        </Imagem>
                            <Texto>Francês</Texto>
                        {
                                    frances ? 
                                    
                                    <IconCheck fill={state.theme.color} width="20" height="20"  style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                                    :
                                    <IconUnCheck fill={state.theme.color} width="20" height="20"  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                                }
                    </ContainerTexto>
                     */}
                </ConstainerSetting>
            </Scroler>
        </Container>
        /* </LanguageProvider> */
    );
}