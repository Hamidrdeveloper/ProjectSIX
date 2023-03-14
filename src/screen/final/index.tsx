import React, {useContext, useEffect, useState} from 'react';
import {BackgroundView, ButtonColor, Padding} from '../../css/main.style';
import {TitleStep} from '../shop/style/shop.style';
import {CloseSquare, IconlyProvider} from 'react-native-iconly';
import HeaderScComponent from '../../components/header2';
import RadioButton from '../../components/radioButton';
import {
  View,
  Text,
  Linking,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import {
  TextBlack,
  TextGray,
  TextRed,
  ViewRow,
} from '../orderDetails/style/orderDetails.style';
import {BasketContext} from '../../service/Basket/Basket.context';
import {Space} from '../../infrastructuer/theme/space.style';
import BottomViewBasket from '../../components/bottomViewBasket';
import NumberFormat from 'react-number-format';
import LineW from '../../components/lineW';
import {Color} from '../../infrastructuer/theme/colors.style';
import {TextInput} from 'react-native-gesture-handler';
import CheckBox from '../../components/checkBox';
import DropdownAlert from 'react-native-dropdownalert';
import { ProfileContext } from '../../service/Profile/Profile.context';
import i18n from '../../core/i18n/config';
export default function FinalScreen({navigation, route}) {
  const {
    totalPrice,
    shipping,
    resultSymbol,
    paymentMethodsFn,
    closeBasket,
    bulkAdd,
    codePrice,
    coupon,
    loadingPay,
    pointProducts,
    resultPriceNotVat,
    resultPrice,
    dataConfig,
    totalCoin,
    ISO3
  } = useContext(BasketContext);
  let dropDownAlertRef = React.useRef();
  const {rolesUser} = useContext(ProfileContext);
  const [withdrawal, setWithdrawal] = useState(false);
  const [description, setDescription] = useState('');
  const [declaration, setDeclaration] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [error, setError] = useState(false);
  const [showFinish, setShowFinish] = useState(false);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (showError) {
      dropDownAlertRef.alertWithType(
        'error',
        i18n.t('Global.Unfortunately'),
      );
      setError(false);
    }
  }, [showError]);
  useEffect(() => {
    if (error) {
      dropDownAlertRef.alertWithType('error', i18n.t('Global.Allfields'));
      setError(false);
    }
  }, [error]);
  function ModalTanks() {
    return (
      <Modal transparent visible={showFinish}>
        <View
          style={{
            padding: 30,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: `100%`,
            height: `100%`,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: `100%`,
              height: 250,
              backgroundColor: Color.brand.white,
              borderRadius: 8,
              padding: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{width: 120, height: 80}}
              source={require('../../assets/image/cleafin_logo.png')}
            />
            <Text
              style={{fontStyle: 'normal', fontWeight: 'bold', fontSize: 22}}>
              {i18n.t("Global.Thankyou")}
            </Text>
            <Space lineH={15} />
            <Text style={{fontStyle: 'normal', fontSize: 17}}>
              {i18n.t("Global.Yourpurchase")}
            </Text>
            <Space lineH={15} />
            <ButtonColor
              onPress={() => {
                setShowFinish(false);
                closeBasket();
                navigation.navigate('OrderProcessingScreen');
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  color: Color.brand.white,
                }}>
         
                {i18n.t("Global.Finish")}
              </Text>
            </ButtonColor>
          </View>
        </View>
      </Modal>
    );
  }
  return (
    <>
      <BackgroundView>
        <ScrollView>
          <HeaderScComponent
            navigation={navigation}
            details={''}
            isProduct={false}
            IsText={true}
            title={i18n.t("Global.PaymentInfo")}
          />
          <Padding>
            <View
              style={{
                flexDirection: 'row',
                width: `100%`,
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 20, color: Color.brand.black}}>
                {i18n.t("Global.Acceptrules")}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: Color.brand.blue,
                  width: 100,
                  height: 35,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
                onPress={() => {
                  closeBasket();
                  navigation.navigate('Home_SCREEN');
                }}>
                <Text style={{fontSize: 15, color: Color.brand.white}}>
                  {i18n.t("Global.Empty")}
                </Text>
                <Space lineW={8} />
                <CloseSquare
                  set="light"
                  style={{top: 2}}
                  size="small"
                  primaryColor={Color.brand.white}
                />
              </TouchableOpacity>
            </View>
            <Space lineH={40} />
            <Text>{i18n.t("Global.AddNote")}</Text>
            <Space lineH={15} />
            <TextInput
              style={{
                width: '100%',
                height: 200,
                borderWidth: 1,
                borderColor: Color.brand.grey,
                borderRadius: 10,
                textAlign: 'left',
                textAlignVertical: 'top',
              }}
              onChangeText={e => setDescription(e)}
            />
            <Space lineH={15} />
            <ViewRow style={{justifyContent: 'flex-start'}}>
              <CheckBox onCheck={e => setWithdrawal(e)} />
              <Space lineW={10} />
              <Text>
              {i18n.t("Global.IhavereadWithdrawal")}
              </Text>
            </ViewRow>
            <Space lineH={15} />
            <ViewRow style={{justifyContent: 'flex-start'}}>
              <CheckBox onCheck={e => setConditions(e)} />
              <Space lineW={10} />
              <Text>
              {i18n.t("Global.IhavereadConditions")}
              </Text>
            </ViewRow>
            <Space lineH={15} />
            <ViewRow style={{justifyContent: 'flex-start'}}>
              <CheckBox onCheck={e => setDeclaration(e)} />
              <Space lineW={10} />
              <Text>
                {i18n.t("Global.Ihaveread")}
              </Text>
            </ViewRow>
            <Space lineH={30} />
            <ViewRow>
              <TextBlack>{i18n.t("Global.Total")}</TextBlack>
              <NumberFormat
                value={resultPrice}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={''}
                renderText={(value, props) => {
                  return (
                    <TextBlack>
                      {new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value)}
                    </TextBlack>
                  );
                }}
              />
            </ViewRow>
            <Space lineH={10} />
            <LineW />
            <Space lineH={10} />
            <ViewRow>
              <TextGray>{'CST'}</TextGray>
              <NumberFormat
                value={totalCoin}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={''}
                renderText={(value, props) => {
                  return (
                    <TextBlack>
                      {value?.replace('.', ',')}
                    </TextBlack>
                  );
                }}
              />
            </ViewRow>
            <Space lineH={10} />
            {/* <ViewRow>
              <TextGray>{i18n.t("Global.TotalPoints")}</TextGray>
              <NumberFormat
                value={pointProducts}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={''}
                renderText={(value, props) => {
                  return (
                    <TextBlack>
                      {value?.replace('.', ',') + ' ' + 'UP'}
                    </TextBlack>
                  );
                }}
              />
            </ViewRow>
            <Space lineH={10} /> */}

            {/* <ViewRow>
              <TextGray>{i18n.t("Global.Transportation")}</TextGray>
              <NumberFormat
                value={
                  rolesUser == 'partner'
                    ? dataConfig?.transportation_rule?.partner_cost
                    : dataConfig?.transportation_rule?.customer_cost
                }
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={''}
                renderText={(value, props) => {
                  return (
                    <TextBlack>
                      {value?.replace('.', ',') + ' ' + resultSymbol}
                    </TextBlack>
                  );
                }}
              />
            </ViewRow>

            <Space lineH={10} /> */}
            {/* <ViewRow>
              <TextGray>{i18n.t("Global.TotalNet")}</TextGray>
              <NumberFormat
                value={resultPriceNotVat}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={''}
                renderText={(value, props) => {
                  return (
                    <TextBlack>
                      {new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value)}
                    </TextBlack>
                  );
                }}
              />
            </ViewRow> */}
            {/* <Space lineH={10} /> */}
            <ViewRow>
              <TextGray>{i18n.t("Global.Discount")}</TextGray>
              <NumberFormat
                value={codePrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
                fixedDecimalScale={true}
                decimalScale={2}
                renderText={(value, props) => {
                  return <TextRed>{new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value)}</TextRed>;
                }}
              />
            </ViewRow>
            <Space lineH={10} />
            <ViewRow>
              <TextGray>{i18n.t("Global.Shipping")}</TextGray>
              <NumberFormat
                value={shipping}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
                fixedDecimalScale={true}
                decimalScale={2}
                renderText={(value, props) => {
                  return <TextBlack>{new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value)}</TextBlack>;
                }}
              />
            </ViewRow>
            <Space lineH={10} />
            <LineW />
            <ViewRow>
              <TextBlack>{i18n.t("Global.BigTotal")}</TextBlack>
              <NumberFormat
                value={totalPrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
                fixedDecimalScale={true}
                decimalScale={2}
                renderText={(value, props) => {
                  return <TextBlack>{new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value)}</TextBlack>;
                }}
              />
            </ViewRow>
          </Padding>
          <Space lineH={120} />
        </ScrollView>
        <BottomViewBasket
          title={i18n.t("Global.Pay")}
          ISO3={ISO3}
          resultPrice={totalPrice}
          resultSymbol={resultSymbol}
          onClick={() => {
            if (withdrawal && conditions && declaration) {
              let pay = {
                delivery_contact_group_id:
                  route.params.delivery_contact_group_id,
                description: description,
                invoice_contact_group_id: route.params.invoice_contact_group_id,
                payment_method_id: route.params.payment_method_id,
                shipping_profile_id: '',
                coupon: coupon,
                wallet_coin_amount:totalCoin,

              };
              bulkAdd(pay).then(res => {
             
                setTimeout(() => {
                  if(res?.paymentLink){
                    Linking.openURL(res?.paymentLink).then((result) => {
                      // success
            
                      console.log('Link opened:', result);
                    }).catch((error) => {
                      // error
                   
                      console.log('Error opening link:', error);
                    });
                  }
                 
                  if(res){
                    setShowFinish(true);
                  }else{
                    setShowError(!res);
                  }
               
                  
                }, 3000);
              });
              
            } else {
              setError(true);
            }
          }}
        />
      </BackgroundView>
      <DropdownAlert
      closeInterval={5000}
      onClose={()=>{}}
      renderImage={props => {
        return (
          <Image
          resizeMode='center'
            style={{width: 50, height: 30,tintColor:Color.brand.white}}
            source={require('../../assets/image/cleafin_logo.png')}
          />
        );
      }}
      titleNumOfLines={3}
        ref={ref => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
      />
      <ModalTanks />
      {loadingPay ? (
        <View
          style={{
            position: 'absolute',
            top: 120,
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={Color.brand.colorButton} />
        </View>
      ) : null}
    </>
  );
}
