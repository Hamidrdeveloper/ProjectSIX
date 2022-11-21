import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {TextInputSign} from './style/signUp.style';
import {BackgroundForm, ButtonColor} from '../../css/main.style';
import ShowClick from '../../components/map';
import {MapData} from '../../service/map/types';

export default function PartFour({onChangeValue}) {
  const [address, setAddress] = useState<MapData>();
  return (
    <>
      <BackgroundForm>
        <View style={{height: 500}}>
          <ShowClick onChange={value => setAddress(value)} />
          <Space lineH={10} />
          <Text>
            <Text style={{fontSize: 14, color: Color.brand.textGrey}}>
              {'Your Location :'}
            </Text>
            <Text style={{fontSize: 16, color: Color.brand.black}}>
              {address?.features[0]?.place_name}
            </Text>
          </Text>
          <Space lineH={30} />
          <Text style={{color: Color.brand.black}}>{'Your Postcode'}</Text>
          <Space lineH={10} />
          <TextInputSign
            placeholder={'Postal code'}
            placeholderTextColor={'#000'}
          />
        </View>
      </BackgroundForm>
      <ButtonColor
        style={{top: 200}}
        onPress={() => {
          onChangeValue();
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            color: Color.brand.white,
          }}>
          {'Submit'}
        </Text>
      </ButtonColor>
    </>
  );
}
