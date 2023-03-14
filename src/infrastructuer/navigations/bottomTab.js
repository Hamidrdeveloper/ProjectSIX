import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity,View} from 'react-native';
import ShopScreen from '../../screen/shop';
import Home from '../../assets/image/Iconly-Bold-Home.png';
import Buy from '../../assets/image/Iconly-Light-Buy.png';
import Document from '../../assets/image/Iconly-Light-Document.png';
import Profile from '../../assets/image/Iconly-Light-Profile.png';
import {Color} from '../theme/colors.style';
import BasketScreen from '../../screen/basket';
import ProfileScreen from '../../screen/profile';
import OrderProcessingScreen from '../../screen/orderProcessing';
import {BasketContext} from '../../service/Basket/Basket.context';
import {AuthContext} from '../../service/Auth/Auth.context';
import PopUpLogin from '../../components/popUpLogin';
import PopUpLoginNavigation from '../../components/popUpLoginNavigtion';
import i18n from '../../core/i18n/config';

const Tab = createBottomTabNavigator();

function BottomTab(props) {
  const {isLoginOpen} = useContext(AuthContext);
  const [isCheckLogin, setIsCheckLogin] = useState(isLoginOpen);
  useEffect(() => {
    console.log('isLoginOpen', isLoginOpen);
    setIsCheckLogin(isLoginOpen);
  }, [isLoginOpen]);
  const CheckLogin = () => {
    return <PopUpLoginNavigation navigation={props.navigation} />;
  };
  const {numberBasket} = useContext(BasketContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.brand.colorButton,
      }}>
      <Tab.Screen
        name={'Home_SCREEN'}
        component={ShopScreen}
        options={{
          tabBarLabel: i18n.t('Global.Home'),
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home_SCREEN');
              }}>
              <Image
                source={Home}
                style={{width: size, height: size, tintColor: color}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={'Basket_SCREEN'}
        component={BasketScreen}
        options={{
          tabBarLabel: i18n.t('Global.Basket'),
          tabBarIcon: ({color, size}) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Basket_SCREEN');
                }}>
                <Image
                  source={Buy}
                  style={{width: size, height: size, tintColor: color}}
                />
              </TouchableOpacity>
              {numberBasket > 0 ? (
                <View style={{position: 'absolute',
                left: 23,
                top: 2,
                backgroundColor: Color.brand.colorButton,
                borderRadius: 100,
                width: 23,
                height: 23,
                justifyContent: 'center',
                alignItems: 'center',

                }}>
                <Text
                  style={{
                    width: 23,
                    height: 23,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    color: Color.brand.white,
                  }}>
                  {numberBasket}
                </Text>
                </View>
              ) : null}
            </>
          ),
        }}
      />
       {isCheckLogin ? (
        <Tab.Screen
        name={'OrderProcessingScreen'}
        component={OrderProcessingScreen}
        options={{
          tabBarLabel: i18n.t('Global.Orders'),
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('OrderProcessingScreen');
              }}>
              <Image
                source={Document}
                resizeMode="contain"
                style={{width: size - 5, height: size, tintColor: color}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      ) : (
        <Tab.Screen
          name={'OrderProcessingScreen'}
          component={CheckLogin}
          options={{
            tabBarLabel:i18n.t('Global.Orders'),
            tabBarIcon: ({color, size}) => (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('SHOP4_SCREEN');
                }}>
                <Image
                  resizeMode="contain"
                  source={Document}
                  style={{width: size, height: size, tintColor: color}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      )}
     
      {isCheckLogin ? (
        <Tab.Screen
          name={'SHOP4_SCREEN'}
          component={ProfileScreen}
          options={{
            tabBarLabel:i18n.t('Global.Profile'),
            tabBarIcon: ({color, size}) => (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('SHOP4_SCREEN');
                }}>
                <Image
                  resizeMode="contain"
                  source={Profile}
                  style={{width: size, height: size, tintColor: color}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name={'SHOP4_SCREEN'}
          component={CheckLogin}
          options={{
            tabBarLabel:i18n.t('Global.Profile'),
            tabBarIcon: ({color, size}) => (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('SHOP4_SCREEN');
                }}>
                <Image
                  resizeMode="contain"
                  source={Profile}
                  style={{width: size, height: size, tintColor: color}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default BottomTab;
