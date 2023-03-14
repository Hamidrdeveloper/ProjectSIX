import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import NumberFormat from 'react-number-format';
import HeaderScComponent from '../../components/header2';
import LineW from '../../components/lineW';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {BasketContext} from '../../service/Basket/Basket.context';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import {regexHtml} from '../../utils/main';
import {
  BoxNotValid,
  BoxValid,
  BoxValidBold,
  ButtonGrayItem,
  ButtonPoreItem,
  Center,
  ImageItemShop,
  ImageNotValid,
  ImageValid,
  ImageValidBold,
  LineNotValid,
  LineValid,
  TextBlack,
  TextBlackCenter,
  TextBlue,
  TextGray,
  TextGreen,
  TextPore,
  TextRed,
  ViewRow,
  ViewRowItem,
} from './style/orderDetails.style';
import i18n from '../../core/i18n/config';

export default function OrderDetails({navigation, route}) {
  const [indexProcess, setIndexProcess] = useState(
    route.params.product.order_status_id,
  );
  const {addToBasket, orderSaleById,ISO3} = useContext(BasketContext);

  const [products, setProducts] = useState(route.params.product);
  const [total, setTotal] = useState('0');
  let arrayProcess = [
    {id: 1, image: require('../../assets/image/factororder.png')},
    {id: 3, image: require('../../assets/image/chatchorder.png')},
    {id: 4, image: require('../../assets/image/kargo.png')},
    {id: 4, image: require('../../assets/image/basketorder.png')},
    {id: 5, image: require('../../assets/image/barorder.png')},
    {id: 6, image: require('../../assets/image/carorder.png')},
  ];
  useEffect(() => {
    totalPrice();
  }, [products]);
  function totalPrice() {
    products.orderSalePositions.forEach(element => {
      setTotal(total + element?.price_value);
    });
  }

  function Process() {
    return (
      <>
        <ViewRow>
          <TextGreen>{'Stuck checking'}</TextGreen>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('ReturnBackProduct');
            }}>
            <TextBlue>{'View details'}</TextBlue>
          </TouchableOpacity> */}
        </ViewRow>
        <Space lineH={20} />
        <ViewRow>
          {arrayProcess.map((value, index) => {
            return (
              <Center>
                {indexProcess >= value.id ? (
                  <>
                    {indexProcess == value.id ? (
                      <BoxValidBold>
                        <ImageValidBold source={value.image} />
                      </BoxValidBold>
                    ) : (
                      <BoxValid>
                        <ImageValid source={value.image} />
                      </BoxValid>
                    )}
                  </>
                ) : (
                  <>
                    <BoxNotValid>
                      <ImageNotValid source={value.image} />
                    </BoxNotValid>
                  </>
                )}
                {indexProcess > value.id ? <LineValid /> : <LineNotValid />}
              </Center>
            );
          })}
        </ViewRow>
      </>
    );
  }

  function renderItemShop(item) {
    console.log('renderItemShop', item);
    if (item.product_variation_id != null) {
      return (
        <>
          <ViewRowItem>
            {item?.productVariation?.productVariationFiles != null &&
            item?.productVariation?.productVariationFiles?.length > 0 ? (
              <ImageItemShop
                source={{
                  uri:
                    IMAGE_ADDRESS +
                    item?.productVariation?.productVariationFiles[0]?.file,
                }}
                resizeMode={'contain'}
              />
            ) : null}
            <Space lineW={15} />
            <View>
              <Space lineH={10} />
              <TextBlack>{item?.productVariation?.product?.name}</TextBlack>
              <Space lineH={10} />
              {item?.productVariation?.product?.productCategories.length > 0 ? (
                <TextGray>
                  {i18n.t("Global.Category")+":" +
                    item?.productVariation?.product?.productCategories[0].name}
                </TextGray>
              ) : null}
              <Space lineH={10} />
              <ViewRowItem>
                <NumberFormat
                  value={item?.price_value}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                  fixedDecimalScale={true}
                  decimalScale={2}
                  renderText={(value, props) => {
                    return <TextGray>{value.replace('.', ',') + ' '}</TextGray>;
                  }}
                />
                <Space lineW={40} />
                <TextGray>
                  {i18n.t("Global.Number")+":"+item?.productVariation?.product?.number}
                </TextGray>
              </ViewRowItem>
              <ViewRowItem>
                <TextGray>{i18n.t("Global.Quantity")+":" + item?.quantity}</TextGray>
                <Space lineW={40} />
                <TextGray>{'VAT : ' + item?.vat_value + '%'}</TextGray>
              </ViewRowItem>
            </View>
          </ViewRowItem>
          <Space lineH={10} />
          <ViewRow>
            {/* <ButtonGrayItem>
            <TextBlackCenter>{'Rate & Review'}</TextBlackCenter>
          </ButtonGrayItem> */}
            {/* <ButtonPoreItem
            onPress={() => {
              addToBasket({...item, sale_price: item?.price_value});
            }}>
            <TextPore>{'Buy again'}</TextPore>
          </ButtonPoreItem> */}
          </ViewRow>
          <Space lineH={20} />
          <LineW />
        </>
      );
    } else {
      return null;
    }
  }
  return (
    <BackgroundView>
      <ScrollView>
        <HeaderScComponent
          navigation={navigation}
          details={''}
          isProduct={false}
          IsText={false}
          title={i18n.t("Global.OrderDetail")}
          
        />
        <Padding>
          <ViewRow>
            <TextGray>{i18n.t("Global.OrderNo")+":"}</TextGray>
            <TextBlack>{`# ${products.number}`}</TextBlack>
          </ViewRow>
          <ViewRow>
            <TextGray>{i18n.t("Global.OrderID")+":"}</TextGray>
            <TextBlack>{`# ${products.id}`}</TextBlack>
          </ViewRow>
          <Space lineH={10} />
          <ViewRow>
            <TextGray>{i18n.t("Global.Orderdate")+":"}</TextGray>
            <TextBlack>
              {' '}
              {new Date(products.order_date).toUTCString().toString()}
            </TextBlack>
          </ViewRow>
          <Space lineH={30} />
          <ViewRow>
            <TextGray>{i18n.t("Global.Transferee")+":"}</TextGray>
            <TextBlack>
              {products.user.person.first_name +
                ' ' +
                products.user.person.last_name}
            </TextBlack>
          </ViewRow>
          {/* <Space lineH={10} /> */}
          {/* <ViewRow>
            <TextGray>{'Mobile : '}</TextGray>
            <TextBlack>{"+989383051033"}</TextBlack>
          </ViewRow> */}
          <Space lineH={10} />
          <View>
            <TextGray>{i18n.t("Global.Deliveryaddress")+":"}</TextGray>
            <Space lineH={10} />
            <TextBlack numberOfLines={2}>
              {products.deliveryContactGroup.address.address_complete.replace(
                regexHtml,
                ', ',
              )}
            </TextBlack>
          </View>
          <Space lineH={10} />
          <View>
            <TextGray>{i18n.t("Global.Invoiceaddress")+":"}</TextGray>
            <Space lineH={10} />
            <TextBlack numberOfLines={2}>
              {products.invoiceContactGroup.address.address_complete.replace(
                regexHtml,
                ', ',
              )}
            </TextBlack>
          </View>
          <Space lineH={40} />
          <Process />
          <Space lineH={20} />
          {/* <ViewRow>
            <TextGray>{'Shipping : '}</TextGray>
            <TextBlack>{'10.5 €'}</TextBlack>
          </ViewRow>
          <Space lineH={10} />
          <ViewRow>
            <TextGray>{'Total Payment :'}</TextGray>
            <TextBlack>{'210.5 €'}</TextBlack>
          </ViewRow> */}
          <Space lineH={10} />
          <LineW />
          <Space lineH={10} />
          {orderSaleById?.orderSalePositions?.map(item => {
            return renderItemShop(item);
          })}
          <Space lineH={30} />
          <ViewRow>
            <TextGray>{i18n.t("Global.TotalNet")}</TextGray>
            <NumberFormat
              value={products?.product_variations_net_value}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
              fixedDecimalScale={true}
              decimalScale={2}
              renderText={(value, props) => {
                return <TextBlack>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: ISO3 }).format(value)}</TextBlack>;
              }}
            />
          </ViewRow>
          <Space lineH={10} />
          <ViewRow>
            <TextGray>{'VAT'}</TextGray>
            <NumberFormat
              value={products?.total_vat_amount}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
              fixedDecimalScale={true}
              decimalScale={2}
              renderText={(value, props) => {
                return (
                  <TextRed style={{color: Color.brand.green}}>
                  {new Intl.NumberFormat('de-DE', { style: 'currency', currency: ISO3 }).format(value)}
                  </TextRed>
                );
              }}
            />
          </ViewRow>
          <Space lineH={15} />
          <ViewRow>
            <TextGray>{i18n.t("Global.ShippingPrice")}</TextGray>
            <NumberFormat
              value={products?.gross_shipping_cost}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
              fixedDecimalScale={true}
              decimalScale={2}
              renderText={(value, props) => {
                return (
                  <TextRed style={{color: Color.brand.green}}>
                   {new Intl.NumberFormat('de-DE', { style: 'currency', currency: ISO3 }).format(value)}
                  </TextRed>
                );
              }}
            />
          </ViewRow>
          <Space lineH={15} />
          <ViewRow>
            <TextBlack>{i18n.t("Global.SubTotal")}</TextBlack>
            {products?.sale_price.gross_value!=products?.sale_price.value?
            <NumberFormat
              value={products?.product_variations_gross_value}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
              fixedDecimalScale={true}
              decimalScale={2}
              renderText={(value, props) => {
                return <TextBlack>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: ISO3}).format(value)}</TextBlack>;
              }}
            />
:null}
          </ViewRow>
          <Space lineH={10} />
          <LineW />
          {/* <Space lineH={10} />
          <ViewRow>
            <TextGray>{'Shipping'}</TextGray>
            <TextBlack>{'29 €'}</TextBlack>
          </ViewRow> */}
          <Space lineH={10} />
          <ViewRow>
            <TextBlack>{i18n.t("Global.TotalPrice")}</TextBlack>
            <NumberFormat
              value={products?.total_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
              fixedDecimalScale={true}
              decimalScale={2}
              renderText={(value, props) => {
                return <TextBlack>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: ISO3}).format(value)}</TextBlack>;
              }}
            />
          </ViewRow>
        </Padding>
      </ScrollView>
    </BackgroundView>
  );
}
