import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View, Text} from 'react-native';
import {horizontalScale, verticalScale} from '../utils/scale';

const Splashscreen = ({}) => {
  const nav = useNavigation();
  React.useEffect(() => {
    const timeout = setTimeout(async () => {
      nav.navigate('Main');
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor:'white',
      }}>
      
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0)',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 40,
            }}>
            <Text
              style={{
                fontSize: verticalScale(32),
                fontfamily: 'Roboto',
                fontWeight: 'bold',
                color: 'black',
              }}>
               Todo App
            </Text>
          </View>
          <View style={{justifyContent: 'center', marginBottom: 30}}>
            <Image
              source={require('../assets/icons/todo.jpg')}
              style={{
                width: horizontalScale(141),
                height: horizontalScale(141),
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Splashscreen;
