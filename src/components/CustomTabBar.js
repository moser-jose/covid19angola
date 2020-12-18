import React from 'react';
import styled from 'styled-components/native';
import MundoIcon from '../assets/img/Two-tone-Activity.svg';
import CallIcon from '../assets/img/Two-tone-Calling.svg';
import HomeIcon from '../assets/img/Two-tone-Home.svg';
import ScanIcon from '../assets/img/Two-tone-Scan.svg';
import ConfigurationsIcon from '../assets/img/Two-tone-Setting.svg';
import {useStateValue} from '../state/ContextProvider';
import BulkScan from '../assets/img/Bulk-Scan.svg';
import BulkCall from '../assets/img/Bulk-Calling.svg';
import BulkConf from '../assets/img/Bulk-Setting.svg';
import BulkAct from '../assets/img/Bulk-Activity.svg';
import BulkHome from '../assets/img/Bulk-Home.svg';

const TabArea = styled.View`
    height:60px;
    flex-direction: row;
    elevation:2;
    align-items:center;
    justify-content:center;
    background-color: ${props=>props.theme.container};
`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
    
    
`;

const TabItemHome = styled.TouchableOpacity`
    width:50px;
    height:50px;
    justify-content:center;
    align-items:center;
    background:  ${props=>props.theme.homeBoFillIcon};
    border-radius:25px;
    margin-top:-50px;
    elevation:2;
`;

export default ({state, navigation}) => {
    const [stat,dispach]=useStateValue();
    const goTo=(screenName) => {
        navigation.navigate(screenName);
    }
    return(
        <TabArea
        
        
        >
            
            <TabItem onPress={() =>goTo('Scan')}>
                {state.index===0 ? <BulkScan fill={stat.theme.backgroundIconTabBar}  width="24" height="24"  /> : <ScanIcon stroke={stat.theme.backgroundIconTabBar}  width="24" height="24"  />  }
            </TabItem>
            <TabItem onPress={() =>goTo('Call')}>
            {state.index===1 ? <BulkCall fill={stat.theme.backgroundIconTabBar}  width="24" height="24"  /> : <CallIcon stroke={stat.theme.backgroundIconTabBar}  width="24" height="24"  />  }
            </TabItem>
            <TabItemHome  onPress={() =>goTo('Home')}>
            
            {state.index===2 ? <BulkHome fill={stat.theme.homeFilliCon}  width="24" height="24"  /> : <HomeIcon stroke={stat.theme.homeFilliCon}  width="24" height="24"  />  }
            </TabItemHome>
            <TabItem onPress={() =>goTo('Mundo')} >
            {state.index===3 ? <BulkAct fill={stat.theme.backgroundIconTabBar}  width="24" height="24"  /> : <MundoIcon stroke={stat.theme.backgroundIconTabBar} width="24" height="24"  />  }
            
            </TabItem>
            <TabItem onPress={() =>goTo('Configurations')}>
            {state.index===4 ? <BulkConf  fill={stat.theme.backgroundIconTabBar} width="24" height="24"  /> : <ConfigurationsIcon  stroke={stat.theme.backgroundIconTabBar}  width="24" height="24"  />  }
            </TabItem>
        </TabArea>
    );
}
