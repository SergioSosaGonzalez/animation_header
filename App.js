/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Jonh from './assets/John.png';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './src/components/header';

import Principal from './src/screens/principal';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen
          name="Primera Pantalla"
          component={Principal}
          options={{
            header: ({scene}) => {
              return <Header {...scene.route.params} />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
