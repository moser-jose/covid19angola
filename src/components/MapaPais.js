import React from 'react';
import styled from 'styled-components/native';
import MapView, { PROVIDER_GOOGLE, Marker,Callout } from 'react-native-maps';
import {useStateValue} from '../state/ContextProvider';
import Numeral from 'numeral';
import "numeral/locales/pt-pt";

import Text from './Text';
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
const Map = styled.View`
    width:100%;
    height:100%;
`;
const CaloutContainer = styled.View`
    width:100%;
    height:100%;
    padding:10px;
    border-radius:4px;
    background-color:${props=>props.theme.container};
`;

const Pais = styled.View`
  flex:1;
  flex-direction:row;
  width:200px;
  justify-content:space-between;
  margin-top:6px;
`;
const TextPais = styled.Text`
    
`;

const Bandeira = styled.View`
  width:30px;
  height:30px;
  border-radius:15px;
  overflow:hidden;
`;
const Image = styled.Image`

`;
const Casos = styled.Text`
    font-family:"Poppins-Medium";
    font-size:14px;
    color:${props=>props.theme.color};
`;
const Separador = styled.View`
    height:.7px;
    width:100%;
    background-color:${props=>props.theme.color};
    margin-bottom:8px;
    margin-top:8px;
`;

export default({data,all, countryInfo}) =>{
    const [state,dispach]=useStateValue();
    const [loading,setLoading]=useStateValue(false);
    const FormatarNumero = (stat) =>
    stat ? `+${Numeral(stat).format("0.0a")}` : "+0";
    return(
        <Map>
            <MapView scrollEnabled={false}
            provider={PROVIDER_GOOGLE}
            style={{width:'100%',height:'100%'}}
            customMapStyle={
              state.theme.color=="#F2F6F8" ? customMapStyleNight : customMapStyleRetro
            }
          initialRegion={{
          latitude: countryInfo.lat,
          longitude:  countryInfo.long,
          latitudeDelta: 5.0922,
          longitudeDelta: 15.0421    
            }}
            >
          <Marker
              coordinate={{
                latitude: countryInfo.lat,
                longitude: countryInfo.long,
              }}
              image={state.theme.background=="#F4F7FA" ? require('../assets/img/local.png')
            :require('../assets/img/local-white.png')}
            >
              <Callout tooltip>
                <CaloutContainer>
                <Pais >
                    <Casos style={{fontWeight:'bold', fontSize:18}}>
                      {data.country}
                    </Casos>
                  </Pais>
                  <Separador></Separador>
                  <Pais>
                    <Casos>
                    <Text text='pesquisar.totalCasos'/>
                    </Casos>
                    <Casos style={{color:"#FFF",padding:4,borderRadius:4, elevation:2, backgroundColor:'#007BFF', fontWeight:'bold'}}>
                      {FormatarNumero(data.cases)}
                    </Casos>
                  </Pais>
                  <Pais>
                    <Casos>
                    <Text text='pesquisar.ativos'/>
                    </Casos>
                    <Casos style={{color:"#FFF",padding:4,borderRadius:4, elevation:2, backgroundColor:'#ff8040', fontWeight:'bold'}}>
                      {FormatarNumero(data.active)}
                    </Casos>
                  </Pais>
                  <Pais>
                    <Casos>
                    <Text text='pesquisar.criticos'/>
                    </Casos>
                    <Casos style={{color:"#FFF",padding:4,borderRadius:4, elevation:2, backgroundColor:'#f1c40f', fontWeight:'bold'}}>
                      {FormatarNumero(data.critical)}
                    </Casos>
                  </Pais>
                  <Pais>
                    <Casos>
                    <Text text='pesquisar.recuperados'/>
                    </Casos>
                    <Casos style={{color:"#FFF",padding:4,borderRadius:4, elevation:2, backgroundColor:'#21BA4F', fontWeight:'bold'}}>
                      {FormatarNumero(data.recovered)}
                    </Casos>
                  </Pais>
                  <Pais>
                    <Casos>
                    <Text text='pesquisar.mortes'/>
                    </Casos>
                    <Casos style={{color:"#FFF",padding:4,borderRadius:4, elevation:2, backgroundColor:'#FF3131', fontWeight:'bold'}}>
                      {FormatarNumero(data.deaths)}
                    </Casos>
                  </Pais>
                </CaloutContainer>
              </Callout>
            </Marker>
            
            </MapView>
          </Map>
    );
}


