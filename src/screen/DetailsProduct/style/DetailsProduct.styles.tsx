import {Dimensions, Image, Text, View} from 'react-native';
import styled from 'styled-components';
import {Color} from '../../../infrastructuer/theme/colors.style';
const widthFull = Dimensions.get('screen').width;

export const TitleStep = styled(Text).attrs(() => ({}))`
  
  width:100%;
  font-size:23;
  color:${Color.brand.black}
  text-align:left;

`;
export const TextBlack18 = styled(Text)`
  font-size: 18;
`;
export const ViewRate = styled(View).attrs(() => ({}))`
  flex-direction: row;
  align-items: center;
  z-index: 3; // works on ios
  elevation: 3;
`;
export const TextReviewOffer = styled(Text).attrs(() => ({}))`
  font-size: 12;
`;
export const TextNameComment = styled(Text).attrs(() => ({}))`
  color: ${Color.brand.black};
  font-size: 16;
`;
export const TextDetailComment = styled(Text).attrs(() => ({}))`
  color: ${Color.brand.grey};
  font-size: 15;
  width: ${widthFull - 30};
`;
export const ImageComment = styled(Image).attrs(() => ({}))`
  font-size: 12;
`;
export const CommentView = styled(View).attrs(() => ({}))`
  flex-direction: row;
  width: ${widthFull - 30};
  height: 80;
  align-items: center;
`;

export const IconRight = styled(Image).attrs(() => ({}))`
  width: 20;
  height: 20;
  position: absolute;
  right: 25;
`;

export const TextButtonComment = styled(Text).attrs(() => ({}))`
  color: ${Color.brand.black};
  font-size: 16;
`;
export const TextProduct = styled(Text).attrs(() => ({}))`
color: ${Color.brand.black};
font-size: 17;
width: ${widthFull-15};
`;

