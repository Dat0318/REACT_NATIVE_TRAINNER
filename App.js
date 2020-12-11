/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Router from '@navigator';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then((token) => {
        console.log('token', token);
      });
  });

  return (
    <>
      <Router />
    </>
  );
};

export default App;
