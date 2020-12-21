import React from 'react';
import styled from 'styled-components/native';
import {useStateValue} from '../state/ContextProvider';
import Logo from '../assets/img/logo.svg';

import Text from './Text';
const TituloApp = styled.Text`
    color:${props=>props.theme.color};
    font-size:18px;
    font-family:'Poppins-Bold';
    justify-content:flex-start;
    
`;

const ContainerTitulo = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-bottom:10px;
`;

const Imagem = styled.View`
    justify-content:center;
    align-items:center;
    overflow:hidden;
    width:35px;
    height:35px;
    border-radius:15px; 
`;
const Image = styled.Image`
`;


export default ({titulo,bandeira}) => {
    
    const [state, dispach]=useStateValue();
    return(
            <ContainerTitulo>
                    <TituloApp>
                        Covid-19 {titulo}
                    </TituloApp>
                    <Imagem>

                        {
                            bandeira == 1 ?
                            <Logo  width= "35" height="35"></Logo>
                            :
                            <Image
                                source= {
                                state.theme.color=="#F2F6F8" ?
                                    require("../assets/img/globe-white.png")
                                :
                                    require("../assets/img/globe.png")
                                }
                                style={{ width: 35, height: 35 }}
                            ></Image>
                        }
                        
                    </Imagem>
                    
                </ContainerTitulo>

    );
}