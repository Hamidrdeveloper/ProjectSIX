import React from 'react';

import {
    Image,
    View,
  } from 'react-native';
  import {ArrowLeft} from 'react-native-iconly';
import { Color } from '../../infrastructuer/theme/colors.style';
export function Header({onBack=()=>{}}) {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            width: `100%`,
            height: 55,
            padding: 15,
            backgroundColor: Color.brand.white,
          }}>
          <ArrowLeft
            set="light"
            size={'large'}
            primaryColor={Color.brand.black}
            onPress={() => onBack()}
          />

          <View
            style={{
              justifyContent: 'center',
              position: 'absolute',
              alignItems: 'center',
              width: `100%`,
            }}>
            <Image
              resizeMode="stretch"
              style={{width: 100, height: 50}}
              source={require('../../assets/image/cleafin_logo.png')}
            />
          </View>
        </View>
      </>
    );
  }