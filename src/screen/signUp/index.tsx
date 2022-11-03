import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Dimensions,
  Animated,
} from 'react-native';
import {ArrowLeft} from 'react-native-iconly';
import {
  BackgroundView,
  ButtonColor,
  Padding,
  ShadowButton,
} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {AuthContext} from '../../service/Auth/Auth.context';
import PartFive from './partFive';
import PartFour from './partFour';
import PartOne from './partOne';
import PartThree from './partThree';
import PartTwo from './partTwo';
import {SignUp} from '../../service/Auth/types';
import {SignUpModel} from '../../service/Auth/model';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Header} from './header';
import {
  BoldTitle,
  TitleWelcome,
  ViewButtonBottom,
  ViewRowPart,
} from './style/signUp.style';
import IndicatorStep from '../../components/stepIndicator';
const heightFull = Dimensions.get('screen').height;
export default function SignUpScreen({navigation}) {
  const [index, setIndex] = useState(1);
  function ProcessView() {
    return (
      <View style={{width: '100%'}}>
        <IndicatorStep
          labels={['Information', 'BithDay', 'Password', 'Partner']}
          stepCount={4}
          currentPosition={index - 1}
        />
      </View>
    );
  }

  function RenderPart() {
    switch (index) {
      case 1:
        return <PartOne onChangeValue={value => onSignUpButton()} />;
      case 2:
        return <PartTwo onChangeValue={value => onSignUpButton()} />;
      case 3:
        return <PartThree onChangeValue={value => onSignUpButton()} />;
      case 4:
        return   <PartFive
        navigation={navigation}
        onChangeValue={() => onSignUpButton()}
      />;
      
    }
  }
  function onSignUpButton() {
    switch (index) {
      case 1:
        if (
          SignUpModel.first_name.length > 1 &&
          SignUpModel.last_name.length > 1 &&
          SignUpModel.email.length > 5
        ) {
          setIndex(index + 1);
        }
        break;
      case 2:
        if (
          SignUpModel.country_id > 1 &&
          SignUpModel.language_id > 1 &&
          SignUpModel.gender.length > 2
        ) {
          setIndex(index + 1);
        }
        break;
      case 3:
        if (SignUpModel.password.length > 5) {
          setIndex(index + 1);
        }
        break;
      case 4:
        navigation.replace('EmailVerify');
        break;
      // case 5:
      //   navigation.replace('Bottom_SCREEN');
      //   break;
    }
  }

  return (
    <>
      <BackgroundView>
        <KeyboardAwareScrollView
          scrollEnabled={false}
          style={{width: '100%', height: '100%'}}>
          <Header
            onBack={() => {
              if (index != 1) {
                setIndex(index - 1);
              }
            }}
          />
          <Padding>
            {index >= 4 ? null : (
              <>
                <BoldTitle>{'Get Started'}</BoldTitle>
                <Space lineH={10} />
                <TitleWelcome>{'welcome to cleafin online shop'}</TitleWelcome>
                <Space lineH={30} />
              </>
            )}
            <ProcessView />
            <Space lineH={30} />
            <ViewRowPart
              height={index >= 4 ? heightFull - 50 : heightFull - 400}>
              <RenderPart />
            </ViewRowPart>
            <ViewButtonBottom>
              {index >= 4 ? null : (
                <>
                  <Space lineH={10} />
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
                      zIndex:-10,
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
                  <Space lineH={0} />
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SignInScreen');
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: Color.brand.black,
                        width: '100%',
                        textAlign: 'center',
                      }}>
                      <Text style={{fontSize: 18, color: Color.brand.black}}>
                        {'Have An Account? '}
                      </Text>
                      <Text
                        style={{fontSize: 20, color: Color.brand.colorButton}}>
                        {'Log In'}
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </ViewButtonBottom>
            <Space lineH={30} />
          </Padding>
        </KeyboardAwareScrollView>
      </BackgroundView>
    </>
  );
}
