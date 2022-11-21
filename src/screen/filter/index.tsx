import React, {useContext} from 'react';
import {useState} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {Card, Icon, Slider} from 'react-native-elements';
import {
  ArrowRight,
  CaretRight,
  ChevronRight,
  CloseSquare,
  IconlyProvider,
} from 'react-native-iconly';
import HeaderScComponent from '../../components/header2';
import RightButton from '../../components/rightButton';
import RightSwitch from '../../components/rightSwitch';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {ProductContext} from '../../service/Products/Product.context';

export default function FilterScreen({navigation}) {
  const [value, setValue] = useState(0);

  return (
    <BackgroundView>
      <HeaderScComponent
        navigation={navigation}
        title={'Price'}
        details={'Delete All filters'}
      />
      <Padding>
        <RightButton
          title={'Categories'}
          navigation={navigation}
          onPress={() => navigation.navigate('CategoriesFilter_SCREEN')}
        />
        <Space lineH={15} />
        <RightButton
          title={'Brand'}
          navigation={navigation}
       
        />
        <Space lineH={15} />

        <RightButton
          title={'Price'}
          navigation={navigation}
          onPress={() => navigation.navigate('PriceScreen')}
        />
        <Space lineH={15} />

        <RightButton
          title={'Rating'}
          navigation={navigation}
    
        />
        <Space lineH={15} />

        <RightSwitch title={'Just Available Products'} />
      </Padding>
      <Card
        containerStyle={{
          height: 70,
          width: '100%',
          position: 'absolute',
          bottom: 15,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: Color.brand.white,
        }}>
        <View
          style={{
            height: 50,
            width: '100%',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            borderColor: Color.brand.border,
            borderWidth: 1,
            backgroundColor: Color.brand.white,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: Color.brand.black,
            }}>
            {'View Products'}
          </Text>
        </View>
      </Card>
    </BackgroundView>
  );
}
