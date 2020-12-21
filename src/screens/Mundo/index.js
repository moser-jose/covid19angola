import React,{useState,useEffect} from 'react';
import MundoCovid from '../../components/MundoCovid';
import Api from '../../api/Api';
import ContainerTitulo from '../../components/ContainerTitulo';
import {useStateValue} from '../../state/ContextProvider';
import Text from '../../components/Text';
const customMapStyleRetro=[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
]
const customMapStyleNight= [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { 
    Container,
    Loading,
    ContainerMap,
    Map,
    Mund,
    TituloMundo

} from './styles';


export default () => {
    const [data,setData]=useState([]);
    const [state,dispach]=useStateValue();
    const [dataAllContries,setDatadataAllContries]=useState([]);
    const [loading, setLoading]=useState(false);
    const [fillColor, setFillColor]=useState('#fa8145b4');
    const [strokeColor, setStrokeColor]=useState('#ff8040');
    const [covid, setCovid]=useState('');
    const [dataMundo,setdataMundo]=useState([]);
    const getPaises = async () => {
        setLoading(true);
        let resAll =await Api.getAngola();
        let resMundo =await Api.getAll();
        setDatadataAllContries(resAll);
        setdataMundo(resMundo);
        setLoading(false);
        
    }
    useEffect(()=>{
        setCovid('cases');
        getPaises();
        setFillColor('#007bffa1');
        setStrokeColor('#007BFF');  
    },[]);
    

    const handleClickAct =()=>{
      setCovid('active');
      setFillColor('#fa8145b4');
      setStrokeColor('#ff8040');
      
      
    }
    const handleClickRec =()=>{
      setCovid('recovered');
      setFillColor('#1b9b41a6');
      setStrokeColor('#21BA4F');
      
    }
    const handleClickDe =()=>{
      setCovid('deaths');
      setFillColor('rgba(240, 100, 100, 0.74)');
      setStrokeColor('#FF3131');
      
    }
    const handleClickCa =()=>{
      setCovid('cases');
      setFillColor('#007bffa1');
      setStrokeColor('#007BFF');
      
    }
    const handleClickCr =()=>{
      setCovid('critical');
      setFillColor('#ffbb339f');
      setStrokeColor('#FFBB33');
      
    }
    
    return(
        
        <ContainerMap>
          
          <TituloMundo>
            <ContainerTitulo titulo={<Text text='mundo.titulo'/>} bandeira={2}></ContainerTitulo>
          </TituloMundo>

          {loading==true ? 
          
          <Loading size="large" color={state.theme.color}></Loading> 
            :
            <Mund>
          <Map>
          <MapView 
        z-index={30}
        provider={PROVIDER_GOOGLE}
        style={{width:'100%',height:'100%'}}
        customMapStyle={
          state.theme.color=="#F2F6F8" ? customMapStyleNight : customMapStyleRetro
        }
        initialRegion={{
          latitude: -11.1691179,
          longitude: 13.2811322,
          latitudeDelta: 40.0922,
          longitudeDelta: 50.0421    
            }}
            >
          {
                dataAllContries.map((value, index) =>(
                    <Circle
                      key={index}
                          center={{ latitude:value.countryInfo.lat,
                                    longitude:value.countryInfo.long
                                  }}
                                  
                          radius={
                                covid =='cases' ? Math.sqrt(value.cases) * 800 : 
                                covid =='recovered'? Math.sqrt(value.recovered) * 800 : 
                                covid =='deaths' ? Math.sqrt(value.deaths) * 800 :
                                covid =='active' ? value.active < 0 ?  Math.sqrt(value.active*-1) * 800 :Math.sqrt(value.active) *800 : 
                                covid =='critical' && Math.sqrt(value.critical) * 800
                                
                          }
                          strokeWidth={2}
                          strokeColor={strokeColor}
                          fillColor={fillColor}
                    />
                    ))
            }
            
            </MapView>
          </Map>
              <Container>
              <MundoCovid active={handleClickAct} recovered={handleClickRec} deaths={handleClickDe} cases={handleClickCa}  dados={dataMundo} critical={handleClickCr}  /* onP={handleClick} */>
                
                </MundoCovid>
              </Container>
            </Mund>
        }
          
        </ContainerMap>
    );
    
}