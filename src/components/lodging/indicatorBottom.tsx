import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';

export default function IndicatorBottom({isVisible}) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {isVisible ? (
        <ActivityIndicator size={50} color={Color.brand.colorButton} />
      ) : null}
    </View>
  );
}
