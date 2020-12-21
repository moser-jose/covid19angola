import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import MainTab from '../stacks/MainTab';
import Temas from '../screens/Configurations/Temas/';
import Sobre from '../screens/Configurations/Sobre/';
import Pais from '../screens/Scan/Pais';
import Mapa from '../screens/Scan/Mapa';
import Splash from '../screens/Splash';
import Idioma from '../screens/Configurations/Idioma';
import SplashTips1 from '../screens/Splash/SplashTips/SplashTips1';
import SplashTips2 from '../screens/Splash/SplashTips/SplashTips2';
import SplashTips3 from '../screens/Splash/SplashTips/SplashTips3';
const Stack = createStackNavigator();
export default () => (

  <Stack.Navigator
  initialRouteName="Splash"
  screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false,
  }}
  headerMode="float"
  animation="fade"
>
  <Stack.Screen name="Splash" component={Splash} />
  <Stack.Screen name="SplashTips1" component={SplashTips1} />
  <Stack.Screen name="SplashTips2" component={SplashTips2} />
  <Stack.Screen name="SplashTips3" component={SplashTips3} />
  <Stack.Screen name="MainTab" component={MainTab} />
  <Stack.Screen name="Temas" component={Temas} />
  <Stack.Screen name="Sobre" component={Sobre} />
  <Stack.Screen name="Pais" component={Pais} />
  <Stack.Screen name="Mapa" component={Mapa} />
  <Stack.Screen name="Idioma" component={Idioma} />
  </Stack.Navigator>
);
