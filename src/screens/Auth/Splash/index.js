/*
 *
 * @author DatTD
 * Created on Wed Jul 15 2020
 * Copyright (c) 2020 ApecSoft
 *
 */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Images} from '@config/index';
import SplashScreen from 'react-native-splash-screen';
import styles from './styles';

export default function Splash(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.logo}
      />
    </View>
  );
}
