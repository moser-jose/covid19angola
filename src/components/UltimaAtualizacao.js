import React,{useEffect} from 'react';
import styled from 'styled-components/native';
import IconRefresh from '../assets/img/refresh.svg';
import moment, { now } from 'moment';
import {useStateValue} from '../state/ContextProvider';

const Container = styled.View`
    width:100%;
    flex-direction:row;
    margin:20px 0;
`;
const ContainerDireita = styled.View`
`;

const ContainerEsquerda = styled.TouchableOpacity`
    flex:1;
    align-self:center;
    flex-direction:row;
    justify-content:flex-end;
`;
const Titulo = styled.Text`
    font-size:18px;
    color:${props=>props.theme.color};;
    font-family:'Poppins-Bold';
    margin-bottom:4px;
    letter-spacing:.5px;
`;

const Texto = styled.Text`
    font-size:10px;
    color:${props=>props.theme.color};
    font-family:'Poppins-LightItalic';
    margin-top:-10px;
`;


export default({onp,dados}) =>{
    const [state,dispach]=useStateValue();
    moment.updateLocale('pt',{
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
            '_'
        ),
        longDateFormat: {
            LLLL: 'DD [de] MMMM [de] YYYY [às] HH:mm',
            ll: 'MMM YYYY'
        },
    })
    return(
        <Container>
            <ContainerDireita>
                <Titulo>Novos Resultados</Titulo>
                
                <Texto>Última Atualização: {moment(dados).format('LLLL')}</Texto>
            </ContainerDireita>
            <ContainerEsquerda onPress={onp}>
                <IconRefresh fill={state.theme.color}></IconRefresh>
            </ContainerEsquerda>
        </Container>
    )
    }

                


