import React from 'react';
import { Linking } from 'react-native';
import TesteCovid from '../../components/TesteCovid';
import NumerosEmergencia from '../../components/NumerosEmergencia';
import ContainerTitulo from '../../components/ContainerTitulo';
import Mascara from '../../assets/img/Patient';
import SocialDistance from '../../assets/img/Social-Distance';
import Febres from '../../assets/img/Fever';
import LavarMaos from '../../assets/img/Hand-Wash';
import Home from '../../assets/img/Stay-Home';
import Tosse from '../../assets/img/Cough';
import Text from '../../components/Text';
import {useStateValue} from '../../state/ContextProvider';
import { 
    Container,
    Scroler,
    TextoCovid,
    TextoCovidTitulo,
    Recomendacao,
    Info,
    Recom,
    Texto,
    Fonte,
    TextoFonte,
    TextoFonteLink
} from './styles';

export default () => {

    const [state, dispach]=useStateValue();
    return(
        <Container>
                <ContainerTitulo titulo={<Text text='emergencia.titulo'/>} bandeira={1}>
                </ContainerTitulo>
                <Scroler>
                    <TesteCovid></TesteCovid>
                    <TextoCovidTitulo>
                    <Text text='emergencia.contatosEmergencia'/>
                    </TextoCovidTitulo>
                    <TextoCovid>
                    <Text text='emergencia.texto'/>
                    </TextoCovid>
                    <NumerosEmergencia>
                    </NumerosEmergencia>
                    <TextoCovidTitulo>
                    <Text text='emergencia.recomendacao'/>
                    </TextoCovidTitulo>
                    <TextoCovid>
                    <Text text='emergencia.descricao'/>
                    </TextoCovid>

                    <Recomendacao>
                        <Recom>
                            <Info>
                                <Mascara fill={state.theme.color}></Mascara>
                                <Texto><Text text='emergencia.mascara'/></Texto>
                            </Info>
                            <Info>
                                <SocialDistance fill={state.theme.color}></SocialDistance>
                                <Texto><Text text='emergencia.distacia'/></Texto>
                            </Info>
                        </Recom>
                        <Recom>
                            <Info>
                                <Febres fill={state.theme.color}></Febres>
                                <Texto><Text text='emergencia.sintomas'/></Texto>
                            </Info>
                            <Info>
                                <LavarMaos fill={state.theme.color}></LavarMaos>
                                <Texto><Text text='emergencia.lavar'/></Texto>
                            </Info>
                        </Recom>
                        <Recom>
                            <Info>
                                <Home fill={state.theme.color}> </Home>
                                <Texto><Text text='emergencia.casa'/></Texto>
                            </Info>
                            <Info>
                                <Tosse fill={state.theme.color}></Tosse>
                                <Texto><Text text='emergencia.tosse'/></Texto>
                            </Info>
                        </Recom>
                    
                    </Recomendacao>
                    <Fonte>
                        <TextoFonte>
                        <Text text='emergencia.fonte'/>:
                        </TextoFonte>
                        <TextoFonteLink  onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}>
                        <Text text='emergencia.org'/>
                        </TextoFonteLink>
                    </Fonte>
                </Scroler>
        </Container>
    );
}