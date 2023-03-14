import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {Rating} from 'react-native-elements';
import {Card} from 'react-native-elements';
import {
  TextItem,
  TextItemOffer,
  ViewBasket,
  ViewBottomDetails,
  ViewDataOffer,
} from '../../components/bottomDetails/style/BottomDetails.style';
import {ViewCenter} from '../../components/coustom/itemWelcome/itemWelcome.style';
import {BackgroundView} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {BasketContext} from '../../service/Basket/Basket.context';
import {ImageSuggest} from '../shop/style/shop.style';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import {
  Delete,
  NumberPlus,
  ViewPlus,
  Plus,
  ItemBasket,
  TextDetailBasket,
  TextPriceBasket,
  TextPriceBasketAbsolute,
  TextDetailBasketBlack,
} from './style/Basket.style';
import NumberFormat from 'react-number-format';
import {AuthContext} from '../../service/Auth/Auth.context';
import {ProfileContext} from '../../service/Profile/Profile.context';
// import 'intl';
// import 'intl/locale-data/jsonp/en';
import PopUpLogin from '../../components/popUpLogin';
import styled from 'styled-components';
import {useIsFocused} from '@react-navigation/native';
import MenuLeftMore from '../../components/menuLeftMore';
import {Discount} from 'react-native-iconly';
import i18n from '../../core/i18n/config';
const heightFull = Dimensions.get('screen').height;

const ViewBasketHigh = styled(View)`
  width: 100%;

  height: ${heightFull - 140};
`;

const ImageMenu = styled(Image)`
  width: 30;
  height: 30;
`;

const TextBasket = styled(Text)`
  font-size: 18;
  color: ${Color.brand.black};
`;

const MenuView = styled(View)`
  flex-direction: row;
  width: 100%;
  height: 50;
  padding: 15px;
`;

