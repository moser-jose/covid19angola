import React,{useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {useStateValue} from '../../state/ContextProvider';
import { 
    Container,
    IconLoading,
    IconLoad,
    TituloApp,
    TituloBold,
    TituloLightItalic,
    BemvindoApp,
    BemvindoAppText,
    BemvindoAppVersao
} from './styles';

import Logo from '../../assets/img/logo.svg';

export default () => {
    const [state,dispach]=useStateValue();
    const navigation=useNavigation();
    useEffect(()=>{
        const entrar =()=>{
            setTimeout(() => {
                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            },100);
        }
        entrar();
    });

    return(
        <Container>
            <Logo width="100%" height="120" />
            <TituloApp>
                <TituloBold>Covid-19 Angola</TituloBold>
                <TituloLightItalic>Proteja-se a si e a sua família </TituloLightItalic>
            </TituloApp>
           <IconLoad>
            <IconLoading size="large"  color={state.theme.color}>

                </IconLoading>
           </IconLoad>
            <BemvindoApp>
                <BemvindoAppText>Bem Vindo</BemvindoAppText>
                <BemvindoAppVersao>Versão 1.0.1</BemvindoAppVersao>
            </BemvindoApp>
        </Container>
    );
}