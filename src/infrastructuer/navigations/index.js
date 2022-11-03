import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WelcomeScreen} from '../../screen/welcome';
import ShopScreen from '../../screen/shop';
import BottomTab from './bottomTab';
import DetailsProduct from '../../screen/DetailsProduct';
import BasketScreen from '../../screen/basket';
import SplashScreen from '../../screen/splash';
import InformationScreen from '../../screen/informations';
import ProfileInformation from '../../screen/profileInformation';
import ProfileScreen from '../../screen/profile';
import MyAddress from '../../screen/myAddress';
import MyAddressScreen from '../../screen/myAddress';
import MySave from '../../screen/save';
import MyReviewsScreen from '../../screen/reviews';
import NotificationScreen from '../../screen/notification';
import CategoryPageScreen from '../../screen/categoryPage';
import CategoriesFilterScreen from '../../screen/filter/categories';
import PriceScreen from '../../screen/filter/price';
import FilterScreen from '../../screen/filter';
import YourReviewScreen from '../../screen/yourReview';
import SortScreen from '../../screen/filter/sort';
import OrderProcessingScreen from '../../screen/orderProcessing';
import SignUpScreen from '../../screen/signUp';
import PartnerDetailScreen from '../../screen/partner/partnerDetail';
import SignInScreen from '../../screen/signIn';
import ForgetPassword from '../../screen/signIn/forgetPassword';
import VerifyCode from '../../screen/signIn/verifyCode';
import ResetPassword from '../../screen/signIn/resetPassword';
import OrderDetails from '../../screen/orderDetails';
import TrackOrder from '../../screen/trackOrder';
import ReturnBackProduct from '../../screen/returningBack';
import ReturnBackForm from '../../screen/returningBack/returnBackForm';
import DeliveryAddressScreen from '../../screen/DeliveryAddress';
import PaymentScreen from '../../screen/payment';
import AddAddressScreen from '../../screen/addAddress';
import ChatScreen from '../../screen/chat';
import EditAddressScreen from '../../screen/editAddress';
import PopUpLogin from '../../components/popUpLogin';
import FinalScreen from '../../screen/final';
import PromotionScreen from '../../screen/promotion';
import WalletProductScreen from '../../screen/basket/walletProduct';
import EmailVerify from '../../screen/emailVarfiy';

const Slack = createNativeStackNavigator();

const NavigationStart = () => {
  return (
    <NavigationContainer>
      <Slack.Navigator screenOptions={{headerShown: false}}>
      

        <Slack.Screen name={'Splash_SCREEN'} component={SplashScreen} />
        <Slack.Screen name={'EmailVerify'} component={EmailVerify} />

        <Slack.Screen name={'Promotion_SCREEN'} component={PromotionScreen} />
        <Slack.Screen
          name={'WalletProduct_SCREEN'}
          component={WalletProductScreen}
        />

        <Slack.Screen name={'PaymentScreen_SCREEN'} component={PaymentScreen} />
        <Slack.Screen name={'Final_SCREEN'} component={FinalScreen} />

        <Slack.Screen name={'Bottom_SCREEN'} component={BottomTab} />

        <Slack.Screen name={'SignUpScreen'} component={SignUpScreen} />

        <Slack.Screen name={'MyAddress_SCREEN'} component={MyAddressScreen} />
        <Slack.Screen
          name={'EditAddress_SCREEN'}
          component={EditAddressScreen}
        />

        <Slack.Screen name={'SignInScreen'} component={SignInScreen} />

        <Slack.Screen name={'ResetPassword'} component={ResetPassword} />
        <Slack.Screen name={'Profile_SCREEN'} component={ProfileScreen} />

        <Slack.Screen name={'WELCOME_SCREEN'} component={WelcomeScreen} />

        <Slack.Screen name={'AddAddress_SCREEN'} component={AddAddressScreen} />
        <Slack.Screen name={'Chat_SCREEN'} component={ChatScreen} />

        <Slack.Screen
          name={'DeliveryAddress_SCREEN'}
          component={DeliveryAddressScreen}
        />

        <Slack.Screen name={'ReturnBackForm'} component={ReturnBackForm} />
        <Slack.Screen
          name={'ReturnBackProduct'}
          component={ReturnBackProduct}
        />

        <Slack.Screen name={'TrackOrder'} component={TrackOrder} />
        <Slack.Screen name={'OrderDetails'} component={OrderDetails} />

        <Slack.Screen name={'VerifyCode'} component={VerifyCode} />
        <Slack.Screen name={'ForgetPassword'} component={ForgetPassword} />

        <Slack.Screen
          name={'PartnerDetailScreen'}
          component={PartnerDetailScreen}
        />

        <Slack.Screen name={'SortScreen'} component={SortScreen} />
        <Slack.Screen name={'FilterScreen'} component={FilterScreen} />

        <Slack.Screen
          name={'CategoriesFilter_SCREEN'}
          component={CategoriesFilterScreen}
        />

        <Slack.Screen name={'YourReviewScreen'} component={YourReviewScreen} />
        <Slack.Screen name={'PriceScreen'} component={PriceScreen} />
        <Slack.Screen
          name={'CategoryPageScreen_SCREEN'}
          component={CategoryPageScreen}
        />

        <Slack.Screen
          name={'Information_SCREEN'}
          component={InformationScreen}
        />
        <Slack.Screen name={'MyReviews_SCREEN'} component={MyReviewsScreen} />
        <Slack.Screen name={'MySave_SCREEN'} component={MySave} />
        <Slack.Screen
          name={'Notification_SCREEN'}
          component={NotificationScreen}
        />

        <Slack.Screen
          name={'InformationScreen'}
          component={InformationScreen}
        />
        <Slack.Screen
          name={'ProfileInformation_SCREEN'}
          component={ProfileInformation}
        />

        <Slack.Screen name={'Details_SCREEN'} component={DetailsProduct} />
      </Slack.Navigator>
    </NavigationContainer>
  );
};

export {NavigationStart};
