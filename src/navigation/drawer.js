import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splashscreen from '../screens/SplashScreen';
import Main from '../screens/Main';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Splashscreen"
      useLegacyImplementation
      screenOptions={{
        drawerPosition: 'left',
        headerShown: true,
      }}>
      <Drawer.Screen name="Splashscreen" component={Splashscreen} />
      <Drawer.Screen name="Main" component={Main} />
      

  
    </Drawer.Navigator>
  );
}