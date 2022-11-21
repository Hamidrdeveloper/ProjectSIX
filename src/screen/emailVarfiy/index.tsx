import React from 'react';
import {Image, Text, View} from 'react-native';
import {CloseSquare} from 'react-native-iconly';
import {ButtonColor} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';

export default function EmailVerify({navigation}) {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}>
        <Image
          style={{width: 250, height: 250}}
          source={require('../../assets/image/verified.png')}
        />
        <Text style={{fontSize: 30, padding: 15, textAlign: 'center'}}>
          {'Congratulations! Your account has been created.'}
        </Text>
        <Text
          style={{
            fontSize: 18,
            padding: 15,
            textAlign: 'center',
            color: Color.brand.colorButton,
          }}>
          {'Please confirm the email we sent to your email address.'}
        </Text>
        <ButtonColor style={{width: `70%`}} onPress={() => {}}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: Color.brand.white,
            }}>
            {'RESEND EMAIL'}
          </Text>
        </ButtonColor>
        <View style={{position: 'absolute', top: 50}}>
          <CloseSquare
            color={'#000'}
            size="large"
            onPress={() => {
              navigation.replace('Splash_SCREEN');
            }}
          />
        </View>
      </View>
    </>
  );
}
