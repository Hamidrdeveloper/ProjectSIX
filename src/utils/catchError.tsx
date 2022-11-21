import React from 'react';
import {Platform, ToastAndroid, AlertIOS} from 'react-native';

export function errorManagement(msg: string) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    alert(msg);
  }
}
