import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import HeaderScComponent from '../../components/header2';
import LineW from '../../components/lineW';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
const ViewRow = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const TextGray = styled(Text)`
  color: ${Color.brand.textGrey};
  font-size: 14;
`;
const TextBlack = styled(Text)`
  color: ${Color.brand.black};
  font-size: 14;
`;
const TextBlackStatus = styled(Text)`
  color: ${Color.brand.black};
  font-size: 12;
`;
const TextGreenStatus = styled(Text)`
  color: ${Color.brand.green};
  font-size: 12;
`;
const TextGrayStatus = styled(Text)`
  color: ${Color.brand.textGrey};
  font-size: 12;
`;
const TextBlue = styled(Text)`
  color: ${Color.brand.blue};
  font-size: 14;
`;
const BoxValidBold = styled(View)`
  width:35;
  height:35;
  borderRadius:12;
 border-width:1;
 border-color:${Color.brand.green}
 background-color:${Color.brand.green};
 align-items:center;
 justify-content:center;
`;
const BoxValid = styled(View)`
   width:35;
   height:35;
   borderRadius:12;
  border-width:1;
  border-color:${Color.brand.green}
  background-color:${Color.brand.white};
  align-items:center;
  justify-content:center;
`;
const LineValidShort = styled(View)`
  width: 1;
  height: 10;
  borderradius: 5;
  border-right-width: 2;
  border-color: ${Color.brand.green};
`;
const LineNotValidShort = styled(View)`
  width: 1;
  height: 10;
  borderradius: 5;
  border-right-width: 2;
  border-color: ${Color.brand.gryLight};
`;
const LineValid = styled(View)`
  width: 1;
  height: 50;
  borderradius: 5;
  border-right-width: 2;
  border-color: ${Color.brand.green};
`;
const LineNotValid = styled(View)`
  width: 1;
  height: 50;
  borderradius: 5;
  border-right-width: 2;
  border-color: ${Color.brand.gryLight};
`;
const CircleValid = styled(View)`
  width: 15;
  height: 15;
  border-radius: 15;
  border-width: 4.5;
  background-color: ${Color.brand.gryLight};
  border-color: ${Color.brand.green};
`;
const CircleNotValid = styled(View)`
  width: 15;
  height: 15;
  border-radius: 15;
  border-width: 4.5;
  border-color: ${Color.brand.gryLight};
`;
const Center = styled(View)`
  flex-direction: row;
`;
const CenterV = styled(View)`
  align-items: center;
  justify-content: center;
`;
const BoxNotValid = styled(View)`
  width: 35;
  height: 35;
  border-radius: 12;
  border-width: 1;
  border-color: ${Color.brand.c4};
  background-color: ${Color.brand.gryLight};
  align-items: center;
  justify-content: center;
`;
const ImageValid = styled(Image)`
  width: 15;
  height: 15;
  tint-color: ${Color.brand.green};
`;
const ImageValidBold = styled(Image)`
  width: 15;
  height: 15;
  tint-color: ${Color.brand.white};
`;
const ImageNotValid = styled(Image)`
  width: 15;
  height: 15;
  tint-color: ${Color.brand.c4};
`;

export default function TrackOrder({navigation}) {
  const [indexProcess, setIndexProcess] = useState(4);
  let arrayProcess = [
    {id: 1, image: require('../../assets/image/factororder.png')},
    {id: 2, image: require('../../assets/image/chatchorder.png')},
    {id: 3, image: require('../../assets/image/kargo.png')},
    {id: 4, image: require('../../assets/image/basketorder.png')},
    {id: 5, image: require('../../assets/image/barorder.png')},
    {id: 6, image: require('../../assets/image/carorder.png')},
  ];
  function Process() {
    return (
      <>
        <ViewRow>
          <TextBlack>{'Tracking'}</TextBlack>
          <TextBlue>{''}</TextBlue>
        </ViewRow>
        <Space lineH={20} />
        <View>
          {arrayProcess.map((value, index) => {
            return (
              <Center>
                <CenterV>
                  {indexProcess >= value.id ? (
                    <LineValidShort />
                  ) : (
                    <LineNotValidShort />
                  )}
                  {indexProcess >= value.id ? (
                    <CircleValid />
                  ) : (
                    <CircleNotValid />
                  )}

                  {indexProcess > value.id ? <LineValid /> : <LineNotValid />}
                </CenterV>
                <Space lineW={15} />
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
                <Space lineW={12} />
                {indexProcess >= value.id ? (
                  indexProcess != value.id ? (
                    <View>
                      <TextBlackStatus>{'Date compliteed'}</TextBlackStatus>
                      <TextBlackStatus>
                        {'on 20.02.2019 -10 : 00 AM'}
                      </TextBlackStatus>
                    </View>
                  ) : (
                    <View>
                      <TextGreenStatus>{'Date compliteed'}</TextGreenStatus>
                    </View>
                  )
                ) : (
                  <View>
                    <TextGrayStatus>{'Date compliteed'}</TextGrayStatus>
                    <TextGrayStatus>
                      {'on 20.02.2019 -10 : 00 AM'}
                    </TextGrayStatus>
                  </View>
                )}
              </Center>
            );
          })}
        </View>
      </>
    );
  }

  return (
    <BackgroundView>
      <ScrollView>
        <HeaderScComponent
          navigation={navigation}
          details={''}
          isProduct={false}
          IsText={true}
          title={'Order Detail'}
        />
        <Padding>
          <ViewRow>
            <TextGray>{'Order No. : '}</TextGray>
            <TextBlack>{'# 325-254-7446'}</TextBlack>
          </ViewRow>
          <Space lineH={10} />
          <ViewRow>
            <TextGray>{'Order date. :'}</TextGray>
            <TextBlack>{'2022/02/15'}</TextBlack>
          </ViewRow>
          <Space lineH={40} />
          <Process />
          <Space lineH={20} />
          <ViewRow>
            <TextGray>{'Transferee :'}</TextGray>
            <TextBlack>{'John Smith'}</TextBlack>
          </ViewRow>
          <Space lineH={10} />
          <ViewRow>
            <TextGray>{'Mobile : '}</TextGray>
            <TextBlack>{'0419876543'}</TextBlack>
          </ViewRow>
          <Space lineH={10} />
          <View>
            <TextGray>{'Delivery address: '}</TextGray>
            <TextBlack numberOfLines={2}>{`Mr A. Payne ARAMARK Ltd. 30 Commercial Road 
Fratton PORTSMOUTH Hampshire PO1 1AA 
UNITED KINGDOM`}</TextBlack>
          </View>
          <Space lineH={10} />
          <View>
            <TextGray>{'Invoice address: '}</TextGray>
            <TextBlack numberOfLines={2}>{`Mr A. Payne ARAMARK Ltd. 30 Commercial Road 
Fratton PORTSMOUTH Hampshire PO1 1AA 
UNITED KINGDOM`}</TextBlack>
          </View>
          <Space lineH={15} />
         
        </Padding>
      </ScrollView>
    </BackgroundView>
  );
}
