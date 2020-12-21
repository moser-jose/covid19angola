import React,{useEffect, useState} from 'react';
import {LogBox, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import MainStack from './src/stacks/MainStack';
import {useStateValue} from './src/state/ContextProvider'; 
import {useStateValueLang} from './src/state/ContextLang'; 
import AsyncStorage from '@react-native-community/async-storage';
import LanguageProvider, { LanguageContext } from './src/state/LanguageContext'
export default () => {
  LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();
  const [state,dispach]=useStateValue(); 
  const [stateLang,dispachLang]=useStateValueLang(); 
  
    useEffect(()=>{
      
    async function getStorageDarkMode(){
      const Theme= await AsyncStorage.getItem("Theme");
    
      if(Theme=== '1'){
          dispach({
            type:'lighTheme'
          });
          return;
      }
      else if(Theme=== '2'){
        dispach({
          type:'darkTheme'
        });
        return;
      }
      else{
        dispach({
          type:'deviceTheme'
        });
        return;
      }
    
    }
    async function getStorageLang (){
      const Idioma= await AsyncStorage.getItem("idioma");
      if(Idioma=== '1'){
          dispachLang({
            type:'en_US'
          });
          return;
      }
      else if(Idioma==='2'){
        dispachLang({
          type:'pt_PT'
        });
        return;
      }
      else{
        dispachLang({
          type:'pt_PT'
        });
        return;
      }
    
    } 
    getStorageLang();
    getStorageDarkMode();
  },[]);
  return(
    <ThemeProvider theme={state.theme}>
      <StatusBar  
      barStyle={state.theme.statusBarStyle }
      backgroundColor={state.theme.statusBarBackground}   />
      <NavigationContainer>
      <LanguageProvider lang={stateLang.locale}>
          <MainStack  state={state.theme.container}/>
        </LanguageProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}