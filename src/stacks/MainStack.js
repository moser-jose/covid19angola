import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from '../stacks/MainTab';
import Temas from '../screens/Configurations/Temas/';
import Sobre from '../screens/Configurations/Sobre/';
import Pais from '../screens/Scan/Pais';
import Splash from '../screens/Splash';
const Stack = createStackNavigator();
export default () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Splash" component={Splash} />
     <Stack.Screen name="MainTab" component={MainTab} />
     <Stack.Screen name="Temas" component={Temas} />
     <Stack.Screen name="Sobre" component={Sobre} />
     <Stack.Screen name="Pais" component={Pais} />
  </Stack.Navigator>
);
