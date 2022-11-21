import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BackgroundView, HandleEvent, Padding} from '../../css/main.style';
import HeaderScComponent from '../../components/header2';
import {ArrowLeft} from 'react-native-iconly';
import PopUp from '../../components/popUp';
import {useState} from 'react';
import {ControlledInput} from '../../components/textInputController';
import {FormProvider, useForm} from 'react-hook-form';
import {TextBlue} from './styles/signIn.styles';
import {useTranslation} from 'react-i18next';

export default function ResetPassword({navigation, route}) {
  const [type, setType] = useState('profile');
  const {...methods} = useForm();
  const {t} = useTranslation();
  function RenderType() {
    return (
      <>
        {type == 'profile' ? (
          <>
            <ControlledInput
              label={'Current Password'}
              name={'confirm_password'}
              setFormError={undefined}
            />
            <Space lineH={10} />
            <HandleEvent>
              <TextBlue>{t('Auth.Forget.DidResetPassword')}</TextBlue>
            </HandleEvent>
            <Space lineH={10} />
          </>
        ) : null}
      </>
    );
  }
  function HeaderScComponent() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 55,
            padding: 15,
            backgroundColor: Color.brand.white,
          }}>
          <ArrowLeft
            set="light"
            size={'large'}
            primaryColor={Color.brand.black}
            onPress={() => navigation.goBack()}
          />

          <View
            style={{
              justifyContent: 'center',
              position: 'absolute',
              alignItems: 'center',
              width: '100%',
            }}>
            <Image
              resizeMode="stretch"
              style={{width: 100, height: 50}}
              source={require('../../assets/image/cleafin_logo.png')}
            />
          </View>
        </View>
      </>
    );
  }
  return (
    <>
      <FormProvider {...methods}>
        <BackgroundView>
          <HeaderScComponent />
          <Space lineH={30} />
          <Padding>
            <Text style={{fontSize: 26, color: Color.brand.black}}>
              {'Forget password'}
            </Text>
            <Space lineH={10} />
            <Text style={{fontSize: 15, color: Color.brand.black}}>
              {
                'We Just Need Your Registered Email Address\nTo Send Your Password Recovery Link'
              }
            </Text>
            <Space lineH={40} />
            <RenderType />

            <ControlledInput
              label={'Password'}
              name={'password'}
              placeholderTextColor={'#000'}
              rules={{required: 'Password is required!'}}
              setFormError={setType}
            />
            <Space lineH={20} />
            <ControlledInput
              name="confirm_password"
              label="Confirm Password"
              placeholderTextColor={'#000'}
              rules={{required: 'Password is required!'}}
            />
            <Space lineH={20} />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/image/checkgreen.png')}
              />
              <Space lineW={10} />
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 14,
                  color: Color.brand.green,
                }}>
                {
                  'your new password must be different from \n your previous password'
                }
              </Text>
            </View>
            <Space lineH={70} />
            <TouchableOpacity>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  backgroundColor: Color.brand.colorButton,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.brand.white,
                  }}>
                  {'Save'}
                </Text>
              </View>
            </TouchableOpacity>
            <Space lineH={80} />
          </Padding>
          <PopUp visible={false} />
        </BackgroundView>
      </FormProvider>
    </>
  );
}
