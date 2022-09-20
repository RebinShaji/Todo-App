import * as React from 'react';
import Main from '../screens/Main'
//import Splashscreen from '../screens/SplashScreen';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  return (
    <DrawerContentScrollView style= {props}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      </View>
      <View style={{ flex: 4 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

export default function MyDrawer(){
  return (  
      <Drawer.Navigator screenOptions={{
      headerShown: true,
      drawerActiveBackgroundColor: '#6ACC00',
      drawerInactiveBackgroundColor: '#f5f5f5',
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: 'black',
      swipeEdgeWidth: 1,
      }}
      initialRouteName={'Main'}
      drawerContent={(props) => <DrawerContent {...props} />}>
      {/* <Drawer.Screen name="Splashscreen" component={Splashscreen} options={{
        headerShown: true }} />   */}
      <Drawer.Screen name="Main" component={Main} options={{
        headerShown: true }} />
      </Drawer.Navigator>
  );
}