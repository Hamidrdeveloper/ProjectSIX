import {Dimensions, FlatList, Text} from 'react-native';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import NumberFormat from 'react-number-format';
import {Space} from '../../infrastructuer/theme/space.style';
import {
  ButtonCategoryAddTo,
  ImageOffer,
  LabelButton,
  TextPriceOffer,
  TextPriceThroughOffer,
  TextPriceUnitOffer,
  TextProductOffer,
  TextReviewOffer,
  TitleStep,
  ViewOffer,
} from '../shop/style/shop.style';
import {CheckSaveProduct} from '../../components/checkSaveProduct';
import {BasketContext} from '../../service/Basket/Basket.context';
import {CommentContext} from '../../service/Comment/Comment.context';

import {ProductContext} from '../../service/Products/Product.context';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import LineH from '../../components/lineH';
import LineW from '../../components/lineW';
import {ArrowLeft, Filter, Heart, Search, Swap} from 'react-native-iconly';
import React, {useContext} from 'react';
import {Color} from '../../infrastructuer/theme/colors.style';
import {
  goToScreenCategory,
  goToScreenDetails,
} from '../../service/Products/Product.action';
import ImageLoading from '../../components/imageLoading';
const widthFull = Dimensions.get('screen').width;

export function RelatedProductItem({navigation}) {
  const {productsItem,productByIdFn,relatedProductsFn} = useContext(ProductContext);
  const {getAllCommentIdFn} = useContext(CommentContext);

  const {addToBasket} = useContext(BasketContext);
  function _renderItem({item}) {
    let imageUrl;
    if (item?.productVariationFiles.length>0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    return (
      <>
        <View style={{width: widthFull / 2}}>
          <TouchableOpacity
            onPress={() => {
              goToScreenDetails(
                navigation,
                item,
                productByIdFn,
                getAllCommentIdFn,
                relatedProductsFn,
              );
            }}>
            <View
              style={{
                width: 144,
                height: 350,
                borderRadius: 8,
                padding: 5,
              }}>
              <ImageLoading 
              Com={ImageOffer}
              def={require("../../assets/image/box.png")}
              src={{uri: IMAGE_ADDRESS + imageUrl}} />
              <ViewOffer>
                <Rating
                  ratingCount={5}
                  readonly
                  startingValue={0}
                  imageSize={12}
                  style={{paddingVertical: 10}}
                />
                <TextReviewOffer>{`(${
                  item?.review_count == null ? 0 : item?.review_count
                } view)`}</TextReviewOffer>
              </ViewOffer>
              <Space lineH={5} />
              <TextProductOffer>{item.name}</TextProductOffer>
              <Space lineH={5} />
              <NumberFormat
                value={item?.sale_price.value}
                displayType={'text'}
                thousandSeparator={true}
                fixedDecimalScale={true}
                prefix={''}
                decimalScale={2}
                renderText={(value, props) => {
                  return <TextPriceOffer>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: item?.sale_price.iso3 }).format(value)}</TextPriceOffer>;
                }}
              />
              <Space lineH={5} />
              {/* <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}> */}
              {/* <NumberFormat
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
              {/* <ViewOffer
                  style={{
                    backgroundColor: Color.brand.red,
                    width: 35,
                    height: 21,
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 4,
                    borderTopLeftRadius: 4,
                    left: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: Color.brand.white, fontSize: 12}}>
                    {'30%'}
                  </Text>
                </ViewOffer> */}
              {/* </View> */}

              <Space lineH={5} />
              {/* <TextPriceUnitOffer>{'Price  unit : 3,522'}</TextPriceUnitOffer>
              <Space lineH={5} /> */}
            </View>
          </TouchableOpacity>
          <LineW />

          <View style={{position: 'absolute', right: 10}}>
            <CheckSaveProduct item={item} />
          </View>

          <ButtonCategoryAddTo
            onPress={() => {
              addToBasket(item);
            }}>
            <LabelButton>{'Add to basket'}</LabelButton>
          </ButtonCategoryAddTo>
        </View>
      </>
    );
  }
  return (
    <>
      <Space lineH={50} />
      <TitleStep>{'Offers for you'}</TitleStep>
      <Space lineH={25} />
      <FlatList
        keyExtractor={index => index}
        data={productsItem}
        renderItem={_renderItem}
        numColumns={2}
        initialNumToRender={5}
        windowSize={5}
      />
    </>
  );
}
