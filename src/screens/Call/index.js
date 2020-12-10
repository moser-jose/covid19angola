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
                <ContainerTitulo titulo="Emergência" bandeira={1}>
                </ContainerTitulo>
                <Scroler>
                    <TesteCovid></TesteCovid>
                    <TextoCovidTitulo>
                        Contactos de Emergência
                    </TextoCovidTitulo>
                    <TextoCovid>
                        Se você tiver febre, tosse e dificuldade para respirar e tiver estado recentemente no exterior ou tiver estado em contacto próximo com alguém confirmado com COVID-19, entre em contacto com um dos centros hospitalares mais próximo a si.
                    </TextoCovid>
                    <NumerosEmergencia>
                    </NumerosEmergencia>
                    <TextoCovidTitulo>
                        Recomendações
                    </TextoCovidTitulo>
                    <TextoCovid>
                        Proteja-se e proteja as pessoas que amas.
                    </TextoCovid>

                    <Recomendacao>
                        <Recom>
                            <Info>
                                <Mascara fill={state.theme.color}></Mascara>
                                <Texto>Use sempre a mascara facial</Texto>
                            </Info>
                            <Info>
                                <SocialDistance fill={state.theme.color}></SocialDistance>
                                <Texto>Evite o contacto físico a menos de 2 metros</Texto>
                            </Info>
                        </Recom>
                        <Recom>
                            <Info>
                                <Febres fill={state.theme.color}></Febres>
                                <Texto>Sintomas do Covid19, ligue para os números de emergência</Texto>
                            </Info>
                            <Info>
                                <LavarMaos fill={state.theme.color}></LavarMaos>
                                <Texto>Lave e desinfecte sempre as mãos</Texto>
                            </Info>
                        </Recom>
                        <Recom>
                            <Info>
                                <Home fill={state.theme.color}> </Home>
                                <Texto>Fique em casa, só saia se for necessário</Texto>
                            </Info>
                            <Info>
                                <Tosse fill={state.theme.color}></Tosse>
                                <Texto>Se tossir tape a boca</Texto>
                            </Info>
                        </Recom>
                    
                    </Recomendacao>
                    <Fonte>
                        <TextoFonte>
                            Fonte:
                        </TextoFonte>
                        <TextoFonteLink  onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}>
                            Organização Mundial de Saúde
                        </TextoFonteLink>
                    </Fonte>
                </Scroler>
        </Container>
    );
}