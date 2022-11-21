import React, {useContext, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {TabView} from 'react-native-elements';
import {Tab} from 'react-native-elements/dist/tab/Tab';
import FlatListSlide from '../../components/slideList';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {CommentContext} from '../../service/Comment/Comment.context';
import {TextReviewOffer} from '../shop/style/shop.style';
import {
  CommentView,
  IconRight,
  ImageComment,
  TextButtonComment,
  TextDetailComment,
  TextNameComment,
  TextProduct,
} from './style/DetailsProduct.styles';
import styled from 'styled-components';
import {regexHtml} from '../../utils/main';
import CommentModal from './comment';

const TextReViewPlus = styled(TextReviewOffer)`
  font-size: 16;
`;

const Imag25 = styled(Image)`
  width: 25;
  height: 25;
`;

const ViewCenterRow = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  height:60;
`;

export function TabShop({product}) {
  const {listComment} = useContext(CommentContext);

  function CommentReview() {
    return (
      <View>
        <CommentView>
          <ImageComment
            resizeMode="stretch"
            source={require('../../assets/image/ellipse.png')}
          />
          <TextNameComment>{'HamidReza Alizadeh'}</TextNameComment>
        </CommentView>
        <TextDetailComment>{`Super quick shipping! This worked pretty good. I hate cleaning the oven, but this made
     it much nicer having a pleasant smell and being able to breathe while doing it!
    Was a little messy and definitely had to put in some elbow grease, but the end result is nice!`}</TextDetailComment>
      </View>
    );
  }
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [index, setIndex] = useState(0);
  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: Color.brand.blue,
          height: 3,
        }}>
        <Tab.Item
          title="Description"
          titleStyle={{
            fontSize: 12,
            color: index == 0 ? Color.brand.blue : Color.brand.grey,
          }}
          containerStyle={{backgroundColor: '#fff'}}
        />
        <Tab.Item
          title="Review"
          titleStyle={{
            fontSize: 12,
            color: index == 1 ? Color.brand.blue : Color.brand.grey,
          }}
          containerStyle={{backgroundColor: '#fff'}}
        />
        <Tab.Item
          title="Attitude"
          titleStyle={{
            fontSize: 12,
            color: index == 2 ? Color.brand.blue : Color.brand.grey,
          }}
          containerStyle={{backgroundColor: '#fff'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <View>
            {product?.productVariationMlmDetails?.map(x => {
              return (
                <>
                  <Space lineH={8} />
                  <TextProduct
                    style={{color: Color.brand.blue, fontWeight: 'bold'}}>
                    <TextProduct
                      style={{color: Color.brand.blue, fontWeight: 'bold'}}>
                      {x?.percentage_of_provision + '% of Provision Price.\n'}
                    </TextProduct>
                    <TextProduct
                      style={{color: Color.brand.blue, fontWeight: 'bold'}}>
                      {'€' + x?.provision_price + ' Provision Price.\n'}
                    </TextProduct>
                    <TextProduct
                      style={{color: Color.brand.blue, fontWeight: 'bold'}}>
                      {x?.qv + ' Points.'}
                    </TextProduct>
                  </TextProduct>
                </>
              );
            })}

            <TextProduct>
              {product?.description?.replace(regexHtml, '')}
            </TextProduct>
          </View>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <View>
            <FlatListSlide
              data={listComment}
              renderItem={CommentReview}
              snap={5}
              height={listComment.length > 0 ? 250 : 10}
            />
            <TextReViewPlus>
              {`View all ${listComment.length} Reviews`}
            </TextReViewPlus>
            <Space lineH={25} />
            <ViewCenterRow
              onPress={() => {
                setOpen(true);
              }}>
              <Imag25
                source={require('../../assets/image/Iconly-Light-Chat.png')}
              />
              <Space lineW={15} />
              <TextButtonComment>
                {'Write your review about this product'}
              </TextButtonComment>
              <IconRight
              onPress={() => {
                setOpen(true);
              }}
                resizeMode="contain"
                source={require('../../assets/image/iconly_right.png')}
              />
            </ViewCenterRow>
          </View>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Text>{product?.technical_data?.replace(regexHtml, '')}</Text>
        </TabView.Item>
      </TabView>
      <CommentModal
        show={open}
        onChange={() => {
          setOpen(false);
        }}
        id={product?.id}
      />
    </>
  );
}
