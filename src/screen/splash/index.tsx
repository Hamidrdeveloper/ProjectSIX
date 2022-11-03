import React, {useContext, useEffect, useState} from 'react';
import {Image, View} from 'react-native';

import IndicatorBottom from '../../components/lodging/indicatorBottom';
import { AuthContext } from '../../service/Auth/Auth.context';
import {MainContext} from '../../service/Main/Main.context';
import {ProfileContext} from '../../service/Profile/Profile.context';
import { TOKEN } from '../../utils/main';

export default function SplashScreen({navigation}) {
  const {onRunAllApi, token} = useContext(MainContext);
  const [login, setLogin] = useState(true);
  const {isLoginOpen} =
    useContext(AuthContext)
  useEffect(() => {
    onRunAllApi(navigation);
  //   setTimeout(() => {
  //     alert(token)
  //   if (TOKEN.token.lenght>0) {
  //       navigation.replace('Bottom_SCREEN');
       
    
  //   } else {
  //       navigation.replace('WELCOME_SCREEN');
      
  //   }
  // }, 8000);
  }, []);
  useEffect(() => {
    const handler = setTimeout(() => {
     
      if (token!='') {
              navigation.replace('Bottom_SCREEN');
             
          
          } else {
              navigation.replace('WELCOME_SCREEN');
            
          }
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [token]);

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: `100%`,
          height: `100%`,
        }}>
        <Image
          resizeMode="contain"
          source={require('../../assets/image/cleafin_logo.png')}
          style={{width: 200, height: 200}}
        />

        <Image
          resizeMode="stretch"
          source={require('../../assets/image/Artboard.png')}
          style={{
            width: 200,
            height: 300,
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        />
        <Image
          resizeMode="stretch"
          source={require('../../assets/image/ArtboardLeft.png')}
          style={{
            width: 200,
            height: 300,
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        />
        <IndicatorBottom isVisible={login} />
      </View>
    </>
  );
}
