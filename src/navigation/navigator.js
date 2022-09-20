import * as React from 'react';
// import Splashscreen from '../screens/SplashScreen'
// import Main from '../screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNav from './drawer';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>

    <Stack.Navigator
      initialRouteName="Drawer"
      useLegacyImplementation
      screenOptions={{
        drawerPosition: 'left',
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
    </Stack.Navigator>

    </NavigationContainer>
  );
}