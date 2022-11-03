import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';

export default function Indicator({isVisible}) {
  return (
    <View
      style={{
        position: 'absolute',
        top: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {isVisible ? (
        <ActivityIndicator size="large" color={Color.brand.colorButton} />
      ) : null}
    </View>
  );
}
