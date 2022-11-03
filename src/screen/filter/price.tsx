import React from 'react'
import { useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Card, Icon, Slider } from 'react-native-elements'
import HeaderScComponent from '../../components/header2';
import { BackgroundView, Padding } from '../../css/main.style'
import { Color } from '../../infrastructuer/theme/colors.style';

export default function PriceScreen({navigation}) {
    const [value, setValue] = useState(0);

  return (
    <BackgroundView>
                <HeaderScComponent navigation={navigation} title={'Price'} details={'Delete '}/>

           <Padding>
        <View style={{width:`100%`,height: 20,top:15,alignSelf:'center'}}>
         
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={10}
          minimumValue={0}
          step={1}
          allowTouchTrack
          maximumTrackTintColor={'#BBE2FE'}
          minimumTrackTintColor={Color.brand.blue}
          trackStyle={{ height: 5, backgroundColor: '#000' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor:Color.brand.red}}
          thumbProps={{
            children: (
              <View
                style={{width:20,height: 20,borderWidth:4,backgroundColor:Color.brand.white,borderColor:Color.brand.blue,borderRadius:30}}
                
              />
            ),
          }}
        />
        <View style={{flexDirection:'row',justifyContent:'space-between',width:`100%`}}>
        <Text>0</Text>
        <Text>750,200</Text>
        <Text>1,250,200</Text>
        </View>
        </View>
      
        </Padding>
        <Card
         containerStyle={{
            height: 70,
            width: `100%`,
            position: 'absolute',
            bottom: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: Color.brand.white,
          }}>
        <View
            style={{
              height: 50,
              width: `100%`,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              borderColor: Color.brand.border,
              borderWidth:1,
              backgroundColor: Color.brand.white,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                color: Color.brand.black,
              }}>
              {'View Products'}
            </Text>
          </View>
          </Card>
    </BackgroundView>
  )
}
