import React from 'react';
import {Image, View} from 'react-native';
import {HandleEvent} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';

export default function Avatar({src, onClick, styled}) {
  console.log('Avatar', src);

  return (
    <HandleEvent onPress={() => onClick()}>
      <View
        style={[
          {
            width: 130,
            height: 130,
            borderRadius: 130,
            backgroundColor: Color.brand.gryDLight,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          },
          ,
          styled,
        ]}>
        <Image
          resizeMode="contain"
          style={{
            width: '80%',
            height: '75%',
            alignSelf: 'center',
          }}
          source={
            src == null
              ? require('../../assets/image/avatarman.png')
              : {uri: src}
          }
        />
      </View>
    </HandleEvent>
  );
}
