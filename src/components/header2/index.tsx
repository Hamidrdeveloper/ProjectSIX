import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeft} from 'react-native-iconly';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';

export default function HeaderScComponent({
  navigation,
  title,
  details,
  isProduct = false,
  IsText = true,
  onPress = () => {},
}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 55,
          padding: 15,
          alignItems: 'center',
          backgroundColor: Color.brand.white,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{height: 50, width: `18%`, justifyContent: 'center'}}>
          <ArrowLeft
            set="light"
            size={'large'}
            primaryColor={Color.brand.black}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
        <Text style={{color: Color.brand.black, fontSize: 18}}>{title}</Text>
        {isProduct ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Space lineW={'10%'} />
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/image/Intersection3.png')}
            />
            <Space lineW={15} />
            <Text style={{color: Color.brand.textGrey, fontSize: 16}}>
              {'Product name'}
            </Text>
          </View>
        ) : null}
        {IsText ? (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 15,
              right: 15,
            }}
            onPress={() => {
              onPress();
            }}>
            <Text
              style={{
                color: Color.brand.textGrey,
                fontSize: 18,
              }}>
              {details}
            </Text>
          </TouchableOpacity>
        ) : (
          <Image
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: 15,
              right: 15,
            }}
            source={require('../../assets/image/menu.png')}
          />
        )}
      </View>
    </>
  );
}
