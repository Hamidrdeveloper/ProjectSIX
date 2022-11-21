import React from 'react'
import { useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Card, Icon, Slider, Switch } from 'react-native-elements'
import { ArrowRight, CaretRight, ChevronRight, CloseSquare, IconlyProvider } from 'react-native-iconly';
import HeaderScComponent from '../../components/header2';
import { BackgroundView, Padding } from '../../css/main.style'
import { Color } from '../../infrastructuer/theme/colors.style';

export default function RightSwitch({title,}) {
    

  return (
           <View
          style={{
            flexDirection: 'row',
            width: `100%`,
            height: 50,
            padding: 15,
            backgroundColor: Color.brand.white,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Color.brand.black, fontSize: 18}}>
            {title}
          </Text>
          <Switch
          onValueChange={e=>console.log(e)}
          value={false}/>
        </View>
  )
}
