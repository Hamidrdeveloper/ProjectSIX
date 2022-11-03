import React, { useState } from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BackgroundView, Padding} from '../../css/main.style';
import HeaderScComponent from '../../components/header2';
import {ArrowLeft} from 'react-native-iconly';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from '../../components/codeField';
const CELL_COUNT = 4;
export default function VerifyCode({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  function HeaderScComponent() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            width: `100%`,
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
              width: `100%`,
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
        <HeaderScComponent />
        <Space lineH={30} />
        <Padding>
          <Text style={{fontSize: 26, color: Color.brand.black}}>
            {'Enter the code'}
          </Text>
          <Space lineH={10} />
          <Text style={{fontSize: 15, color: Color.brand.black}}>
            {
              'Enter the code , we send to your '
            }
          </Text>
          <Space lineH={60} />
          <CodeField
            ref={ref}
            value={value}
          
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={{marginTop: 20}}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[{
                  width: 55,
                  height: 55,
                  lineHeight: 38,
                  borderRadius:12,
                  fontSize: 24,
                  borderWidth: 2,
                  borderColor: '#00000030',
                  textAlign: 'center',
                }, isFocused &&{
                  borderColor: '#000',
                }]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
         <Space lineH={50} />
          <View
            style={{
              flexDirection: 'row',
              width: `100%`,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 14,
                color: Color.brand.textGry,
              }}>
              {`I didnt receive the code`}
            </Text>
            <Space lineW={10} />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 14,
                color: Color.brand.blue,
              }}>
              {'Resend code'}
            </Text>
          </View>
          <Space lineH={180} />
          <View
            style={{
              width: `100%`,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity  onPress={()=>{navigation.replace("Bottom_SCREEN")}}>
              <View
                style={{
                  height: 50,
                  width: `100%`,
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
                  {'Submit'}
                </Text>
              </View>
            </TouchableOpacity>
            <Space lineH={15} />
            <View
              style={{
                flexDirection: 'row',
                width: `100%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: Color.brand.textGry,
                  width: `45%`,
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
                  width: `45%`,
                }}
              />
            </View>
            <Space lineH={15} />
            <View
              style={{
                height: 50,
                width: `100%`,
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
            </View>
          </View>
          <Space lineH={20} />
          <View
            style={{
              flexDirection: 'row',
              width: `100%`,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 14,
                color: Color.brand.textGry,
              }}>
              {'Dont Have An Account?'}
            </Text>
            <Space lineW={10} />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 14,
                color: Color.brand.colorButton,
              }}>
              {'Register now'}
            </Text>
          </View>
        </Padding>
      </BackgroundView>
    </>
  );
}