export default function BasketScreen({navigation}) {
  const [number, setNumber] = useState(1);
  const {
    basketsExited,
    resultPrice,
    resultSymbol,
    addToBasket,
    removeToBasket,
    bulkAdd,
    shipping,
    totalPrice,
    closeCouponsFn,
    pointProducts,
    walletCoinFn,
    dataConfig,
    removeCoinProduct,
    transportation,
    removeToBasketCoin,
    totalCoin,
    addToBasketCoin,
    ISO3
  } = useContext(BasketContext);
  const {isLoginOpen} = useContext(AuthContext);
  const {rolesUser, walletBalance} = useContext(ProfileContext);

  const [showPopLogin, setShowPopLogin] = useState(false);
  const [showRule, setShowRule] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    closeCouponsFn();
  }, [isFocused]);
  function RenderPlusCoin({product}) {
    return (
      <>
        <ViewPlus>
          <TouchableOpacity
            onPress={() => {
              setShowRule(false);
              setNumber(number - 1);
              removeCoinProduct(product);
            }}>
            <Card
              containerStyle={{
                width: 30,
                height: 30,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Delete source={require('../../assets/image/remove.png')} />
            </Card>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', height: 30}}>
            <NumberPlus
              style={{
                ...Platform.select({
                  ios: {
                    lineHeight: 30, // as same as height
                  },
                }),
              }}>
              {product.numberBasket}
            </NumberPlus>
          </View>
          <TouchableOpacity
            onPress={() => {
              let price = totalCoin + product.sale_price.value;
              if(price <walletBalance){
              setShowRule(false);
              setNumber(number + 1);
              addToBasketCoin(product);
              }
            }}>
            <Card
              containerStyle={{
                width: 30,
                height: 30,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Plus source={require('../../assets/image/plusBsket.png')} />
            </Card>
          </TouchableOpacity>
        </ViewPlus>
      </>
    );
  }
  function RenderPlus({product}) {
    return (
      <>
        <ViewPlus>
          <TouchableOpacity
            onPress={() => {
              setShowRule(false);
              setNumber(number - 1);
              removeToBasket(product);
            }}>
            <Card
              containerStyle={{
                width: 30,
                height: 30,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Delete source={require('../../assets/image/remove.png')} />
            </Card>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', height: 30}}>
            <NumberPlus
              style={{
                ...Platform.select({
                  ios: {
                    lineHeight: 30, // as same as height
                  },
                }),
              }}>
              {product.numberBasket}
            </NumberPlus>
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowRule(false);
              setNumber(number + 1);
              addToBasket(product);
            }}>
            <Card
              containerStyle={{
                width: 30,
                height: 30,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Plus source={require('../../assets/image/plusBsket.png')} />
            </Card>
          </TouchableOpacity>
        </ViewPlus>
      </>
    );
  }

  function BottomView() {
    return (
      <ViewBottomDetails>
        <View
          style={{alignItems: 'flex-end', width: '105%', position: 'absolute'}}>
          {/* {dataConfig?.transportation_rule?.min_partner_amount >
          transportation ? (
            <NumberFormat
              value={
                rolesUser == 'partner'
                  ? dataConfig?.transportation_rule?.partner_cost
                  : dataConfig?.transportation_rule?.customer_cost
              }
              displayType={'text'}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={''}
              renderText={(value, props) => {
                return (
                  <TextDetailBasketBlack
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 15,
                      fontSize: 14,
                      color: Color.brand.red,
                      textAlign: 'right',
                    }}>
                    {'Transportation : ' +
                      value.replace('.', ',') +
                      ' ' +
                      resultSymbol}
                  </TextDetailBasketBlack>
                );
              }}
            />
          ) : null} */}
          <NumberFormat
            value={shipping}
            displayType={'text'}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={''}
            renderText={(value, props) => {
              return (
                <TextDetailBasketBlack
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 15,
                    fontSize: 14,
                    color: Color.brand.red,
                    textAlign: 'right',
                  }}>
                 {i18n.t('Global.ShippingPrice')+
                    new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value)}
                </TextDetailBasketBlack>
              );
            }}
          />
          <NumberFormat
            value={totalPrice}
            displayType={'text'}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={''}
            renderText={(value, props) => {
              return (
                <TextPriceBasketAbsolute>
                  {basketsExited.length>0?new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value):new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(0)}
                </TextPriceBasketAbsolute>
              );
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (isLoginOpen) {
              if (basketsExited.length > 0&&totalPrice>1 && !showRule) {
                navigation.navigate('DeliveryAddress_SCREEN', {type: 'Basket'});
              }
            } else {
              setShowPopLogin(true);
            }
          }}>
          <ViewBasket>
            <TextItem style={{color: Color.brand.white}}> {i18n.t('Global.Next')}</TextItem>
          </ViewBasket>
        </TouchableOpacity>
      </ViewBottomDetails>
    );
  }
  function _renderItemBasket({data}) {
    console.log(data?.coin);
    if (data?.min_order_quantity > data?.numberBasket) {
      setShowRule(true);
    }
    if (
      data?.max_order_quantity < data?.numberBasket &&
      data?.max_order_quantity != null
    ) {
      setShowRule(true);
    }
    let imageUrl;
    if (data?.productVariationFiles?.length > 0) {
      imageUrl = data?.productVariationFiles[0].file;
    } else {
      imageUrl = data?.product?.file;
    }
    return (
      <ItemBasket>
        <View style={{width:`25%`,height:200,alignItems:'center'}}>
          <Image style={{width:`100%`,height:100,left:10}} source={{uri: IMAGE_ADDRESS + imageUrl}} />
          {data?.coin?<RenderPlusCoin product={data} />:
          <RenderPlus product={data} />
        }
        </View>

        <ViewCenter>
          <View style={{height: 120,width:`75%`,left:10,justifyContent:'center'}}>
            <TextDetailBasketBlack>{data.name}</TextDetailBasketBlack>
            <Space lineH={10} />
            {/* <TextDetailBasket>{'2 Litre'}</TextDetailBasket> */}
            <Space lineH={10} />
            {data?.productVariationCategories?.length > 0 ? (
              <TextDetailBasket style={{width:`180%`}}>
                {`Category:${data?.productVariationCategories[0].name}`}
              </TextDetailBasket>
            ) : null}
            <NumberFormat
            value={data?.sale_price.value}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={''}
            renderText={(value, props) => {
              return (
                <TextPriceBasket>
                  {data.coin?value?.replace('.', ',') +
                            ' ' +
                            data?.sale_price?.iso3:new Intl.NumberFormat('de-DE', { style: 'currency', currency:ISO3 }).format(value)}
                </TextPriceBasket>
              );
            }}
          />
          </View>
          
        </ViewCenter>
        {data?.max_order_quantity < data?.numberBasket &&
        data?.max_order_quantity != null ? (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 10,
              borderColor: Color.brand.red,
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                height: 25,
                color: Color.brand.red,
              }}>
              {`The maximum purchase of this product is ${data?.min_order_quantity} pieces`}
            </Text>
          </View>
        ) : null}
        {data?.min_order_quantity > data?.numberBasket ? (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 10,
              borderColor: Color.brand.red,
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                height: 25,
                color: Color.brand.red,
              }}>
              {`The minimum purchase of this product is ${data?.min_order_quantity} pieces`}
            </Text>
          </View>
        ) : null}
        {data?.offer ? (
          <View style={{position: 'absolute', left: 8, top: 8}}>
            <Discount set="light" size={'large'} primaryColor="red" />
          </View>
        ) : null}
      </ItemBasket>
    );
  }
  return (
    <>
      <BackgroundView>
        <ViewBasketHigh>
          <ScrollView>
            <MenuView>
              <ImageMenu
                resizeMode="contain"
                source={require('../../assets/image/menu.png')}
              />
              <Space lineW={'5%'} />
              <TextBasket>{i18n.t('Global.Basket')}</TextBasket>
            </MenuView>
            {rolesUser == 'partner'?  <Space lineH={30} />:null}
            {basketsExited.map(data => {
              return <_renderItemBasket data={data} />;
            })}
            <Space lineH={90} />
          </ScrollView>
        </ViewBasketHigh>
        <BottomView />
        <PopUpLogin
          onClick={() => setShowPopLogin(false)}
          onClose={() => setShowPopLogin(false)}
          isVisible={showPopLogin}
          navigation={navigation}
        />
        {rolesUser == 'partner' ? <MenuLeftMore /> : null}
        {/* <TouchableOpacity
          style={{
            position: 'absolute',
            top: 50,
            right: 15,
            width: 150,
            height: 30,
            backgroundColor: Color.brand.colorButton,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
          onPress={() => {
            walletCoinFn(walletBalance-totalCoin);
            navigation.navigate("WalletProduct_SCREEN")
          }}>
          <Text style={{color: Color.brand.white, fontSize: 15}}>
            {i18n.t('Global.wallet')+ (walletBalance-totalCoin)}
          </Text>
        </TouchableOpacity> */}
      </BackgroundView>
    </>
  );
}
