import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';
import {setAnimationToScreen} from '../../services/animation.service';
const Principal = ({navigation}) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  useLayoutEffect(() => {
    let {changingHeight, profileImageHeight} = setAnimationToScreen(scrollY);
    navigation.setParams({
      changingHeight,
      profileImageHeight,
    });
  }, []);
  return (
    <ScrollView
      scrollEventThrottle={16}
      style={{flex: 1}}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}])}>
      <View style={{marginTop: 120, height: 1000}}>
        <Text>Hola primera pantalla</Text>
      </View>
    </ScrollView>
  );
};
export default Principal;
