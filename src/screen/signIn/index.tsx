import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BackgroundView, Padding} from '../../css/main.style';
import HeaderScComponent from '../../components/header2';
import {ArrowLeft, Show} from 'react-native-iconly';
import {
  TextInputSign,
  ViewIcon,
  ViewRowTextInput,
} from '../signUp/style/signUp.style';
import {SignInModel} from '../../service/Auth/model';
import {AuthContext} from '../../service/Auth/Auth.context';
import {LoadingButton} from '../../components/buttonLoading';
import DropdownAlert from 'react-native-dropdownalert';

export default function SignInScreen({navigation}) {
  const [emailUser, setEmailUser] = useState();
  const [password, setPassword] = useState();
  const {singInFn, isLoginOpen, isLoginApi, isShowError, messageError} =
    useContext(AuthContext);
  const [showPassOne, setShowPassOne] = useState(true);
  let dropDownAlertRef = React.useRef();
  useEffect(() => {
    if (isLoginOpen) {
      navigation.replace('Bottom_SCREEN');
    }

    return;
  }, [isLoginOpen]);
  useEffect(() => {
    if (isShowError) {
      dropDownAlertRef.alertWithType('error', messageError);
    }

    return;
  }, [isShowError]);

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
      <BackgroundView>
        <ScrollView>
          <HeaderScComponent />
          <Padding>
            <Text style={{fontSize: 26, color: Color.brand.black}}>
              {'Welcome back'}
            </Text>
            <Space lineH={10} />
            <Text style={{fontSize: 15, color: Color.brand.black}}>
              {' '}
              {'login with your data that you '}
            </Text>
            <Space lineH={10} />
            <TouchableOpacity
              onPress={() => {
                navigation.replace('Bottom_SCREEN');
              }}>
              <Text style={{fontSize: 19, color: Color.brand.blue}}>
                {'Skip and Go to shop'}
              </Text>
            </TouchableOpacity>
            <Space lineH={60} />
            <Text style={{color: Color.brand.black}}>{'Email'}</Text>
            <Space lineH={10} />
            <TextInputSign
              value={emailUser}
              onChangeText={e => {
                SignInModel.username = e;
                setEmailUser(e);
              }}
            />
            <Space lineH={20} />
            <Text style={{color: Color.brand.black}}>{'Password'}</Text>
            <Space lineH={10} />
            <ViewRowTextInput>
              <TextInputSign
                secureTextEntry={showPassOne}
                onChangeText={e => {
                  SignInModel.password = e;
                  setPassword(e);
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
            <Space lineH={30} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    borderColor: Color.brand.border,
                    borderWidth: 1,
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: Color.brand.blue,
                      width: 20,
                      height: 20,
                      borderRadius: 6,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <AntDesign
                      name="check"
                      color={Color.brand.white}
                      size={20}
                    />
                  </View>
                </View>
                <Space lineW={10} />
                <Text style={{color: Color.brand.textGrey}}>
                  {'Remember me'}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={{color: Color.brand.blue}}>
                  {'Forget your password'}
                </Text>
              </TouchableOpacity>
            </View>
            <Space lineH={50} />
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 50,
                  width: '100%',
                }}>
                <LoadingButton
                  isActive={isLoginApi}
                  title={'Submit'}
                  onNext={() => singInFn()}
                  onClose={() => {}}
                />
              </View>

              <Space lineH={15} />
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: Color.brand.textGry,
                    width: '45%',
                  }}
                />
                <Space lineW={5} />
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.brand.textGry,
                  }}>
                  {'OR'}
                </Text>
                <Space lineW={5} />
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: Color.brand.textGry,
                    width: '45%',
                  }}
                />
              </View>
              <Space lineH={15} />
              {/* <View
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  backgroundColor: Color.brand.white,
                  borderColor: Color.brand.border,
                  borderWidth: 1,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{width: 30, height: 30, alignSelf: 'center'}}
                  source={require('../../assets/image/suche.png')}
                />
                <Space lineW={10} />
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.brand.textGrey,
                  }}>
                  {'Sign up with google'}
                </Text>
              </View> */}
            </View>
            <Space lineH={20} />
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.brand.textGry,
                  }}>
                  {'Dont Have An Account?'}
                </Text>
                <Space lineW={10} />
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    color: Color.brand.colorButton,
                  }}>
                  {'Register now'}
                </Text>
              </View>
            </TouchableOpacity>
          </Padding>
        </ScrollView>
      </BackgroundView>
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
