import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheet} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Call,
  Delete,
  Discovery,
  IconlyProvider,
  Location,
  MoreCircle,
  Swap,
  User,
} from 'react-native-iconly';
import BottomViewBasket from '../../components/bottomViewBasket';
import HeaderScComponent from '../../components/header2';
import LineW from '../../components/lineW';
import RadioButton from '../../components/radioButton';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {
  DetailsAddress,
  Menu,
  TextCode,
  TitleAddress,
  TitleAddressBlue,
  TitleAddressTitle,
  TouchCode,
  ViewItemAddress,
  ViewPopUp,
} from '../DeliveryAddress/style/myAddress.style';
import {
  TextBlack,
  TextGray,
  ViewRow,
} from '../orderDetails/style/orderDetails.style';
const height = Dimensions.get('screen').height;
import Storage from '../../utils/storeData/index';
import {KEY} from '../../utils/storeData/key';
import {AddressContext} from '../../service/Address/Address.context';
import DropdownAlert from 'react-native-dropdownalert';
import {BasketContext} from '../../service/Basket/Basket.context';
import styled from 'styled-components';
import {ProfileContext} from '../../service/Profile/Profile.context';
import EnterCode from './enterCode';
import NumberFormat from 'react-number-format';
import i18n from '../../core/i18n/config';

const TextBlue18 = styled(Text)`
  font-size: 18;
`;

const TextRed16 = styled(Text)`
  color: red;
  font-size: 16;
`;

const ViewRowJust = styled(View)`
  flex-direction: row;
`;

