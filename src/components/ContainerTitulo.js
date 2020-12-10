import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useStateValue} from '../state/ContextProvider';
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
    /* border-radius:50%; */
    justify-content:center;
    align-items:center;
    overflow:hidden;
    width:30px;
    height:30px;
    border-radius:15px;
    elevation:2;
    border:1px solid ${props=>props.theme.color};
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
                        <Image
                        source= {bandeira ==1 ? 
                            require('../assets/img/angola.png')
                        : 
                        state.theme.color=="#F2F6F8" ?
                            require("../assets/img/globe-white.png")
                        :
                            require("../assets/img/globe.png")
                        }
                        style={{ width: 40, height: 40 }}
                    ></Image>
                    </Imagem>
                    
                </ContainerTitulo>

    );
}