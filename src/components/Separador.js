import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex:1;
    justify-content:center;
    width:100%;
`;

const TextoTema = styled.Text`
    font-size:16px;
    font-family:"Poppins-Bold";
    color:${props=>props.theme.color};
    margin-top:10px;
    letter-spacing:1px;
    
`;
const TextoTemaLight = styled.Text`
    font-size:10px;
    color:${props=>props.theme.color};
    font-family:"Poppins-Regular";
    margin-top:-4px;
    margin-bottom:10px;
    letter-spacing:.5px;

`;

export default({titulo, descricao}) =>{
    return(
            <Container>
                <TextoTema>{titulo}</TextoTema>
                <TextoTemaLight>{descricao}</TextoTemaLight>
            </Container>
    );
}


