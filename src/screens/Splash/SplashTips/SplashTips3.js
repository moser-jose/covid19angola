import React from 'react';
import ProximoBotao from '../../../components/Tips/ProximoBotao';
import {DotBold, DotLight} from '../../../components/Tips/Pontinhos';
import styled from 'styled-components/native';
import Distanciamento from '../../../assets/img/seguro.svg';
import Text from '../../../components/Text';
const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content:center;
    padding:20px;
    background-color: ${props=>props.theme.background};
`;
const SubContainer = styled.View`
    padding:0 20px;
    flex: 1;
    width:100%;
    justify-content:center;
    align-items: center;
    background-color: ${props=>props.theme.background};
`;

const Imagem = styled.View`
    width: 50%;
    align-items: center;
`;
const TextoCorpo = styled.Text`
    width: 90%;
    font-size: 16px;
    font-family: 'Poppins-Regular';
    text-align: center;
    color:${props=>props.theme.color};
    line-height:20px;
    letter-spacing:.7px;
`;
const TextoTitulo = styled.Text`
    font-size: 32px;
    font-family: 'Poppins-Bold';
    color:${props=>props.theme.color};
`;

const PularB = styled.TouchableOpacity`
    align-items:flex-end;
    width:100%;
    padding:0 20px;
    text-align:right;
`;
const Skip = styled.Text`
    font-size: 14px;
    font-family: 'Poppins-Bold';
    background-color:#FF4B63;
    width:20%;
    text-align:center;
    border-radius:8px;
    padding-top:3px;
    elevation:2;
    margin:1px;
    color:#FFF;
    letter-spacing:1px;
`;
const FooterContainer = styled.View`
    flex-direction:row;
`;



export default SplashTips3 = props => {
     return (
        <Container>
            <PularB onPress={() =>props.navigation.reset({routes:[{name:'MainTab'}]})}>
            <Skip><Text text='splash.pular'/></Skip></PularB>
         <SubContainer>
            <Imagem>
                <Distanciamento width="300" height="230"></Distanciamento>
            </Imagem>
            <TextoTitulo style={{marginVertical:10}}><Text text='splash.splash3.titulo'/></TextoTitulo>
            <TextoCorpo ><Text text='splash.splash3.texto'/></TextoCorpo>
            <ProximoBotao onClick={() => props.navigation.reset({routes:[{name:'MainTab'}]})}><Text text='splash.splash3.botao'/></ProximoBotao>
            <FooterContainer>
                <DotLight onp={() => props.navigation.navigate("SplashTips1")} />
                <DotLight onp={() => props.navigation.navigate("SplashTips2")} />
                <DotBold/>
            </FooterContainer>
         </SubContainer>
        </Container>
    );
};