import React from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import CheckBox from '../../components/checkBox';
import HeaderScComponent from '../../components/header2';
import LineW from '../../components/lineW';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
const heightFull = Dimensions.get('screen').height;
export default function ReturnBackProduct({navigation}) {
  const TextBlack = styled(Text)`
    color: ${Color.brand.black};
    font-size: 14;
  `;
  const ViewRowCheck = styled(View)`
    flex-direction: row;
    width: 100%;
  `;
  const ViewItemRow = styled(View)`
    flex-direction: row;
    width: 100%;
    align-items: center;
  `;
  const ViewRow = styled(View)`
    flex-direction: row;
    width: 100%;
  `;
  const ImageItemShop = styled(Image)`
    width: 110;
    height: 90;
  `;
  const TextGray = styled(Text)`
    color: ${Color.brand.textGrey};
    font-size: 14;
  `;
  function renderItem() {
    return (
      <>
        <Space lineH={15} />
        <LineW />
        <Space lineH={15} />
        <ViewItemRow>
          <CheckBox isCheck={true} />
          <ImageItemShop source={require('../../assets/image/shoopo.png')} />
          <Space lineW={15} />
          <View>
            <Space lineH={10} />
            <TextBlack>{'Product name'}</TextBlack>
            <Space lineH={10} />
            <TextGray>{'Category:'}</TextGray>
            <Space lineH={10} />
            <ViewRow>
              <TextBlack>{'60,0 €'}</TextBlack>
              <Space lineW={40} />
              <TextGray>{'Number : 2'}</TextGray>
            </ViewRow>
          </View>
        </ViewItemRow>
      </>
    );
  }
  return (
    <>
      <BackgroundView>
        <HeaderScComponent
          navigation={navigation}
          details={''}
          isProduct={false}
          IsText={true}
          title={'Returning back item'}
        />
        <Padding>
          <ViewRowCheck>
            <CheckBox isCheck={true} />
            <Space lineW={15} />
            <TextBlack>{'Return The Entire Order'}</TextBlack>
          </ViewRowCheck>

          <View style={{height: heightFull - 220}}>
            <ScrollView>
              {[1, 2, 3, 4, 5, 6].map(() => {
                return renderItem();
              })}
            </ScrollView>
          </View>
        </Padding>

        <View
          style={{
            width: `100%`,
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 15,
          }}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("ReturnBackForm")}}>
          <View
            style={{
              height: 50,
              width: `100%`,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: Color.brand.colorButton,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                color: Color.brand.white,
              }}>
              {'Next'}
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      </BackgroundView>
    </>
  );
}
