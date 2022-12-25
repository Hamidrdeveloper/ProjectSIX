import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import {Delete, IconlyProvider} from 'react-native-iconly';
import NumberFormat from 'react-number-format';
import {ViewOffer} from '../../components/bottomDetails/style/BottomDetails.style';
import {ViewCenter} from '../../components/coustom/itemWelcome/itemWelcome.style';
import HeaderScComponent from '../../components/header2';
import ImageLoading from '../../components/imageLoading';
import LineW from '../../components/lineW';
import { BackgroundView } from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {AddressContext} from '../../service/Address/Address.context';
import { FavoriteContext } from '../../service/Favorite/Favorite.context';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import {
  ImageSuggest,
  TextReviewOffer,
  TextReviewSuggest,
} from '../shop/style/shop.style';

export default function MySave({navigation}) {
  const {favorite,removeFavoriteFn} = useContext(FavoriteContext);

  function _renderItemBasket(item): any {
    let imageUrl;
    if (item?.productVariationFiles.length>0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    return (
      <>
        <View style={{width: '100%', height: 140, flexDirection: 'row'}}>
          <View>
             <ImageLoading 
              Com={ImageSuggest}
              def={require("../../assets/image/box.png")}
              style={{width: 105, height: 88}}
              src={{uri: IMAGE_ADDRESS + imageUrl}}
            />

            <Space lineH={15} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Rating
                type="custom"
                imageSize={12}
                ratingBackgroundColor={Color.brand.border}
                ratingCount={5}
                readonly
                startingValue={0}
              />
              <Space lineW={10} />
              <Text style={{color: Color.brand.textGrey}}>{'(15 view)'}</Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: Color.brand.black,
                fontSize: 18,
                width: '200%',
              }}>
              {item.name}
            </Text>
            <Space lineH={10} />
            <View style={{flexDirection: 'row'}}>
              <NumberFormat
                value={item?.sale_price==null?'0':item?.sale_price?.value}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
                fixedDecimalScale={true}
                decimalScale={2}
                renderText={(value, props) => {
                  return (
                    <Text
                      style={{
                        color: Color.brand.black,
                        fontSize: 20,
                        width: 100,
                      }}>
                      {value?.replace('.', ',') + ' ' + '€'}
                    </Text>
                  );
                }}
              />
              {/* <ViewOffer style={{width: 40, height: 25}}>
                <Text style={{color: Color.brand.white}}>{'30%'}</Text>
              </ViewOffer> */}
            </View>

            {/* <Text
              style={{
                textDecorationLine: ' line-through',
                color: Color.brand.textGrey,
                fontSize: 18,
                width: 200,
              }}>
              {'60,0 €'}
            </Text> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 15,
              bottom: 15,
            }}>
            <Delete
            set="light"
              onPress={() => {
                removeFavoriteFn(item.id);
              }}
              size={'medium'}
              primaryColor={`${Color.brand.textGrey}`}
            />

            <Space lineW={10} />
            <TouchableOpacity
              onPress={() => {
                removeFavoriteFn(item.id);
              }}>
              <Text style={{color: Color.brand.textGrey, fontSize: 14}}>
                {'Delete from list'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Space lineH={15} />
        <LineW />
        <Space lineH={15} />
      </>
    );
  }
  return (
    <BackgroundView>
      <ScrollView>
        <HeaderScComponent navigation={navigation} title={'My Favorites'} />
        <View
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: Color.brand.white,
          }}>
          <Space lineH={15} />
          {favorite.map(value => {
            return _renderItemBasket(value);
          })}
        </View>
      </ScrollView>
    </BackgroundView>
  );
}
function deleteAddressFn(item: any) {
  throw new Error('Function not implemented.');
}
