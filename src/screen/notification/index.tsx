import React from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native';
import HeaderScComponent from '../../components/header2';
import { Color } from '../../infrastructuer/theme/colors.style';
import { Space } from '../../infrastructuer/theme/space.style';

export default function NotificationScreen({navigation}) {
  return (
    <>
      <ScrollView>
        <HeaderScComponent navigation={navigation} title={'Notification'} />
        
      </ScrollView>
    </>
  )
}
