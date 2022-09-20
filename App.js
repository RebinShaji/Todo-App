import * as React from 'react';
import Splashscreen from './src/screens/SplashScreen';
import Navigator from "./src/navigation/navigator"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen name="Splashscreen" component={Splashscreen} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Main" component={Main} options={{
        headerShown: false
      }}/>
             <Stack.Screen name="Navigator" component={Navigator} options={{
        headerShown: false
      }}/>
        </Stack.Navigator>
      </NavigationContainer>
  ) ;
}