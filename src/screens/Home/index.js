import React, {useState, useEffect} from 'react';
import TesteCovid from '../../components/TesteCovid';
import UltimaAtualizacao from '../../components/UltimaAtualizacao';
import Resultados from '../../components/Resultados';
import ContainerTitulo from '../../components/ContainerTitulo';
import PercentagemCovid from '../../components/PercentagemCovid';
import {useStateValue} from '../../state/ContextProvider';
import Separador from '../../components/Separador';
import Api from '../../api/Api';
import Numeral from 'numeral';
import "numeral/locales/pt-pt";
import { 
    Container,
    Scroler,
    Loading,
    DadosCovid,
    DadosCovidAngola
} from './styles';

export default () => {
    Numeral.locale('pt-pt');
    const [state,dispach]=useStateValue();
    const [loading, setLoading]=useState(false);
    const [data, setData]=useState([]);

    const getHandlerAngola = async () => {
        setLoading(true);
        let res =await Api.getAngolaPais("angola");
            setData(res);
            setLoading(false);
        }
    useEffect(() => {
        let isActive = true;
        setLoading(true);
        const getAngola = async () => {
            setLoading(true);
            let res =await Api.getAngolaPais("angola");
            if (isActive) {
                setData(res);
                setLoading(false);
            }}
            getAngola();
        
        return () => {
            isActive = false;
        };
    }, []);

    return(
        <Container>
            
                <ContainerTitulo bandeira={1} titulo="Angola">
                </ContainerTitulo>
            <Scroler>
            
                <TesteCovid></TesteCovid>
                {loading == true
                ? 
                    <Loading size="large" color={state.theme.color}></Loading> 
                : 
                <DadosCovidAngola>
                    <DadosCovid>
                        <UltimaAtualizacao onp={getHandlerAngola} dados={data.updated}></UltimaAtualizacao>
                        <Resultados dados={data} key={data.country}></Resultados> 
                        <PercentagemCovid dados={data} key={data.updated}></PercentagemCovid>
                    </DadosCovid>
                    
                </DadosCovidAngola>
                } 
            </Scroler>
        </Container>
    );
}