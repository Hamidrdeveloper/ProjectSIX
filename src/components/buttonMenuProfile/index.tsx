import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IconlyProvider} from 'react-native-iconly';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';

export default function ButtonMenuProfile({icon, text,onClick}) {
  return (
    <>
    <TouchableOpacity
     onPress={()=>onClick()}
    >
      <View
        style={{
          width: `100%`,
          height: 55,
          backgroundColor: Color.brand.gryLight,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 12,
        }}>
        <IconlyProvider
          primaryColor={Color.brand.black}
          secondaryColor={Color.brand.black}
          stroke="bold"
          size="xlarge">
          {icon}
        </IconlyProvider>
        <Space lineW={20} />
        <Text style={{color: Color.brand.textGry}}>{text}</Text>
      </View>
      </TouchableOpacity>
    </>
  );
}
