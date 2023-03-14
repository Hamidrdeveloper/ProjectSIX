import React from 'react';
import {Image, Text, View} from 'react-native';
import {CloseSquare} from 'react-native-iconly';
import {ButtonColor} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import i18n from '../../core/i18n/config';

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
          {i18n.t("Global.Congratulations")}
        </Text>
        <Text
          style={{
            fontSize: 18,
            padding: 15,
            textAlign: 'center',
            color: Color.brand.colorButton,
          }}>
          {i18n.t("Global.Pleaseconfirmemail")}
        </Text>
        <ButtonColor style={{width: `70%`}} onPress={() => {}}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: Color.brand.white,
            }}>
            {i18n.t("Global.RESENDEMAIL")}
          </Text>
        </ButtonColor>
        <View style={{position: 'absolute', top: 50}}>
          <CloseSquare
            primaryColor={'#000'}
            size="large"
            set="light"
            onPress={() => {
              navigation.replace('Splash_SCREEN');
            }}
          />
        </View>
      </View>
    </>
  );
}
