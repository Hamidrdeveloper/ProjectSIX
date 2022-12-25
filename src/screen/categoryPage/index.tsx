import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native';
import {Card, Rating} from 'react-native-elements';
import {ArrowLeft, Filter, Heart, Search, Swap} from 'react-native-iconly';
import NumberFormat from 'react-number-format';
import {CheckSaveProduct} from '../../components/checkSaveProduct';
import FlatListCustom from '../../components/flatListCoustom';
import LineH from '../../components/lineH';
import LineW from '../../components/lineW';
import Indicator from '../../components/lodging/indicator';
import {HandleEvent, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {BasketContext} from '../../service/Basket/Basket.context';
import {ProductContext} from '../../service/Products/Product.context';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import {
  Background,
  ButtonAddTo,
  ButtonCategoryAddTo,
  ImageOffer,
  LabelButton,
  SearchView,
  TextPriceOffer,
  TextPriceThroughOffer,
  TextPriceUnitOffer,
  TextProductOffer,
  TextReviewOffer,
  ViewOffer,
} from '../shop/style/shop.style';
import styled from 'styled-components';
import {goToScreenDetails} from '../../service/Products/Product.action';
import {CommentContext} from '../../service/Comment/Comment.context';
import ImageLoading from '../../components/imageLoading';

export const TextPrcentOffer = styled(Text)`
  font-size: 12;
  color: ${Color.brand.white};
`;

export const ViewPositionRight = styled(View)`
  position: absolute;
  right: 10;
`;

export const ViewRowJust = styled(View)`
  flex-direction: row;
`;

export const TextTopFilter = styled(Text)`
  font-size: 14;
`;

export const TextNameAndCategory = styled(Text)`
  font-size: 16;
`;

export const VeiwPostionLine = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 90;
  align-self: center;
`;

export const ViewOfferPlus = styled(ViewOffer)`
  width: 35;
  height: 21;
  border-bottom-right-radius: 4;
  border-top-right-radius: 4;
  border-top-left-radius: 4;
  left: 10;
  align-items: center;
  justify-content: center;
  background-color: ${Color.brand.red};
`;

export const ViewRowPrice = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

 export const ViewImageOffer = styled(View)`
  width: 144;
  height: 350;
  border-radius: 8;
  padding: 5px;
`;
const widthFull = Dimensions.get('screen').width;
export default function CategoryPageScreen({navigation, route}) {
  const [name, setName] = useState(route.params.data.name);
  const {
    categoryProductsItem,
    categoryLode,
    nameCategorySelect,
    searchProductsFn,
    productByIdFn,
    relatedProductsFn,
  } = useContext(ProductContext);
  const {getAllCommentIdFn} = useContext(CommentContext);
  const {addToBasket} = useContext(BasketContext);
  const [search, setSearch] = useState('');
  function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay], // Only re-call effect if value or delay changes
    );

    return debouncedValue;
  }
  const debouncedSearchTerm = useDebounce(search, 500);
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        if (debouncedSearchTerm == '') {
        } else {
          searchProductsFn(debouncedSearchTerm, '');
        }
      } else {
      }
    },
    [debouncedSearchTerm], // Only call effect if debounced search term changes
  );
  const [dataCategory, setDataCategory] = useState([
    {data: {flag: false}},
    {data: {flag: false}},
    {data: {flag: false}},
    {data: {flag: false}},
    {data: {flag: false}},
  ]);
  const updateSearch = (text: React.SetStateAction<string>) => {
    setSearch(text);
  };
  function _onPressHeart(index) {
    let value = [...dataCategory];
    value[index].data.flag = !value[index].data.flag;
    setDataCategory([]);
    setDataCategory(value);
  }
  function CategoryProductItem({item}) {
    let imageUrl;
    if (item?.productVariationFiles.length > 0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    return (
      <>
        <TouchableOpacity
          style={{width: widthFull / 2, backgroundColor: '#000'}}
          onPress={() => {
            
            goToScreenDetails(
              navigation,
              item,
              productByIdFn,
              getAllCommentIdFn,
              relatedProductsFn,
            );
          }}>
          <View>
            <ViewImageOffer>
            
              <ImageLoading 
               Com={ImageOffer}
               def={require("../../assets/image/box.png")}
              src={{uri: IMAGE_ADDRESS + imageUrl}} />
              <ViewOffer>
                <Rating
                  imageSize={12}
                  ratingCount={5}
                  readonly
                  startingValue={0}
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
              {/* <ViewRowPrice> */}
              {/* <NumberFormat
                  value={parseInt(
                    item?.sale_price.value,
                  )}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                  renderText={(value, props) => {
                    return (
                      <TextPriceThroughOffer>
                        {value +
                          ' ' +
                          '€'}
                      </TextPriceThroughOffer>
                    );
                  }}
                /> */}
              {/* <ViewOfferPlus>
                  <TextPrcentOffer>{'30%'}</TextPrcentOffer>
                </ViewOfferPlus> */}
              {/* </ViewRowPrice> */}

              {/* <Space lineH={5} /> */}
              {/* <TextPriceUnitOffer>{'Price  unit : 3,522'}</TextPriceUnitOffer>
              <Space lineH={5} /> */}
            </ViewImageOffer>

            <LineW />

            <ViewPositionRight>
              <CheckSaveProduct item={item} />
            </ViewPositionRight>

            <ButtonCategoryAddTo
              onPress={() => {
                addToBasket(item);
              }}>
              <LabelButton>{'Add to basket'}</LabelButton>
            </ButtonCategoryAddTo>
          </View>
        </TouchableOpacity>
      </>
    );
  }
  return (
    <Background>
      <ScrollView>
        <Space lineH={35} />
        <SearchView
          placeholder="Search On Cleaning"
          onChangeText={value => updateSearch(value)}
          onClear={()=>{updateSearch('');}}
          value={search}
          searchIcon={() => (
            <ArrowLeft
              size={'medium'}
              set="light"
              onPress={() => {
                updateSearch('');
                navigation.goBack();
              }}
              primaryColor={Color.brand.textGrey}
            />
          )}
        />
        <Padding>
          <ViewRowJust>
            {/* <Filter
              size={'medium'}
              onPress={() => {
                navigation.navigate('FilterScreen');
              }}
              primaryColor={Color.brand.black}
            />
            <Space lineW={10} />
            <HandleEvent
              onPress={() => {
                navigation.navigate('FilterScreen');
              }}>
              <TextTopFilter>{'Filter'}</TextTopFilter>
            </HandleEvent>
            <Space lineW={30} /> */}
            <Swap
              size={'medium'}
              onPress={() => {
                navigation.navigate('SortScreen');
              }}
              primaryColor={Color.brand.black}
            />
            <Space lineW={10} />
            <HandleEvent
              onPress={() => {
                navigation.navigate('SortScreen');
              }}>
              <TextTopFilter>{nameCategorySelect}</TextTopFilter>
            </HandleEvent>
          </ViewRowJust>
          <Space lineH={30} />
          <ViewRowPrice>
            <TextNameAndCategory>{name}</TextNameAndCategory>
            <TextNameAndCategory>
              {`${categoryProductsItem?.length} Products`}
            </TextNameAndCategory>
          </ViewRowPrice>
          <FlatListCustom
            data={categoryProductsItem}
            renderItem={CategoryProductItem}
            numColumns={2}
            isLoading={categoryLode}
            initialNumToRender={5}
            windowSize={5}
          />
          {/* {[1,2,3,4,5,6,7,8,9,10,11].map(()=>{
            return
        })} */}
          <VeiwPostionLine>
            <LineH />
          </VeiwPostionLine>
        </Padding>
        {/* <Indicator isVisible={categoryLode} /> */}
      </ScrollView>
    </Background>
  );
}
