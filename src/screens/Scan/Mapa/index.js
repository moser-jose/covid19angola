import React,{useState,useEffect} from 'react';
import Api from '../../../api/Api';
import ContainerTitulo from '../../../components/ContainerTitulo';
import {useNavigation,useRoute} from '@react-navigation/native';
import Voltar from '../../../components/Voltar';
import Mapa from '../../../components/MapaPais';


import { 
    Container,
    ContainerMap,
    Map,
    Mund

} from './styles';


export default () => {
  const route=useRoute();
  const [mapa, setMapa]=useState({
    data: route.params.data,
    countryInfo: route.params.countryInfo
});
    useEffect(()=>{
          
    },[]);
    


    return(
        
        <ContainerMap>
          <Container>
          <Voltar></Voltar>
          </Container>
          <Mund>
            <Mapa data={mapa.data} countryInfo={mapa.countryInfo}></Mapa>
          </Mund>
        </ContainerMap>
    );
    
}