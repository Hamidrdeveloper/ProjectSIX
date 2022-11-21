import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, TouchableNativeFeedbackBase, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import Icon from 'react-native-vector-icons/AntDesign';
export default function ButtonCircle({onClick}) {
  return (
    <>
    <TouchableOpacity
    onPress={()=>onClick()}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: Color.brand.colorButton,
          borderRadius: 50,
          alignItems:'center',
          justifyContent:'center'
        }}>
        <Icon name="check" color={Color.brand.white} size={30} />
      </View>
      </TouchableOpacity>
    </>
  );
}

ButtonCircle.propTypes = {};
