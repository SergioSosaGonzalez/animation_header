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
import Jonh from '../../assets/John.png';

const Header = props => {
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'lightskyblue',
          height:
            props.changingHeight != undefined ? props.changingHeight : 120,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            height:
              props.profileImageHeight != undefined
                ? props.profileImageHeight
                : 80,
            width:
              props.profileImageHeight != undefined
                ? props.profileImageHeight
                : 80,
            borderRadius: 80 / 2,
            borderColor: 'white',
            borderWidth: 3,
            overflow: 'hidden',
          }}>
          <Image source={Jonh} style={{flex: 1, width: null, height: null}} />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Header;
