import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { HandleEvent } from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {BasketContext} from '../../service/Basket/Basket.context';

export default function HeaderComponent({navigation}) {
  const {numberBasket} = useContext(BasketContext);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: `100%`,
          height: 50,
          padding: 15,
          backgroundColor: Color.brand.white,
        }}>
          <HandleEvent onPress={()=>{navigation.goBack()}}>
        <Image
          style={{width: 30, height: 30}}
          resizeMode="contain"
          source={require('../../assets/image/arrow.png')}
        />
         </HandleEvent>
        <Space lineW={`70%`} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Basket_SCREEN');
          }}>
          <Image
            style={{width: 28, height: 28}}
            resizeMode="contain"
            source={require('../../assets/image/Iconly-Light-Buy.png')}
          />
          {numberBasket > 0 ? (
            <View style={{position: 'absolute',
            left: 23,
            top: 2,
            backgroundColor: Color.brand.colorButton,
            borderRadius: 100,
            width: 23,
            height: 23,
            justifyContent: 'center',
            alignItems: 'center',

            }}>
            <Text
              style={{
                width: 23,
                height: 23,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: Color.brand.white,
              }}>
              {numberBasket}
            </Text>
            </View>
          ) : null}
        </TouchableOpacity>
        <Space lineW={25} />

        <Image
          style={{width: 30, height: 30}}
          resizeMode="contain"
          source={require('../../assets/image/menu.png')}
        />
      </View>
    </>
  );
}
