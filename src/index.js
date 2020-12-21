import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StateProvider } from "./state/ContextProvider";
import {StateProviderLang} from './state/ContextLang'; 
import { useColorScheme } from 'react-native';
import Local from '../src/assets/locales/locale'
import App from '../App'
import Themes from './assets/themes/themes';

export default function index(){
    const device=useColorScheme();
    const initialState = {theme:Themes.light}; 
    const initialStateLang = {locale:Local.en_US}; ; 
    
    async function updateStorage(state){
        try{
            await AsyncStorage.setItem("Theme", state.toString())
        }
        catch(err){
            console.log("Houve um erro "+err);
        }
    }
    async function updateStorageLAng(state){
        try{
            await AsyncStorage.setItem("idioma", state.toString())
        }
        catch(err){
            console.log("Houve um erro "+err);
        }
    }
    const reducer =(state, action)=>{
        switch(action.type){
            case 'lighTheme':
                updateStorage("1");
                return{
                    ...state,
                    theme:Themes.light
                };
            case 'darkTheme':
                updateStorage("2");
                return{
                    ...state,
                    theme:Themes.dark
                };
                case 'deviceTheme':
                    updateStorage("3");
                return{
                    ...state,
                    theme:Themes[device]
                };
            default:
                return state;
        }
    }
    const reducerLang =(state, action)=>{
        switch(action.type){
            case 'en_US':
                updateStorageLAng("1");
                return{
                    ...state,
                    locale:Local.en_US
                };
            case 'pt_PT':
                updateStorageLAng("2");
                return{
                    ...state,
                    locale:Local.pt_PT
                };
                case 'fr_FR':
                    updateStorageLAng("3");
                return{
                    ...state,
                    locale:Local.pt_PT
                };
            default:
                return state;
        }
    }
    
    return(
        
            <StateProvider initialState={initialState} reducer={reducer}>
                <StateProviderLang initialState={initialStateLang}  reducer={reducerLang}>
        <App/>
</StateProviderLang>
             
            </StateProvider>
        
    );
}