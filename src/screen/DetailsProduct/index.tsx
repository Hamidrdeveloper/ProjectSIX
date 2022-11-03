import React, {useContext, useEffect, useState} from 'react';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Rating, Card} from 'react-native-elements';
import NumberFormat from 'react-number-format';
import BottomDetails from '../../components/bottomDetails';
import HeaderComponent from '../../components/header';
import InputSymbol from '../../components/inputSymbol';
import {AppIntroSlider} from '../../components/introSlide';
import LineW from '../../components/lineW';
import Picker from '../../components/picker/components/Picker';
import FlatListSlide from '../../components/slideList';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {CommentContext} from '../../service/Comment/Comment.context';
import {ProductContext} from '../../service/Products/Product.context';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import {
  ImageOffer,
  TextPriceOffer,
  TextPriceThroughOffer,
  TextPriceUnitOffer,
  TextProductOffer,
  ViewOffer,
} from '../shop/style/shop.style';
import {ItemImage} from './itemImage';
import PaginationCostume from './paginationCostume';
import {
  TextReviewOffer,
  TitleStep,
  ViewRate,
} from './style/DetailsProduct.styles';
import {TabShop} from './tabShop';
import styled from 'styled-components';
import AttributeItem from './attribute';
import {taxCalculationById} from '../../utils/main';
import {ZoomableImage} from '../../components/zoomableImage/ZoomableImage';
import {ChevronDownCircle} from 'react-native-iconly';

const TextBlack18 = styled(Text)`
  font-size: 18;
`;

const ViewRowCenter = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

export default function DetailsProduct({navigation, route}) {
  const [productByRoute, setProduct] = useState(route.params.data);
  const imageConst = [{file: productByRoute.product.file}];
  const {relatedProductsItem, attributeType, productByID} =
    useContext(ProductContext);
  const [isZoom, setZomm] = useState(false);
  const [indexImage, setIndexImage] = useState(0);

  const [imageSelect, setImageSelect] = useState(null);
  console.log('productByID', productByID);

  const [itemsAttribute, setItemsAttribute] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setItemsAttribute(attributeType);
    }, 100);
    console.log('====================================');
    console.log('attributeType', attributeType);
    console.log('====================================');
  }, [attributeType]);
  function offerItem({item}) {
    let imageUrl;
    if (item?.productVariationFiles?.length > 0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    return (
      <>
        <Card
          containerStyle={{
            width: 180,
            height: 280,
            margin: 8,
            borderRadius: 8,
            padding: 5,
          }}>
          <ImageOffer source={{uri: IMAGE_ADDRESS + imageUrl}} />
          <ViewOffer>
            <Rating imageSize={12} style={{paddingVertical: 10}} />
            <TextReviewOffer>{`(${
              item?.review_count == null ? 0 : item?.review_count
            } view)`}</TextReviewOffer>
          </ViewOffer>
          <Space lineH={5} />
          <TextProductOffer>{item.name}</TextProductOffer>
          {/* <Space lineH={5} />
          <NumberFormat
            value={parseInt(item?.sale_price.value)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={''}
            renderText={(value, props) => {
              return (
                <TextPriceThroughOffer>
                  {value + ' ' + '€'}
                </TextPriceThroughOffer>
              );
            }}
          /> */}
          <Space lineH={5} />
          <NumberFormat
            value={taxCalculationById(item)}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={''}
            renderText={(value, props) => {
              return (
                <TextPriceOffer>
                  {value?.replace('.', ',') + ' ' + '€'}
                </TextPriceOffer>
              );
            }}
          />
          <Space lineH={5} />
          {/* <TextPriceUnitOffer>{'Price  unit : 3,522'}</TextPriceUnitOffer>
          <Space lineH={5} /> */}
        </Card>
      </>
    );
  }
  function paginationCostume(i: number) {
    return (
      <>
        <ViewRowCenter>
          {productByID?.map((t, index) => {
            if (index != productByID?.length) {
              return (
                <View
                  style={{
                    backgroundColor:
                      index == i
                        ? Color.brand.colorButton
                        : Color.brand.gryDLight,
                    marginLeft: 3,
                    borderRadius: index == i ? 35 : 12,
                    height: 12,
                    width: index == i ? 35 : 12,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: index == i ? 0.8 : 0,
                    shadowRadius: index == i ? 2 : 0,
                    elevation: index == i ? 5 : 0,
                  }}
                />
              );
            }
          })}
        </ViewRowCenter>
      </>
    );
  }
  function showImage(e) {
    setZomm(true);
    setImageSelect(e);
  }
  return (
    <>
      <ScrollView>
        <BackgroundView>
          <HeaderComponent navigation={navigation} />
          <AppIntroSlider
            containerStyle={{
              width: '100%',
              height: 280,
              backgroundColor: Color.brand.white,
            }}
            onSlideChange={newIndex => {
              console.log('newIndex', newIndex);
              //   setSlideIndex(newIndex);
            }}
            renderPagination={paginationCostume}
            renderItem={({item}) => {
              let imageUrl;
              if (item?.productVariationFiles.length > 0) {
                imageUrl = item?.productVariationFiles[0].file;
              } else {
                imageUrl = item?.product?.file;
              }
              return (
                <ItemImage
                  file={imageUrl}
                  onShowZoom={e => {
                    showImage(e);
                  }}
                />
              );
            }}
            data={productByID}
            goNextIndex={indexImage}
          />
          <Padding>
            <TitleStep>{productByRoute.name}</TitleStep>
            <ViewRate>
              <Rating
                ratingCount={5}
                readonly
                startingValue={0}
                imageSize={18}
                style={{paddingVertical: 10}}
              />
              <Space lineW={10} />
              <TextReviewOffer>{'3.8'}</TextReviewOffer>
              <Space lineW={10} />
              <TextReviewOffer>{'(15 view)'}</TextReviewOffer>
            </ViewRate>
            <Space lineH={10} />
            <LineW />
            <Space lineH={15} />
            <Space lineH={15} />

            <AttributeItem
              onChange={(e, index) => {
                setProduct(e);
                setIndexImage(index);
              }}
              setProduct={setProduct}
              data={itemsAttribute}
              product={productByID}
            />

            <Space lineH={15} />
            <View style={{height: 400}}>
              <TabShop product={productByRoute} />
            </View>
            <TitleStep>{'Related Products'}</TitleStep>
            <Space lineH={15} />
            {productByRoute?.crossSellingVariations?.length > 0 ? (
              <FlatListSlide
                data={productByRoute?.crossSellingVariations}
                renderItem={offerItem}
                snap={5}
                height={productByRoute?.crossSellingVariations ? 400 : 0}
              />
            ) : null}
          </Padding>
          <Space lineH={30} />
        </BackgroundView>
      </ScrollView>
      <BottomDetails item={productByRoute} />
      <Modal visible={isZoom} onRequestClose={() => setZomm(false)}>
        <View style={{width: '100%', height: '100%'}}>
          <ZoomableImage images={imageSelect} />
          <TouchableOpacity
            onPress={() => {
              setZomm(false);
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 5,
              width: 40,
              height: 40,
              position: 'absolute',
              top: 80,
              right: `45%`,
              backgroundColor: '#fff',
              borderRadius: 30,
            }}>
            <ChevronDownCircle
              set="broken"
              size={'large'}
              color={Color.brand.black}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}
