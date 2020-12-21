import React,{useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {useStateValue} from '../../state/ContextProvider';
import Text from '../../components/Text';
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
    const entrar =()=>{
        setTimeout(() => {
            navigation.reset({
                routes:[{name:'SplashTips1'}]
            });
        },150);
    }
    useEffect(()=>{
        entrar();
    },[]);

    return(
        <Container>
            <Logo width="100%" height="120" />
            <TituloApp>
                <TituloBold>Covid-19 Angola</TituloBold>
                <TituloLightItalic><Text text='splash.titulo'/> </TituloLightItalic>
            </TituloApp>
           <IconLoad>
            <IconLoading size="large"  color={state.theme.color}>

                </IconLoading>
           </IconLoad>
            <BemvindoApp>
                <BemvindoAppText><Text text='splash.benvindo'/></BemvindoAppText>
                <BemvindoAppVersao><Text text='splash.versao'/> 1.0.1</BemvindoAppVersao>
            </BemvindoApp>
        </Container>
    );
}