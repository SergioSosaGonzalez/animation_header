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
HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
HEADER_MAX_IMAGE_HEIGHT = 80;
HEADER_MIN_IMAGE_HEIGHT = 40;

const App: () => React$Node = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_IMAGE_HEIGHT - HEADER_MIN_IMAGE_HEIGHT],
    outputRange: [HEADER_MAX_IMAGE_HEIGHT, HEADER_MIN_IMAGE_HEIGHT],
    extrapolate: 'clamp',
  });

  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - HEADER_MAX_HEIGHT / 2,
      HEADER_MIN_IMAGE_HEIGHT,
    ],
    extrapolate: 'clamp',
  });
  const headerIndex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'lightskyblue',
          height: headerHeight,
          zIndex: headerIndex,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: HEADER_MAX_IMAGE_HEIGHT / 2,
            borderColor: 'white',
            borderWidth: 3,
            overflow: 'hidden',
          }}>
          <Image source={Jonh} style={{flex: 1, width: null, height: null}} />
        </Animated.View>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        style={{flex: 1}}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        <View style={{height: 800}}></View>
      </ScrollView>
    </View>
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
