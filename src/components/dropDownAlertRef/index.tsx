/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useRef} from 'react';
import {Image, View} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { Color } from '../../infrastructuer/theme/colors.style';
interface Type {
  visible: boolean;
  text: string;
  type: string;
}
export default function DownAlertToast({visible, text, type}: Type) {
  let dropDownAlertRef = useRef<any>(null);
  useEffect(() => {
    if (visible) {
      _fetchData();
    }
  }, [visible]);

  const _fetchData = async () => {
    dropDownAlertRef.alertWithType(type, type, text);
  };

  return (
    <>
      <DropdownAlert
        titleNumOfLines={3}
        renderImage={props => {
          return (
            <Image
            resizeMode='center'
              style={{width: 50, height: 30,tintColor:Color.brand.white}}
              source={require('../../assets/image/cleafin_logo.png')}
            />
          );
        }}
        ref={ref => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
      />
    </>
  );
}
