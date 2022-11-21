import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {
  TextItem,
  TextItemOffer,
  ViewBasket,
  ViewBottomDetails,
  ViewDataOffer,
  ViewOffer,
} from './style/BottomDetails.style';
import {Card} from 'react-native-elements';
import {Space} from '../../infrastructuer/theme/space.style';
import {BasketContext} from '../../service/Basket/Basket.context';
import NumberFormat from 'react-number-format';

function BottomDetails({item}) {
  const {addToBasket, removeToBasket} = useContext(BasketContext);
  console.log('====================================');
  console.log('BottomDetails', item);
  console.log('====================================');
  const [isAdd, setIsAdd] = useState(false);
  const [number, setNumber] = useState(1);
  function Plus() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 200,
            height: 40,
          }}>
          <TouchableOpacity
            onPress={() => {
              removeToBasket(item);
              setNumber(number - 1);
            }}>
            <Card
              containerStyle={{
                width: 40,
                height: 40,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="stretch"
                style={{width: 20, height: 20}}
                source={require('../../assets/image/remove.png')}
              />
            </Card>
          </TouchableOpacity>
          <View style={{ height: 45,justifyContent: 'center',}}>
          <Text
            style={{
              fontSize: 24,
              color: Color.brand.black,
              textAlignVertical: 'bottom',
            }}>
            {number}
          </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              addToBasket(item);
              setNumber(number + 1);
            }}>
            <Card
              containerStyle={{
                width: 40,
                height: 40,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="stretch"
                style={{width: 20, height: 20}}
                source={require('../../assets/image/plusBsket.png')}
              />
            </Card>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  return (
    <>
      <ViewBottomDetails>
        {!isAdd || number == 0 ? (
          <TouchableOpacity
            onPress={() => {
              addToBasket(item);
              setIsAdd(true);
              setNumber(1);
            }}>
            <ViewBasket>
              <TextItem style={{color: Color.brand.white}}>
                {'Add to Basket'}
              </TextItem>
            </ViewBasket>
          </TouchableOpacity>
        ) : (
          <Plus />
        )}

        <ViewDataOffer>
          <View>
            <NumberFormat
              value={item?.sale_price?.value}
              displayType={'text'}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={''}
              renderText={(value, props) => {
                return (
                  <TextItem>{value.replace('.', ',') + ' ' + '€'}</TextItem>
                );
              }}
            />
            {/* <TextItemOffer>{'38,50 €'}</TextItemOffer> */}
          </View>
          {/* <Space lineW={10} />
          <ViewOffer>
            <Text style={{color: Color.brand.white}}>{'30%'}</Text>
          </ViewOffer> */}
        </ViewDataOffer>
      </ViewBottomDetails>
    </>
  );
}

BottomDetails.propTypes = {};

export default BottomDetails;
function removeToBasket(item: any) {
  throw new Error('Function not implemented.');
}
