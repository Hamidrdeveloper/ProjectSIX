import React, {useContext, useState} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {BasketContext} from '../../service/Basket/Basket.context';
export default function PopUpLogin({
  isVisible,
  navigation,
  onClose = () => {},
  onClick = () => {},
}) {
  const [show, setShow] = useState(isVisible);
  const {closeBasket} = useContext(BasketContext);
  return (
    <>
      <Modal visible={isVisible} transparent onRequestClose={() => onClose()}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
          }}>
          <View
            style={{
              width: '102%',
              height: 250,
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: 12,
              alignItems: 'center',
              position: 'absolute',
            }}
          />
          <View
            style={{
              width: '100%',
              height: 245,
              backgroundColor: Color.brand.white,
              borderRadius: 12,
              alignItems: 'center',
              padding: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: Color.brand.black,
                width: '100%',
                textAlign: 'center',
              }}>
              {'You have to sign in first for next'}
            </Text>
            <Space lineH={70} />
            <TouchableOpacity
              onPress={() => {
                closeBasket();
                onClick();
                setShow(false);
                navigation.navigate('SignInScreen');
              }}
              style={{
                height: 50,
                width: '100%',

                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: Color.brand.white,
                borderColor: Color.brand.grey,
                borderWidth: 1,
              }}>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  backgroundColor: Color.brand.colorButton,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.brand.white,
                  }}>
                  {'Sign in now'}
                </Text>
              </View>
            </TouchableOpacity>
            <Space lineH={15} />
            <TouchableOpacity
              onPress={() => {
                onClick();
                setShow(false);
                navigation.navigate('Home_SCREEN');
              }}
              style={{
                height: 50,
                width: '100%',

                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: Color.brand.white,
                borderColor: Color.brand.grey,
                borderWidth: 1,
              }}>
              <View>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.brand.textGrey,
                  }}>
                  {'No, Cancel '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
