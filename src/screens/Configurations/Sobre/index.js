import React, { useState } from 'react';
import { Linking } from 'react-native';
import Logo from '../../../assets/img/logo.svg';
import GitHub from '../../../assets/img/github.svg';
import Codepen from '../../../assets/img/codepen.svg';
import Email from '../../../assets/img/email.svg';
import IconSend from '../../../assets/img/IconSend.svg';
import Voltar from '../../../components/Voltar';
import {useStateValue} from '../../../state/ContextProvider';
import Text from '../../../components/Text';
import {  
    Container,
    Scroller,
    TituloApp,
    TituloBold,
    TituloLightItalic,Redes,
    RedesTexto,
    RedesTextoDef,
    RedesDev,
    Social,
    Versao,
    VoltarContainer,
    Vers,
    RedesDevDev
    

} from './styles';

export default () => {
    const [state,dispach]=useStateValue();
    return(
        <Container>
            <VoltarContainer><Voltar></Voltar></VoltarContainer>
            <Scroller showsVerticalScrollIndicator={false}>
            <Logo width="100%" height="120" />
            <TituloApp>
                <TituloBold>Covid-19 Angola</TituloBold>
                <TituloLightItalic><Text text='configuracao.sobres.titulo'/></TituloLightItalic>
            </TituloApp>
                <RedesTexto style={{lineHeight:18, marginBottom:20, marginTop:20}}><Text text='configuracao.sobres.descricao'/></RedesTexto>
                
                <Vers><Versao><Text text='configuracao.sobres.versao'/> 1.0.1</Versao></Vers>
            
                <RedesTextoDef><Text text='configuracao.sobres.agradecimentos'/></RedesTextoDef>
            <Redes onPress={() => Linking.openURL('https://github.com/disease-sh/api')}>
                <RedesTexto>Disease.sh</RedesTexto>
                <IconSend fill={state.theme.color} width="22" height="22" />
            </Redes>
            <Redes onPress={() => Linking.openURL('https://instagram.com/piqodesign')}>
                <RedesTexto>Piqodesign</RedesTexto>
                <IconSend fill={state.theme.color} width="22" height="22" />
            </Redes>
            <Redes onPress={() => Linking.openURL('https://www.drawkit.io/product/covid-19')}>
                <RedesTexto>drawkit.io</RedesTexto>
                <IconSend fill={state.theme.color} width="22" height="22" />
            </Redes>
            <Redes onPress={() => Linking.openURL('https://www.uplabs.com/posts/covid-19-illustrations')}>
                <RedesTexto>manojkeet</RedesTexto>
                <IconSend fill={state.theme.color} width="22" height="22" />
            </Redes>

            {/* <RedesTextoDef>Veja o site em</RedesTextoDef>
            <RedesDev>
                <RedesTexto>covid19ao.vercel.app</RedesTexto>
                <Social onPress={() => Linking.openURL('https://covid19ao.vercel.app/')}>
                    <IconSend fill={state.theme.color} width="22" height="22" />
                </Social>
            </RedesDev> */}
            <RedesTextoDef><Text text='configuracao.sobres.contribuicao'/></RedesTextoDef>
            <RedesDevDev onPress={() => Linking.openURL('https://www.github.com/moser-jose/covid19angola')}>
                <RedesTexto>@covid19angola</RedesTexto>
                <Social >
                    <GitHub fill={state.theme.color} width="22" height="22" />
                </Social>
                
            </RedesDevDev>
            
            <RedesTextoDef><Text text='configuracao.sobres.sugestoes'/></RedesTextoDef>
            <RedesDevDev onPress={() => Linking.openURL('mailto:mosmmy@gmail.com')}>
                <RedesTexto>mosmmy@gmail.com</RedesTexto>
                <Social >
                    <Email fill={state.theme.color} width="22" height="22" />
                </Social>
                
            </RedesDevDev>
            <RedesTextoDef><Text text='configuracao.sobres.desenvol'/></RedesTextoDef>
            <RedesDev>
                <RedesTexto>@moser-jose</RedesTexto>
                <Social onPress={() => Linking.openURL('https://www.codepen.io/moser-jose')}>
                    <Codepen fill={state.theme.color} width="22" height="22" />
                </Social>
                <Social onPress={() => Linking.openURL('https://www.github.com/moser-jose')}><GitHub fill={state.theme.color} width="22" height="22" /></Social>
                
            </RedesDev>
            
        </Scroller>
        </Container>
    );
}