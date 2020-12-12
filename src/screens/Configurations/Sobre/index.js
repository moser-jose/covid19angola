import React, { useState } from 'react';
import { Linking } from 'react-native';
import Logo from '../../../assets/img/logo.svg';
import GitHub from '../../../assets/img/github.svg';
import Codepen from '../../../assets/img/codepen.svg';
import IconSend from '../../../assets/img/IconSend.svg';
import Voltar from '../../../components/Voltar';
import {useStateValue} from '../../../state/ContextProvider';
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
    Vers
    

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
                <TituloLightItalic>Proteja-se a si e a sua família </TituloLightItalic>
            </TituloApp>
                <RedesTexto style={{lineHeight:18, marginBottom:20, marginTop:20}}>App Mobile para visualização das estatísticas da Covid-19 em Angola e ao redor do mundo.</RedesTexto>
                
                <Vers><Versao>Versão 1.0.1</Versao></Vers>
            
                <RedesTextoDef>Agradecimentos</RedesTextoDef>
            <Redes onPress={() => Linking.openURL('https://github.com/disease-sh/api')}>
                <RedesTexto>Disease.sh</RedesTexto>
                <IconSend fill={state.theme.color} width="20" height="20" />
            </Redes>
            <Redes onPress={() => Linking.openURL('https://instagran.com/piqodesin')}>
                <RedesTexto>Piqodesign</RedesTexto>
                <IconSend fill={state.theme.color} width="20" height="20" />
            </Redes>
            <Redes onPress={() => Linking.openURL('https://www.drawkit.io/product/covid-19')}>
                <RedesTexto>drawkit.io</RedesTexto>
                <IconSend fill={state.theme.color} width="20" height="20" />
            </Redes>
            <Redes onPress={() => Linking.openURL('https://www.uplabs.com/posts/covid-19-illustrations')}>
                <RedesTexto>@manojkeet</RedesTexto>
                <IconSend fill={state.theme.color} width="20" height="20" />
            </Redes>
            <RedesTextoDef>Developer</RedesTextoDef>
            <RedesDev>
                <RedesTexto>@moser-jose</RedesTexto>
                <Social onPress={() => Linking.openURL('https://www.codepen.io/moser-jose')}>
                    <Codepen fill={state.theme.color} width="26" height="26" />
                </Social>
                <Social onPress={() => Linking.openURL('https://www.github.com/moser-jose')}><GitHub fill={state.theme.color} width="26" height="26" /></Social>
                
            </RedesDev>
            
        </Scroller>
        </Container>
    );
}