const TextBlack16 = styled(Text)`
  font-size: 16;
`;
export default function DeliveryAddressScreen({navigation}) {
  const [isVisibleCode, setIsVisibleCode] = useState(false);
  const [code, setCode] = useState('');

  const [idInvoice, setIdInvoice] = useState(0);
  const [idDelivery, setIdDelivery] = useState(0);

  const {getAddressFn, addressSelect, getAddressSelect} =
    useContext(AddressContext);
    
  const {showInvoiceAddress, rolesUser} = useContext(ProfileContext);
  const {
    bulkAdd,
    resultPrice,
    resultSymbol,
    shipping,
    totalPrice,
    isCoupons,
    codePrice,
    setCoupons,
    closeCouponsFn,
    couponsType,
    pointProducts,
    resultPriceNotVat,
    dataConfig,
    totalCoin,
    transportation,
    couponsRoleProduct,
    ISO3
  } = useContext(BasketContext);
  let dropDownAlertRef = useRef();
  useEffect(() => {
    closeCouponsFn();
    getAddressSelect();
    getAddressFn();
  }, []);
  useEffect(() => {
    switch (couponsType) {
      case 1:
        _fetchData(i18n.t('Global.Thecodenot'), 'error');
       
        break;
      case 2:
        _fetchData(i18n.t('Global.Discountapplied'), 'success');
        break;
      case 3:
        _fetchData(i18n.t('Global.Thecodenot'), 'error');
        break;
    }
  }, [couponsType]);

  //   const sheetRef = React.useRef(null);
  const regex = /(<([^>]+)>)/gi;
  function _renderItemAddress({title, data,type}) {
    console.log('====================================');
    console.log('_renderItemAddress', data);
    console.log('====================================');
    if (type ==1) {
      setIdInvoice(data?.id);
      return (
        <View>
          <Space lineH={10} />
          <TitleAddressTitle>{title}</TitleAddressTitle>
          <Space lineH={10} />
          <TitleAddress>
            {data?.address?.address_complete.replace(regex, ', ')}
          </TitleAddress>
          <Space lineH={15} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyAddress_SCREEN', {type: 'Invoice'});
            }}>
            <TitleAddressBlue>{i18n.t('Global.EditOrChangeAddress')}</TitleAddressBlue>
          </TouchableOpacity>
          <Space lineH={10} />
          <LineW />
        </View>
      );
    } else {
      setIdDelivery(data?.id);
      return (
        <View>
          <Space lineH={10} />
          <TitleAddressTitle>{title}</TitleAddressTitle>
          <Space lineH={10} />
          <TitleAddress>
            {addressSelect?.address?.address_complete.replace(regex, ', ')}
          </TitleAddress>
          <Space lineH={15} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyAddress_SCREEN', {type: 'Deliver'});
            }}>
            <TitleAddressBlue>{i18n.t('Global.EditOrChangeAddress')}</TitleAddressBlue>
          </TouchableOpacity>
          <Space lineH={10} />
          <LineW />
        </View>
      );
    }
  }
  const _fetchData = async (text, type) => {
    const response = await fetch('https://httpbin.org/uuid');
    const {uuid} = await response.json();
    dropDownAlertRef.alertWithType(type, text);
  };
  function nextStep() {
    if (addressSelect.address != null) {
      if(showInvoiceAddress?.address?.country?.id==addressSelect.address?.country?.id){
        navigation.navigate('PaymentScreen_SCREEN', {
          address: addressSelect.id,
          delivery_contact_group_id: idInvoice,
          invoice_contact_group_id: idDelivery,
          coupon: code,
        });
      }else{
        _fetchData(i18n.t('Global.countriesmatch'), 'error');
        
      }
      
    } else {
      _fetchData(i18n.t('Global.PleaseAdd'), 'error');
    }
  }
  return (
    <>
      <BackgroundView>
        <ScrollView>
          <HeaderScComponent navigation={navigation} title={i18n.t('Global.MyAddresses')} />

          <Padding>
            <Space lineH={15} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyAddress_SCREEN', {type: 'Basket'});
              }}>
              <ViewRowJust>
                <Location set="light" size={'medium'} primaryColor={Color.brand.blue} />
                <Space lineW={10} />
                <TextBlue18>{i18n.t('Global.AddNewAddress')}</TextBlue18>
              </ViewRowJust>
            </TouchableOpacity>
            <Space lineH={30} />
            <_renderItemAddress
              title={i18n.t("Global.InvoiceAddress")}
              data={showInvoiceAddress}
              type={1}
            />
            <Space lineH={15} />
            <_renderItemAddress
              title={i18n.t("Global.DeliveryAddress")}
              type={2}
              data={showInvoiceAddress}
            />
            {/* <RadioButton
              flexDirection={'column'}
              items={[
                {
                  title: 'Reguler Delivery',
                  description:
                    'Order will be delivered between 3 - 5 business days',
                  id: 0,
                },
                {
                  title: 'Express Delivery',
                  description:
                    'Place your order before 6 pm and your items will be delivered',
                  id: 1,
                },
              ]}
              onClick={() => {}}
            /> */}
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

            {/* <Space lineH={10} />
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
              <TextGray>{i18n.t("Global.Shipping")}</TextGray>
              <NumberFormat
                value={shipping}
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
            <ViewRow>
              <TextBlack>{i18n.t("Global.DiscountCode")}</TextBlack>
              {isCoupons ? (
                <NumberFormat
                  value={codePrice}
                  displayType={'text'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  prefix={''}
                  renderText={(value, props) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          closeCouponsFn();
                        }}>
                        <TextBlack style={{color: Color.brand.red}}>
                          {new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value)}
                        </TextBlack>
                      </TouchableOpacity>
                    );
                  }}
                />
              ) : (
                <TouchCode
                  onPress={() => {
                    navigation.navigate('Promotion_SCREEN');
                  }}>
                  <TextCode>
                    {couponsRoleProduct ? i18n.t("Global.Product") :i18n.t("Global.Enter")}
                  </TextCode>
                </TouchCode>
              )}
            </ViewRow>
            <Space lineH={10} />
            <ViewRow>
              <TextBlack>{i18n.t("Global.BagTotal")}</TextBlack>
              <NumberFormat
                value={totalPrice}
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

            <Space lineH={100} />
          </Padding>
        </ScrollView>
        <BottomViewBasket
        title={i18n.t('Global.Next')}
          resultPrice={totalPrice}
          resultSymbol={resultSymbol}
          navigation={navigation}
          onClick={nextStep}
          ISO3={ISO3}
        />
        <DropdownAlert
          titleNumOfLines={3}
          renderImage={props => {
            return (
              <Image
                resizeMode="center"
                style={{width: 50, height: 30, tintColor: Color.brand.white}}
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
      </BackgroundView>
      <EnterCode
        visible={isVisibleCode}
        onChange={e => {
          setIsVisibleCode(false);
          setCode(e);
        }}
      />
    </>
  );
}
