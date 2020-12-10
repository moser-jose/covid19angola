import React, {useState, useEffect} from 'react';
import Phone from '../assets/img/phone.svg';
import styled from 'styled-components/native';
import ApiEmergencia from '../api/ApiEmergencia.json';
import {Linking} from 'react-native';
import {useStateValue} from '../state/ContextProvider';
const NumerosEmergencia = styled.View`
    flex:1;
    elevation:2;
    padding:10px 10px 20px 10px;
    background-color:${props=>props.theme.container};
    border-radius:12px;
    margin:10px 5px;
`;

const EmergenciaTitulo = styled.View`
    flex-direction:row;
    justify-content:space-between;
    flex:1;
    width:100%;
    align-items:center;
`;

const Texto = styled.View`
    padding:10px;
    justify-content:flex-start;
    
`;

const TextoTitulo = styled.Text`
    font-size:16px;
    font-family:'Poppins-Bold';
    color:${props=>props.theme.color};
`;
const TextoDescricao = styled.Text`
    font-size:12px;
    color:${props=>props.theme.color};
    font-family:'Poppins-Italic';
`;
const EmergenciaNum = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
`;

const EmergenciaNumText = styled.Text`
    font-size:18px;
    font-family:'Poppins-Bold';
    text-align:center;
    color:${props=>props.theme.background};
    letter-spacing:1.5px;
    margin-left:10px;
`;

const PhoneNumber = styled.TouchableOpacity`
   
    padding:16px 60px;
    
    background-color:${props=>props.theme.color};
    margin-top:20px;
    border-radius:6px;
    letter-spacing:1px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;
const FlatListEmergencia = styled.FlatList`

`;



export default () => {
    
    const [state, dispach]=useStateValue();
    const[data, setData]=useState([]);

    const Emergencia=()=>{
        setData(ApiEmergencia.data);
    }

useEffect(()=>{
    Emergencia();
},[]);

    return(
        <FlatListEmergencia
            horizontal
            data={data}
            keyExtractor={(item) => item.provincia}
            showsVerticalScrollIndicator={true}
            renderItem={EmergenciaContactos}
            >
        </FlatListEmergencia>
    );

    function EmergenciaContactos(item){
        
        const{centro,provincia,contacto}=item.item;
        return(
            <NumerosEmergencia>
                <EmergenciaTitulo>
                    <Texto>
                        <TextoTitulo>
                            {centro}
                        </TextoTitulo>
                        <TextoDescricao>
                            {provincia}
                        </TextoDescricao>
                    </Texto>
                </EmergenciaTitulo>
                <EmergenciaNum>
                    <PhoneNumber onPress={()=>{Linking.openURL(`tel:${contacto}`)}}>
                        <Phone  stroke={state.theme.background}></Phone>
                        <EmergenciaNumText>{contacto}</EmergenciaNumText>
                    </PhoneNumber>
                </EmergenciaNum>
            </NumerosEmergencia>
        )
    }
}