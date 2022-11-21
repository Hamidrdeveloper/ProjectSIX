import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Text, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Space} from '../../infrastructuer/theme/space.style';
import {CloseSquare} from 'react-native-iconly';
function PopUp({
  title = 'Password Changed!',
  type="check",
  visible=false,
  details = 'Your Password Has Been Changed Successfully. ',
}: propTypes) {
  return (
    <>
      <Modal visible={visible} transparent={true}>
        <View
          style={{
            width: `100%`,
            height: `100%`,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `rgba(0,0,0,0.2)`,
          }}>
          <View
            style={{
              height: 420,
              width: `100%`,
              backgroundColor: Color.brand.white,
              borderRadius: 10,
              padding: 15,
              alignItems: 'center',
            }}>
            <CloseSquare
              style={{alignSelf: 'flex-end'}}
              size={'medium'}
              primaryColor={Color.brand.black}
            />
            <View
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: Color.brand.green,
              }}>
              <AntDesign name="check" color={Color.brand.green} size={100} />
            </View>
            <Space lineH={30} />
            <Text style={{fontSize: 24, color: Color.brand.black}}>
              {title}
            </Text>
            <Space lineH={20} />
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                color: Color.brand.textGrey,
              }}>
              {details}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
}

interface propTypes {
  title: String;
  type: String;
  details: String;
  visible: boolean;
}

export default PopUp;
