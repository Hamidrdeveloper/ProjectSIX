/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Message} from 'react-native-iconly';
import {BackgroundForm, ButtonColor, ShadowButton} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {SignUpModel} from '../../service/Auth/model';
import {validateEmail} from '../../utils/regular';
import {TextInputSign, ViewRowTextInput, ViewIcon} from './style/signUp.style';

export default function PartOne({onChangeValue = value => {}}) {
  const [firstName, setFirstName] = useState(SignUpModel.first_name);
  const [email, setEmail] = useState(SignUpModel.email);
  const [lastName, setLastName] = useState(SignUpModel.last_name);
  const [isForm, setForm] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  useEffect(() => {
    if (checkEmail) {
      SignUpModel.email = email;
      
    }
  }, [checkEmail]);
  useEffect(() => {
    if (firstName && lastName && email&&checkEmail) {
      setForm(true);
    } else {
      setForm(false);
    }
  }, [firstName, lastName, email]);
  return (
    <>
      <BackgroundForm>
        <Text style={{color: Color.brand.black}}>{'First Name'}</Text>
        <Space lineH={10} />
        <TextInputSign
          placeholderTextColor={'#000'}
          value={firstName}
          onChangeText={e => {
            SignUpModel.first_name = e;
            setFirstName(e);
          }}
        />
        <Space lineH={20} />
        <Text style={{color: Color.brand.black}}>{'Last Name'}</Text>
        <Space lineH={10} />
        <TextInputSign
          placeholderTextColor={'#000'}
          value={lastName}
          onChangeText={e => {
            SignUpModel.last_name = e;
            setLastName(e);
          }}
        />
        <Space lineH={20} />
        <Text style={{color: Color.brand.black}}>{'Email'}</Text>
        <Space lineH={10} />
        <ViewRowTextInput>
          <TextInputSign
            placeholderTextColor={'#000'}
            value={email}
            onChangeText={e => {
              setEmail(e);
              setCheckEmail(validateEmail(e));
            }}
          />
          <ViewIcon>
            <Message
              size={'medium'}
              primaryColor={checkEmail ? Color.brand.green : Color.brand.red}
            />
          </ViewIcon>
        </ViewRowTextInput>
        <Space lineH={10} />
      </BackgroundForm>
      <View>
        <ButtonColor
          onPress={() => {
            onChangeValue();
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: Color.brand.white,
            }}>
            {'Next'}
          </Text>
        </ButtonColor>
        {!isForm ? <ShadowButton /> : null}
      </View>
    </>
  );
}
// : 'Submit'
