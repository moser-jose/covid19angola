import React from 'react';
import styled from 'styled-components/native';
import UserCovid from '../assets/img/user_covid.svg';

const Container = styled.View`
    background-color:#FF4B63;
    width:100%;
    height:100px;
    border-radius:15px;
    elevation:2;
    flex-direction:row;
    margin-top:10px;
`;
const ContainerDireita = styled.View`
`;

const ContainerEsquerda = styled.View`
    flex:1;
    align-self:center;
    padding:10px 0;
`;

const Titulo = styled.Text`
    font-size:17px;
    color:#FFF;
    font-family:'Poppins-Bold';
    margin-bottom:6px;
`;

const Texto = styled.Text`
    font-size:12px;
    color:#FFF;
    max-width:210px;
    font-family:'Poppins-Regular';
`;


export default() =>{
        return(
            <Container>
                <ContainerDireita>
                    <UserCovid></UserCovid>
                </ContainerDireita>
                <ContainerEsquerda>
                    <Titulo>Fique em casa</Titulo>
                    <Texto>A Covid-19 é uma doença altamente transmissível, fique em casa e esteja seguro.</Texto>
                </ContainerEsquerda>

            </Container>
        )
    }

                


