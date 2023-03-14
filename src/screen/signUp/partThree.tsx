/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SignUpModel} from '../../service/Auth/model';
import {TextInputSign, ViewIcon, ViewRowTextInput} from './style/signUp.style';
import {Show} from 'react-native-iconly';
import {BackgroundForm, ButtonColor, ShadowButton} from '../../css/main.style';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {LoadingButton} from '../../components/buttonLoading';
import {AuthContext} from '../../service/Auth/Auth.context';
import {MainContext} from '../../service/Main/Main.context';
import {widthFullScreen} from '../../utils/main';
import i18n from '../../core/i18n/config';

export default function PartThree({onChangeValue}) {
  const [passOne, setPassOne] = useState(SignUpModel.password);
  const [passTwo, setPassTwo] = useState(SignUpModel.password);
  const [showPassOne, setShowPassOne] = useState(true);
  const [showPassTwo, setShowPassTwo] = useState(true);
  const [isForm, setForm] = useState(false);
  const [agreeRule, setAgreeRule] = useState(false);
  function setPassword() {
    if (passOne == passTwo) {
      SignUpModel.password = passOne;
    } else {
      // alert("Not")2
    }
  }

  useEffect(() => {
    if (passOne.length > 5 && passOne == passTwo && agreeRule) {
      setPassword();
      setForm(true);
    } else {
      setForm(false);
    }
  }, [passOne, passTwo,agreeRule]);

  function onSign() {
    onChangeValue();
  }
  return (
    <>
      <BackgroundForm>
        <Text style={{color: Color.brand.black}}>{i18n.t("Global.Password")}</Text>
        <Space lineH={10} />
        <ViewRowTextInput>
          <TextInputSign
            placeholderTextColor={'#000'}
            secureTextEntry={showPassOne}
            onChangeText={e => {
              setPassOne(e);
            }}
          />
          <ViewIcon>
            <Show
              onPress={() => setShowPassOne(!showPassOne)}
              size={'medium'}
              primaryColor={Color.brand.textGrey}
            />
          </ViewIcon>
        </ViewRowTextInput>
        <Space lineH={20} />
        <Text style={{color: Color.brand.black}}>{i18n.t("Global.Confirm")}</Text>
        <Space lineH={10} />
        <ViewRowTextInput>
          <TextInputSign
            placeholderTextColor={'#000'}
            secureTextEntry={showPassTwo}
            onChangeText={e => {
              setPassTwo(e);
            }}
          />
          <ViewIcon>
            <Show
              onPress={() => setShowPassTwo(!showPassTwo)}
              size={'medium'}
              primaryColor={Color.brand.textGrey}
            />
          </ViewIcon>
        </ViewRowTextInput>
        <Space lineH={20} />

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setAgreeRule(!agreeRule);
            }}
            style={{
              borderColor: Color.brand.border,
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {agreeRule ? (
              <View
                style={{
                  backgroundColor: Color.brand.blue,
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="check" color={Color.brand.white} size={16} />
              </View>
            ) : null}
          </TouchableOpacity>
          <Space lineW={10} />
          <Text>
            <Text style={{color: Color.brand.textGrey, fontSize: 18}}>
              {i18n.t("Global.agree")}
            </Text>
            <Text style={{color: Color.brand.blue, fontSize: 18}}>
              {i18n.t("Global.conditions")}
              
            </Text>
          </Text>
        </View>
      </BackgroundForm>
      <View>
        <LoadingButton
          isActive={false}
          width={widthFullScreen - 30}
          onNext={() => onSign()}
          title={i18n.t("Global.Next")}
          onClose={() => {}}
        />

        {!isForm ? <ShadowButton /> : null}
      </View>
    </>
  );
}
