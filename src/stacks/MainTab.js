import React,{useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';

import Mundo from '../screens/Mundo';
import Scan from '../screens/Scan';
import Home from '../screens/Home';
import Call from '../screens/Call';
import Pais from '../screens/Scan/Pais'
import Configurations from '../screens/Configurations';
import CustomTabBar from '../components/CustomTabBar';

const Tab=createBottomTabNavigator();

export default () => {

  

    return(
        <Tab.Navigator
        tabBar={props=><CustomTabBar {...props} />}
        initialRouteName="Home"
    >
        <Tab.Screen name="Scan" component={Scan} />
        <Tab.Screen name="Call" component={Call} />
        <Tab.Screen name="Home"  component={Home} />
        <Tab.Screen name="Mundo" component={Mundo} />
        
        <Tab.Screen name="Configurations" component={Configurations} />
    </Tab.Navigator>
    );
};