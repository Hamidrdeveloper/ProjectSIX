import React from 'react';
import {useState} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {Card, Icon, Slider} from 'react-native-elements';
import {
  ArrowRight,
  CaretRight,
  ChevronRight,
  CloseSquare,
  IconlyProvider,
} from 'react-native-iconly';
import HeaderScComponent from '../../components/header2';
import {BackgroundView, HandleEvent, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';

export default function RightButton({
  navigation,
  title,
  isIcon = true,
  onPress = () => {},
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        padding: 15,
        backgroundColor: Color.brand.white,
        justifyContent: 'space-between',
      }}>
      <HandleEvent onPress={() => onPress()}>
        <Text style={{color: Color.brand.black, fontSize: 18}}>{title}</Text>
      </HandleEvent>
      {isIcon ? (
        <>
          <IconlyProvider
            primaryColor={Color.brand.black}
            secondaryColor={Color.brand.black}
            stroke="bold"
            size="xlarge">
            <ChevronRight />
          </IconlyProvider>

          <Text
            style={{
              color: Color.brand.blue,
              position: 'absolute',
              right: 50,
              height: 50,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            {'3 selected'}
          </Text>
        </>
      ) : null}
    </View>
  );
}
