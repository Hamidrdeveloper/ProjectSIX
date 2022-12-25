import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Rating} from 'react-native-elements';
import {Buy, CloseSquare, Plus, Wallet} from 'react-native-iconly';
import {BackgroundView, ViewRowBetween} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {ViewRow} from '../orderDetails/style/orderDetails.style';
import EnterCode from '../DeliveryAddress/enterCode';
import {
  ButtonCategoryAddTo,
  ImageOffer,
  ImagePlus,
  LabelButton,
  TextPriceOffer,
  TextProductOffer,
  TextReviewOffer,
  ViewOffer,
} from '../shop/style/shop.style';
import LineW from '../../components/lineW';
import {Space} from '../../infrastructuer/theme/space.style';
import NumberFormat from 'react-number-format';
import {ViewImageOffer} from '../categoryPage';
import {BasketContext} from '../../service/Basket/Basket.context';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import HeaderScComponent from '../../components/header2';
import DropdownAlert from 'react-native-dropdownalert';
const widthFull = Dimensions.get('screen').width;

export default function WalletProductScreen({navigation}) {
  const [product, setProduct] = useState('');

  const {
    addToBasketCoin,
    setAddCoinProduct,
    addCoinProduct,
    removeCoinProduct,
    productWallet,
    setProductWallet,
    priceBasketWallet,
    setWalletRoleProduct,
  } = useContext(BasketContext);
  let dropDownAlertRef = useRef();

  useEffect(() => {
    setProduct(productWallet);
  }, [productWallet]);
  const addOffer = item => {
    let change = product.filter(key => key.id !== item.id);

    setProductWallet(change);
    addToBasketCoin({...item, coin: true});
    setAddCoinProduct([...addCoinProduct, {...item, coin: true}]);
  };

  function CategoryProductItem({item}) {
    let imageUrl;
    if (item?.productVariationFiles?.length > 0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    return (
      <View
        style={{
          width: widthFull,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
        }}>
        <TouchableOpacity
          style={{
            width: widthFull - 30,
            backgroundColor: Color.brand.white,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            borderRadius: 8,
            paddingLeft: 15,
            height: 120,
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                resizeMode={'contain'}
                style={{width: 80, height: 80}}
                source={{uri: IMAGE_ADDRESS + imageUrl}}
              />
              <Space lineW={15} />
              <View>
                <Space lineH={5} />
                <TextProductOffer style={{width: widthFull - 140}}>
                  {item.name}
                </TextProductOffer>
                <Space lineH={5} />
                <View style={{flexDirection: 'row'}}>
                  <NumberFormat
                    value={item?.sale_price.value}
                    displayType={'text'}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix={''}
                    renderText={(value, props) => {
                      return (
                        <TextPriceOffer>
                          {value?.replace('.', ',') +
                            ' ' +
                            item?.sale_price?.iso3}
                        </TextPriceOffer>
                      );
                    }}
                  />
                  <Space lineW={10} />
                  <NumberFormat
                    value={item?.sale_price?.gross_value}
                    displayType={'text'}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix={''}
                    renderText={(value, props) => {
                      return (
                        <TextPriceOffer style={{color: Color.brand.red}}>
                          {'(' +
                            value?.replace('.', ',') +
                            ' ' +
                            item?.sale_price?.iso3 +
                            ')'}
                        </TextPriceOffer>
                      );
                    }}
                  />
                </View>
                <Space lineH={5} />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', bottom: 8, right: 15}}
            onPress={() => {
              setWalletRoleProduct(true);

              addOffer(item);
            }}>
            <ImagePlus source={require('../../assets/image/plus.png')} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
  function selectOfferItem({item}) {
    let imageUrl;
    if (item?.productVariationFiles?.length > 0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    return (
      <View style={{height: 120,marginBottom:5}}>
        <TouchableOpacity
          onPress={() => {
            removeCoinProduct(item);
          }}
          style={{
            width: 80,
            backgroundColor: Color.brand.white,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            borderRadius: 8,
            paddingLeft: 15,
            marginBottom: 5,
            height: 80,
            justifyContent: 'center',
            margin: 8,
          }}>
          <Image
            resizeMode={'contain'}
            style={{width: 60, height: 60}}
            source={{uri: IMAGE_ADDRESS + imageUrl}}
          />
          <View style={{position: 'absolute', top: 3, right: 3}}>
            <CloseSquare set="light" primaryColor={Color.brand.red} />
          </View>
        </TouchableOpacity>
        <Space lineH={12} />
      </View>
    );
  }
  return (
    <BackgroundView>
      <HeaderScComponent navigation={navigation} title={'Wallet Product'} />
      {addCoinProduct.length >= 0 ? (
        <View style={{flexDirection: 'row', paddingLeft: 20}}>
          <Buy set="light" primaryColor={Color.brand.blue} />
          <Text
            style={{
              color: Color.brand.blue,
              fontSize: 18,

              fontWeight: 'bold',
            }}>
            {'Product with Coin:'}
          </Text>
        </View>
      ) : null}
     
      <FlatList
        data={addCoinProduct}
        style={{minHeight:130}}
        horizontal
        renderItem={item => {
          return selectOfferItem(item);
        }}
      />
     
      <Space lineH={30} />
      <View >
      <FlatList
        data={product}
        renderItem={item => {
          return CategoryProductItem(item);
        }}
      />
      </View>
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
  );
}
