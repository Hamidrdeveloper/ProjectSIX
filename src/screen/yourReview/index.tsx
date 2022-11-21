import React from 'react';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Card, Icon, Slider, Rating} from 'react-native-elements';
import {
  ArrowRight,
  CaretRight,
  ChevronRight,
  CloseSquare,
  IconlyProvider,
} from 'react-native-iconly';
import HeaderScComponent from '../../components/header2';
// import StarRating from '../../components/rating/starRating';
import RightButton from '../../components/rightButton';
import RightSwitch from '../../components/rightSwitch';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function YourReviewScreen({navigation}) {
  const [value, setValue] = useState(false);
  const [Rvalue, setRValue] = useState(0);
  function radioClick() {
    setValue(!value);
  }
  return (
    <BackgroundView>
      <HeaderScComponent
        navigation={navigation}
        title={'Your Review'}
        details={''}
        isProduct={true}
      />
      <Padding>
        <Slider
          value={Rvalue}
          onValueChange={setRValue}
          maximumValue={10}
          minimumValue={0}
          step={1}
          allowTouchTrack
          maximumTrackTintColor={'#BBE2FE'}
          minimumTrackTintColor={Color.brand.blue}
          trackStyle={{height: 5, backgroundColor: '#000'}}
          thumbStyle={{height: 20, width: 20, backgroundColor:Color.brand.red}}
          thumbProps={{
            children: (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 4,
                  backgroundColor: Color.brand.white,
                  borderColor: Color.brand.blue,
                  borderRadius: 30,
                }}
              />
            ),
          }}
        />
        {/* <StarRating
          disabled={false}
          maxStars={5}
          starSize={20}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          fullStarColor={'yellow'}
          rating={2.5}
        /> */}
         <Space lineH={30} />
        <Text style={{color: Color.brand.textGrey, fontSize: 16}}>
          {'Review'}
        </Text>
        <Space lineH={20} />
        <Text style={{color: Color.brand.textGrey, fontSize: 16}}>
          {'Review Title'}
        </Text>
        <Space lineH={10} />

        <TextInput
          style={{
            backgroundColor: Color.brand.fc,
            height: 50,
            width: `100%`,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: Color.brand.b4,
          }}
        />
         <Space lineH={20} />
        <Text style={{color: Color.brand.textGrey, fontSize: 16}}>
          <Text style={{color: Color.brand.textGrey, fontSize: 16}}>
          {'Review Text'}
        </Text>
          <Text style={{color:Color.brand.red, fontSize: 16}}>
          {'*'}
        </Text>
        </Text>
        <Space lineH={10} />
        <TextInput
          style={{
            backgroundColor: Color.brand.fc,
            height: 125,
            width: `100%`,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: Color.brand.b4,
          }}
        />
          
          <Space lineH={20} />
          <TouchableOpacity
            onPress={()=>radioClick()}>
               <View style={{flexDirection:'row',width:`100%`}}>
                 {value?
               <View
            style={{
              borderColor: Color.brand.border,
              borderWidth: 1,
              width: 24,
              height: 24,
              borderRadius: 6,
              alignItems:'center',
              justifyContent:'center'
            }}>
              <View style={{
              backgroundColor: Color.brand.blue,
              width: 19,
              height: 19,
              borderRadius: 4,
              alignItems:'center',
              justifyContent:'center'
            }}>
              <AntDesign name="check" color={Color.brand.white}size={20} />
              </View>
            
          </View>
         :  <View
         style={{
           borderColor: Color.brand.border,
           borderWidth: 1,
           width: 24,
           height: 24,
           borderRadius:6,
           alignItems:'center',
           justifyContent:'center'
         }}
         /> }
               <Space lineW={15}/>
               <Text style={{color:Color.brand.black}}>{"Post review anonymously"}</Text>
         
               </View>
          </TouchableOpacity>
          <Space lineH={50} />
          <View
            style={{
              height: 50,
              width: `100%`,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              borderColor: Color.brand.colorButton,
              borderWidth:1,
              backgroundColor: Color.brand.white,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                color: Color.brand.colorButton,
              }}>
              {'Submit a review'}
            </Text>
          </View>
      </Padding>
     
    </BackgroundView>
  );
}
