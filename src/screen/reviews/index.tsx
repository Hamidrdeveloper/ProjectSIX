import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Rating } from 'react-native-elements';
import HeaderScComponent from '../../components/header2';
import LineW from '../../components/lineW';
import { Color } from '../../infrastructuer/theme/colors.style';
import { Space } from '../../infrastructuer/theme/space.style';
import {
  Absolute,
  BackgroundView,
  HandleEvent,
  Padding,
} from '../../css/main.style';
import i18n from '../../core/i18n/config';
export default function MyReviewsScreen({navigation}) {
    function _renderItemReviews() {
        return (
          <View style={{width: `100%`, height: 150}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 80, height: 60}}
                source={require('../../assets/image/elektroburste.png')}
              />
               <Space lineH={15} />
               <View>
               <Text
                style={{
                  color: Color.brand.textGrey,
    
                  fontSize: 14,
                  width: `100%`,
                }}>
                {'Handschuh-Set Kiwigrün'}
              </Text>
              <Space lineH={15}/>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                 
                <Text style={{color:Color.brand.textGrey,  fontSize: 12,}}>{'Review Title'}</Text>
                <Space lineW={10} />
                <Rating
                   type="custom"
                   imageSize={10}
                   ratingBackgroundColor={Color.brand.border}
                   ratingCount={5}
                readonly
                startingValue={0}
                  
                />
                 
                </View></View>
            </View>
    
            <View>
              
              <Space lineH={10} />
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: Color.brand.textGrey, fontSize: 14, width: `100%`}}>
                  {`Super quick shipping! This worked pretty good. I hate cleaning the oven, but this made
 it much nicer !`}
                </Text>
               
              </View>
            </View>
            <Space lineH={15} />
           <LineW/>
           <Space lineH={15} />
           <TouchableOpacity >
            <Image
              style={{width: 26, height: 26,position:'absolute',right:15,top:0}}
              resizeMode="contain"
              source={require('../../assets/image/menu.png')}
            />
          </TouchableOpacity>
          </View>
        );
      }
  return (
    <BackgroundView>
      <ScrollView>
        <HeaderScComponent navigation={navigation} title={i18n.t("Global.Myreviews")} />
        <View
          style={{
            width: `100%`,
            height: `100%`,
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: Color.brand.white,
          }}>
               <Space lineH={15} />
          {/* {[1, 2, 3, 4, 5, 6].map(() => {
            return _renderItemReviews();
          })} */}
        </View>
      </ScrollView>
    </BackgroundView>
  )
}
