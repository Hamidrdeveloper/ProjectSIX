/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import DateField from 'react-native-datefield';
import Picker from '../../components/picker/components/Picker';
import {SignUpModel} from '../../service/Auth/model';
import {TitleInput, ViewRowTextPicker} from './style/signUp.style';
import {useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {AuthContext} from '../../service/Auth/Auth.context';
import BirthdayComponent from '../../components/birthday';
import RadioButton from '../../components/radioButton';
import email from '../profileInformation/component/email';
import {BackgroundForm, ButtonColor, ShadowButton} from '../../css/main.style';
import i18n from '../../core/i18n/config';

export default function PartTwo({onChangeValue}) {
  const {countries, language} = useContext(AuthContext);
  const [openCountry, setOpenCountry] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [valueLanguage, setValueLanguage] = useState(null);
  const [valueCountry, setValueCountry] = useState(null);
  const [birthDay, setBirthDay] = useState(null);
  const [isForm, setForm] = useState(false);

  SignUpModel.gender = 'male';
  useEffect(() => {
    SignUpModel.country_id = valueCountry;
    SignUpModel.language_id = valueLanguage;
    if (valueCountry && valueLanguage && birthDay.length > 4) {
      setForm(true);
    } else {
      setForm(false);
    }
  }, [valueCountry, valueLanguage, birthDay]);
  function radioClick(index) {
    if (index == 0) {
      SignUpModel.gender = 'male';
    } else {
      if (index == 1) {
        SignUpModel.gender = 'female';
      } else {
        SignUpModel.gender = 'none';
      }
    }
  }

  return (
    <>
      <BackgroundForm>
        <TitleInput>
        {i18n.t("Global.Birthday")}</TitleInput>
        <Space lineH={10} />
        <View style={{zIndex: 15}}>
          <BirthdayComponent
            top={true}
            onChange={value => {
              SignUpModel.birth_date = value;
              setBirthDay(value);
            }}
          />
        </View>
        <Space lineH={10} />
        <TitleInput>{i18n.t("Global.Country")}</TitleInput>
        <Space lineH={10} />
        <Picker
          containerStyle={{width: '100%'}}
          style={{
            borderColor: Color.brand.border,
            backgroundColor: Color.brand.f9,
          }}
          placeholderStyle={{fontSize: 18}}
          placeholder={i18n.t("Global.YCountry")}
          open={openCountry}
          zIndex={10}
          value={valueCountry}
          dropDownDirection="TOP"
          items={countries}
          setOpen={setOpenCountry}
          setValue={setValueCountry}
        />
        <Space lineH={10} />
        <TitleInput>{i18n.t("Global.Language")}</TitleInput>
        <Space lineH={10} />
        <Picker
          containerStyle={{width: '100%'}}
          style={{
            borderColor: Color.brand.border,
            backgroundColor: Color.brand.f9,
          }}
          dropDownDirection="TOP"
          placeholderStyle={{fontSize: 18}}
          placeholder={i18n.t("Global.YLanguage")}
          
          open={openLanguage}
          value={valueLanguage}
          items={language}
          setOpen={setOpenLanguage}
          setValue={setValueLanguage}
        />
        <Space lineH={30} />

        <RadioButton
          flexDirection={'row'}
          items={[
            {
              title:i18n.t("Global.Male") ,
              description: '',
              id: 0,
            },
            {
              title:i18n.t("Global.Other"),
              description: '',
              id: 2,
            },
            {
              title: i18n.t("Global.Female"),
              description: '',
              id: 1,
            },
          ]}
          onClick={data => {
            radioClick(data);
          }}
        />

        <Space lineH={10} />
      </BackgroundForm>
      <View style={{zIndex: -1}}>
        <ButtonColor
          zIndex={-10}
          onPress={() => {
            onChangeValue();
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: Color.brand.white,
            }}>

            {i18n.t("Global.Next")}
          </Text>
        </ButtonColor>
        {!isForm ? <ShadowButton zIndex={-10} /> : null}
      </View>
    </>
  );
}
