import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Plus } from 'react-native-iconly';
import styled from 'styled-components';
import CheckBox from '../../components/checkBox';
import HeaderScComponent from '../../components/header2';
import LineW from '../../components/lineW';
import Picker from '../../components/picker/components/Picker';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
const heightFull = Dimensions.get('screen').height;
export default function ReturnBackForm({navigation}) {
  const TextBlack = styled(Text)`
    color: ${Color.brand.black};
    font-size: 14;
  `;
  const TextInputStyle = styled(TextInput)`
    width: 100%;
    height: 50;
    background-color: ${Color.brand.f9};
    border-width: 1;
    border-color: ${Color.brand.border};
    border-radius: 5;
  `;
  const TextInputBox = styled(TextInput)`
    width: 100%;
    height: 115;
    background-color: ${Color.brand.f9};
    border-width: 1;
    border-color: ${Color.brand.border};
    border-radius: 5;
  `;
  const ViewItemRow = styled(View)`
    flex-direction: row;
    width: 100%;
    align-items: center;
  `;
  const ViewBoxImage = styled(View)`
    width:75;
    height:75;
    align-items:center;
    justify-content:center;
    border-radius:8;
    border-color:${Color.brand.blue};
    border-width:1;
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
  const TextRed= styled(Text)`
  color: red;
  font-size: 14;
`;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  function RenderItem() {
    return (
      <>
        <Space lineH={15} />
        <ViewItemRow>
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
          <RenderItem />
          <Space lineH={30} />
          <TextBlack>
          <TextRed>{'*'}</TextRed>
          <TextBlack>{'Number'}</TextBlack>
          </TextBlack>
          <Space lineH={10} />
          <TextInputStyle />
          <Space lineH={30} />
          <TextBlack>
          <TextRed>{'*'}</TextRed>
          <TextBlack>{'Reason'}</TextBlack>
          </TextBlack>
          <Space lineH={10} />
          <Picker
            containerStyle={{width: `100%`}}
            style={{
              borderColor: Color.brand.border,
              backgroundColor: Color.brand.f9,
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <Space lineH={30} />
          <TextBlack>
          <TextRed>{'*'}</TextRed>
          <TextBlack>{'Description'}</TextBlack>
          </TextBlack>
          <Space lineH={10} />
          <TextInputBox />
          <Space lineH={15} />
          <TextBlack>
          <TextRed>{'*'}</TextRed>
          <TextBlack>{'Send Photo'}</TextBlack>
          </TextBlack>
          <Space lineH={8} />
          <ViewBoxImage>
              <Plus size={'large'} primaryColor={Color.brand.blue}/>
          </ViewBoxImage>
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
              {'Submit'}
            </Text>
          </View>
        </View>
      </BackgroundView>
    </>
  );
}
