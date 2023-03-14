import React, {useContext} from 'react';
import {ActivityIndicator, ScrollView,View} from 'react-native';
import HeaderComponent from '../../components/header';
import HeaderScComponent from '../../components/header2';
import {BackgroundView, } from '../../css/main.style';
import { Color } from '../../infrastructuer/theme/colors.style';
import {BasketContext} from '../../service/Basket/Basket.context';
import TabOrder from './tabOrder';
import i18n from '../../core/i18n/config';

export default function OrderProcessingScreen({navigation}) {
  return (
    <BackgroundView>
      <ScrollView>
        <HeaderScComponent title={i18n.t("Global.Orders")} navigation={navigation} />

        <TabOrder navigation={navigation} />
      </ScrollView>
      
    </BackgroundView>
  );
}
