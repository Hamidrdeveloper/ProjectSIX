import React, { useContext, useState } from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {Plus} from 'react-native-iconly';
import Icon from 'react-native-vector-icons/AntDesign';
import RenderListItem from '../../components/picker/components/RenderListItem';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {SearchView} from '../shop/style/shop.style';
const widthFull = Dimensions.get('window').width;
import styled from 'styled-components';
import { BasketContext } from '../../service/Basket/Basket.context';
import { RelatedProductItem } from './realted';

export default function WaitingView({navigation}) {
  const {orderSaleWhiting} = useContext(BasketContext);
  const [search, setSearch] = useState('');
  const updateSearch = (text: React.SetStateAction<string>) => {
    setSearch(text);
  };
  function RenderListItem() {
    return (
      <>
        <Text>
          <Text style={{fontSize: 14, color: Color.brand.textGrey}}>
            {'Order No. :'}
          </Text>
          <Text style={{fontSize: 14, color: Color.brand.black}}>
            {'# 325-254-7446'}
          </Text>
        </Text>
        <Space lineH={15} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: `100%`,
          }}>
          <Text>
            <Text style={{fontSize: 14, color: Color.brand.textGrey}}>
              {'Payment :'}
            </Text>
            <Text style={{fontSize: 14, color: Color.brand.black}}>
              {'210,5 €'}
            </Text>
          </Text>
          <Text>
            <Text style={{fontSize: 12, color: Color.brand.textGrey}}>
              {'Order Date :'}
            </Text>
            <Text style={{fontSize: 12, color: Color.brand.black}}>
              {'20.02.2019'}
            </Text>
          </Text>
        </View>
        <Space lineH={10} />
        <View
          style={{
            flexDirection: 'row',

            width: `100%`,
          }}>
          {[1, 2, 3, 4].map((value, index) => {
            return (
              <>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderColor: Color.brand.gryLight,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {index < 3 ? (
                    <Image
                      style={{height: 48, width: 35}}
                      source={require('../../assets/image/elektroburste.png')}
                    />
                  ) : (
                    <Text style={{fontSize: 14, color: Color.brand.black}}>
                      {'+3'}
                    </Text>
                  )}
                </View>
                <Space lineW={5} />
              </>
            );
          })}
        </View>
        <Space lineH={15} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: `100%`,
          }}>
          <View
            style={{
              width: 162,
              height: 40,
              borderColor: Color.brand.border,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: Color.brand.textGrey, fontSize: 14}}>
              {'View detail'}
            </Text>
          </View>
          <View
            style={{
              width: 165,
              height: 40,
              borderColor: Color.brand.colorButton,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: Color.brand.colorButton, fontSize: 14}}>
              {'Pay now'}
            </Text>
          </View>
        </View>
        <Space lineH={30} />
      </>
    );
  }
  const ViewEmpty = styled(View)`
  width:100%;
  height:100;
  border:3px dashed  #f00;
  border-color:${Color.brand.blue}
  justify-content:center;
  align-items:center;

  `;
  const TextEmpty = styled(Text)`
    color: ${Color.brand.black};
    font-size: 16;
  `;
  return (
    <>
      <View style={{width: widthFull}}>
        <SearchView
          placeholder="Search On Cleaning"
          searchIcon={() => <Icon color={'gry'} size={30} name="search1" />}
          onChangeText={(e: any) => updateSearch(e)}
          value={search}
        />
        <Space lineH={15} />
        <Padding>
          {orderSaleWhiting.map(() => {
            return RenderListItem();
          })}
          {orderSaleWhiting.length==0?
          <>
            <ViewEmpty>
            <TextEmpty>{'There is no whiting order!'}</TextEmpty>
          </ViewEmpty>
          <RelatedProductItem navigation={navigation}/>
          </>
          :null
          }
        </Padding>
      </View>
    </>
  );
}
