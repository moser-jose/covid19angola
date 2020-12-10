import React, {useState, useEffect} from 'react';
import Phone from '../assets/img/phone.svg';
import styled from 'styled-components/native';
import ApiEmergencia from '../api/ApiEmergencia.json';
import IconAtivosAzul from '../assets/img/ativos_laranja.svg';
import IconMortes from '../assets/img/mortes.svg';
import IconVerdeClaro from '../assets/img/recuperados_verde_claro.svg';
import HeaderFlatListMundo from '../components/HeaderFlatListMundo'
import Numeral from 'numeral';
import "numeral/locales/pt-pt";

const Cont = styled.View`
    flex:1;
    padding:5px;
    border-radius:12px;
    
`;

const NumerosEmergencia = styled.View`
    flex:1;
    elevation:2;
    padding:10px 10px 18px 10px;
    background-color:#fff;
    border-radius:10px;
    width:100%;
    margin:1px;
    
`;

const EmergenciaTitulo = styled.View`
    flex:1;
    align-items:center;
`;

const Foto = styled.View`
    justify-content:center;
    align-items:center;
    overflow:hidden;
    width:40px;
    height:40px;
    border-radius:20px;
    elevation:2;
    border:2px solid #0E3360;
`;

const Texto = styled.View`
    padding:4px 0 2px 0;
    
`;

const TextoTitulo = styled.Text`
    font-size:12px;
    font-family:'Poppins-Bold';
`;
const TextoNumeroNew = styled.Text`
    font-size:9px;
    font-family:'Poppins-Bold';
    margin:0 10px;
`;


const TextoDescricao = styled.View`
    height:1.2px;
    width:80%;
    background-color:#0E3360;
    margin-bottom:10px;
`;
const EmergenciaNum = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
`;
const FlatListEmergencia = styled.FlatList`
    flex:1;
`;


const Casos = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-top:20px;
`;

const TextoCaso = styled.Text`
   font-size:10px;
   font-family:'Poppins-Regular';
`;
const TextoNumero = styled.Text`
    font-size:10px;
    font-family:'Poppins-Bold';
`;
const Image = styled.Image`
`;

export default ({dataPaises,onp}) => {
    Numeral.locale('pt-pt');
    return(
        
        <FlatListEmergencia
            data={dataPaises}
           /*  numColumns={2} */
            horizontal={true}
            /* ListHeaderComponent={HeaderFlatListMundo} */
            keyExtractor={(item) => item.country}
            showsVerticalScrollIndicator={true}
            renderItem={EmergenciaContactos}>
        </FlatListEmergencia>
    );

    function EmergenciaContactos(item){
        
        const{country,cases,todayCases,deaths,todayDeaths,recovered,todayRecovered,active,critical,countryInfo}=item.item;
        
        return(
            <Cont>
                <NumerosEmergencia>
                <EmergenciaTitulo>
                    <Foto>
                    <Image
                            source={{uri:`${countryInfo.flag}`}}
                            style={{ width: 40, height: 40 }}
                        >

                        </Image>
                    </Foto>
                    <Texto>
                        <TextoTitulo>
                            {country}
                        </TextoTitulo>
                       
                    </Texto>
                    <TextoDescricao>
                    </TextoDescricao>
                </EmergenciaTitulo>
                <EmergenciaNum>
                    <Casos>
                        <IconAtivosAzul width="16" height="16"></IconAtivosAzul>
                        <TextoNumeroNew style={{color:'#ff8040'}}>[+{Numeral(todayCases).format()}]</TextoNumeroNew>
                        <TextoNumero style={{color:'#ff8040'}}>{Numeral(cases).format()}</TextoNumero>
                    </Casos>
                    <Casos>
                        <IconVerdeClaro width="16" height="16"></IconVerdeClaro>
                        <TextoNumeroNew style={{color:'#21BA4F'}}>[+{Numeral(todayRecovered).format()}]</TextoNumeroNew>
                        <TextoNumero style={{color:'#21BA4F'}}>{Numeral(recovered).format()}</TextoNumero>
                    </Casos>
                    <Casos>
                        <IconMortes width="16" height="16"></IconMortes>
                        <TextoNumeroNew style={{color:'#FF3131'}}>[+{Numeral(todayDeaths).format()}]</TextoNumeroNew>
                        <TextoNumero style={{color:'#FF3131'}}>{Numeral(deaths).format()}</TextoNumero>
                    </Casos>

                </EmergenciaNum>
            </NumerosEmergencia>
            </Cont>
        )
    }
}