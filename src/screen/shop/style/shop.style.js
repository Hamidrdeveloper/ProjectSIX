import {Pressable, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Dimensions, Image, ImageBackground, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {color} from 'react-native-elements/dist/helpers';
import styled from 'styled-components';
import {Color} from '../../../infrastructuer/theme/colors.style';
import {Heart} from 'react-native-iconly';
import { BackgroundImage } from 'react-native-elements/dist/config';

const width = Dimensions.get('screen').width;

export const Brand = styled(ImageBackground).attrs(() => ({
  imageStyle: {borderRadius: 15},
}))`
  height: 200;
  width: ${width - 40};
  border-radius: 15;
  margin-left: 20;
  margin-right: 20;
`;
export const ViewAdvertisement = styled(View).attrs(() => ({}))`
  height: 200;
  width: ${width - 40};
  border-radius: 15;
  margin-left: 20;
  margin-right: 20;
`;

export const CategoryBrand = styled(ImageBackground).attrs(() => ({
  imageStyle: {borderRadius: 60},
}))`
  height: 60px;
  width: 60px;
  border-radius: 60
  margin-left: 20;
  margin-right: 20;
  align-items: center;
  justify-content: center;
`;
export const CategoryImageBrand = styled(Image).attrs(() => ({
  resizeMode: 'contain',
}))`
  height: 35px;
  width: 35px;
`;
export const ButtonCategory = styled(Pressable).attrs(() => ({}))``;

export const CategoryTextBrand = styled(Text).attrs(() => ({}))`
  
  width:110;
  color:${Color.brand.black}
  text-align:center;
`;
export const TitleStep = styled(Text).attrs(() => ({}))`
  
  width:100%;
  font-size:23;
  color:${Color.brand.black}
  text-align:left;
  padding-left:15;
`;
export const TitleMore = styled(Text).attrs(() => ({}))`
  
  width:100%;
  font-size:20;
  color:${Color.brand.colorButton}
  text-align:center;
  padding-left:15;
`;
export const FullImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
export const Background = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${Color.brand.white};
`;
export const SearchView = styled(SearchBar).attrs(() => ({
  containerStyle: {
    backgroundColor: Color.brand.white,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    height: 60,
  },
  inputContainerStyle: {
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    fontSize: 15,
    height: 50,
  },
  inputStyle: {
    fontSize: 15,
    right: 15,
  },
}))`
  
  width:100%;
  height: 60;
  font-size:18;
  color:${Color.brand.black}
  text-align:left;
  
`;
export const ImageOffer = styled(Image).attrs(() => ({
  resizeMode: 'contain'
}))`
  width: 100%;
  height: 110;
`;
export const ImageAdvertisementShadow = styled(Image).attrs(() => ({
  resizeMode: 'cover',
}))`
  width: 130%;
  height: 100%;
  position: absolute;
`;
export const ImageAdvertisement = styled(BackgroundImage).attrs(() => ({
  

}))`
  width: 100%;
  height: 100%;
`;
export const ImageSuggestCard = styled(ImageBackground).attrs(() => ({
 
}))`
  width: 100%;
  height: 100%;
  width: 150;
  height: 150;
  margin-right: 4;
  margin-left: 4;
  border-radius: 15;
  shadow-color: #000;
  padding-right: 10;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84;

  elevation: 5;
`;
export const ImageSuggest = styled(Image).attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 100%;
  height: 80;
`;
export const ImagePlus = styled(Image).attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 30;
  height: 30;
`;
export const ViewOffer = styled(View).attrs(() => ({}))`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ViewRowAdvertisement = styled(View).attrs(() => ({}))`

  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ViewSuggest = styled(View).attrs(() => ({}))`
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const TextReviewSuggest = styled(Text).attrs(() => ({
  numberOfLines: 5,
}))`
  font-size: 13;
  width: 70;
  text-align:center;

  color: ${Color.brand.white};
`;
export const TextReviewProducts = styled(Text).attrs(() => ({
  numberOfLines: 2,
}))`
  font-size: 13;
  width: 90%;
  color: ${Color.brand.black};
`;
export const TextReviewStock = styled(Text).attrs(() => ({
  numberOfLines: 2,
}))`
  font-size: 12;
  color: red;
`;
export const TextReviewOffer = styled(Text).attrs(() => ({}))`
  font-size: 12;
`;
export const TextReviewAdvertisement = styled(Text).attrs(() => ({}))`
  font-size: 17;
  width: 45%;
  color: ${Color.brand.white};
`;
export const TextProductOffer = styled(Text).attrs(() => ({}))`
  font-size: 17;
  color: ${Color.brand.black};
`;
export const TextPriceThroughOffer = styled(Text).attrs(() => ({}))`
  font-size: 15px;
  color: ${Color.brand.colorButton};
  text-decoration-line: line-through;
  text-decoration-style: solid;
`;
export const TextPriceOffer = styled(Text).attrs(() => ({}))`
  font-size: 16;
  color: ${Color.brand.black};
`;
export const TextPriceUnitOffer = styled(Text).attrs(() => ({}))`
  font-size: 13;
  color: ${Color.brand.textGrey};
`;
export const ButtonAddTo = styled(Pressable).attrs(() => ({}))`
  border-width: 1;
  border-color: ${Color.brand.colorButton};
  border-radius: 10px;
  width: 160;
  height: 36px;
  align-items: center;
  align-self: center;
  justify-content: center;
  position: absolute;
  bottom: -15;
`;
export const ButtonCategoryAddTo = styled(TouchableOpacity).attrs(() => ({}))`
  border-width: 1;
  border-color: ${Color.brand.colorButton};
  border-radius: 10px;
  width: 144;
  left:5;
  height: 36px;
  align-items: center;
  align-self: center;
  justify-content: center;
  position: absolute;
  bottom: 8;
`;
export const RowCenter = styled(View).attrs(() => ({
  style: {flexDirection: 'row', alignItems: 'center'},
}))``;
export const TextContact = styled(Text).attrs(() => ({}))``;
export const Scroll = styled(ScrollView).attrs(() => ({}))``;

export const Touchable = styled(TouchableOpacity).attrs(() => ({}))``;
export const LabelButton = styled(Text).attrs(() => ({}))`
  font-size: 14;
  color: ${Color.brand.colorButton};
`;
export const ViewWhyCleafin = styled(View).attrs(() => ({}))`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
export const ViewItemWhy = styled(TouchableOpacity).attrs(() => ({}))`
  align-items: center;
`;
export const ButtonHeart = styled(Heart).attrs(({type}) => ({
  size: 'medium',
  primaryColor: Color.brand.colorButton,

  stroke: 'bold',
}))`
  position: absolute;
  top: 20px;
  right: 20px;
`;
export const ViewProducts = styled(View).attrs(() => ({}))`
  width: 250;
  height: 120;
  padding: 0;
  padding-right: 10;
  background-color: ${Color.brand.white};
  border-width: 1;
  border-color: ${Color.brand.grey};
`;
export const CardSuggest = styled(View).attrs(() => ({}))`
  width: 150;
  height: 150;
  margin-right: 4;
  margin-left: 4;
  
`;
export const ViewCenter = styled(View).attrs(() => ({}))`
  height: 100%;
  width: 100%;
  justify-content: center;
`;
export const ImageWhy = styled(Image).attrs(() => ({}))`
  width: 50;
  height: 50;
`;
