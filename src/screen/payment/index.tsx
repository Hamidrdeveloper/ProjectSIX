import React, {useContext, useEffect, useState} from 'react';
import {BackgroundView, ButtonColor, Padding} from '../../css/main.style';
import {TitleStep} from '../shop/style/shop.style';
import {View, Text, Linking, ScrollView, Modal, Image} from 'react-native';
import {IconlyProvider} from 'react-native-iconly';
import HeaderScComponent from '../../components/header2';
import RadioButton from '../../components/radioButton';
import {
  TextBlack,
  TextGray,
  TextRed,
  ViewRow,
} from '../orderDetails/style/orderDetails.style';
import {Space} from '../../infrastructuer/theme/space.style';
import LineW from '../../components/lineW';
import {Color} from '../../infrastructuer/theme/colors.style';
import BottomViewBasket from '../../components/bottomViewBasket';
import {Link} from '@react-navigation/native';
import {BasketContext} from '../../service/Basket/Basket.context';
import NumberFormat from 'react-number-format';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import DropdownAlert from 'react-native-dropdownalert';
import { ProfileContext } from '../../service/Profile/Profile.context';
import i18n from '../../core/i18n/config';
// import 'intl';
// import 'intl/locale-data/jsonp/en';
import SliderComponent from './SliderComponent';
export default function PaymentScreen({navigation, route}) {
  const {
    totalPrice,
    shipping,
    resultSymbol,
    paymentMethodsFn,
    paymentMethods,
    bulkAdd,
    codePrice,
    pointProducts,
    resultPriceNotVat,
    resultPrice,
    setTotalPrice,
    dataConfig,
    totalCoin,
    ISO3,
    setCodePrice
  } = useContext(BasketContext);
  const {rolesUser} = useContext(ProfileContext);

  const [dataPayment, setDataPayment] = useState([]);
  const [selectPayment, setSelectPayment] = useState(0);
  const [error, setError] = useState(false);
  const [priceNumber, setPriceNumber] = useState(totalPrice);

  const [showFinish, setShowFinish] = useState(false);
  let dropDownAlertRef = React.useRef();

  useEffect(() => {
    paymentMethodsFn();
  }, []);
  useEffect(() => {
    let array = [];
    paymentMethods?.map(res => {
      array.push({
        title: res?.name,
        description: '',
        id: res?.id,
        image: {uri: IMAGE_ADDRESS + res.file_path},
      });
    });
    setDataPayment(array);
  }, [paymentMethods]);

  useEffect(() => {
    if (error) {
      dropDownAlertRef.alertWithType('error',  i18n.t('Global.Allfields') );
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
            <Text style={{fontSize: 20, color: Color.brand.black}}>
           
              {i18n.t("Global.PaymentMethod")}
            </Text>
            <RadioButton
              flexDirection={'column'}
              isImage={true}
              items={dataPayment}
              onClick={e => {
                setSelectPayment(e);
              }}
            />
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
            {/* <Space lineH={10} />
            <ViewRow>
              <TextGray>{'Total Points'}</TextGray>
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
            </ViewRow> */}
            {/* <Space lineH={10} />

            <ViewRow>
              <TextGray>{'Transportation'}</TextGray>
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
            </ViewRow> */}
{/* 
            <Space lineH={10} />
            <ViewRow>
              <TextGray>{'Total Net'}</TextGray>
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
                      {value?.replace('.', ',') + ' ' + resultSymbol}
                    </TextBlack>
                  );
                }}
              />
            </ViewRow> */}
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
            <SliderComponent onValue={(r)=>{setPriceNumber(r)}}/>
          </Padding>
          <Space lineH={120} />
        </ScrollView>
        <BottomViewBasket
          title={i18n.t("Global.CheckoutNow")}
          ISO3={ISO3}
          resultPrice={priceNumber}
          resultSymbol={resultSymbol}
          onClick={() => {
            if (selectPayment != 0) {
               setCodePrice(priceNumber-totalPrice)
              setTotalPrice(priceNumber)
             
              navigation.navigate('Final_SCREEN', {
                address: route.params.address,
                delivery_contact_group_id:
                  route.params.delivery_contact_group_id,
                invoice_contact_group_id:
                  route.params.delivery_contact_group_id,
                payment_method_id: selectPayment,
                shipping_profile_id: '',
                coupon:route.params.coupon,
              
              });
            }
          }}
        />
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
