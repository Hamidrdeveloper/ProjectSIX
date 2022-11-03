import {Image, Text} from 'react-native';
import {View} from 'react-native';
import styled from 'styled-components';
import {Color} from '../../../infrastructuer/theme/colors.style';
export const ViewPlus = styled(View).attrs(props => ({
  flexDirection: 'row',
  alignItems: 'center',
  width: 110,
}))``;
export const ItemBasket = styled(View).attrs(props => ({
  width: `100%`,
  height: 200,
  flexDirection: 'row',
}))``;
export const Delete = styled(Image).attrs(props => ({
  resizeMode: 'stretch',
}))`
  bottom: 10;
  width: 20;
  height: 20;
`;
export const Plus = styled(Image).attrs(props => ({
  resizeMode: 'stretch',
}))`
  bottom: 10;
  width: 20;
  height: 20;
`;
export const NumberPlus = styled(Text).attrs(props => ({}))`
  font-size: 20;
  top: 5;
  color: ${Color.brand.black};
  text-align-vertical: center;
  height: 100%;
  
`;
export const TextDetailBasketBlack = styled(Text).attrs(props => ({}))`
  font-size: 18;
  color: ${Color.brand.black};
  width: 100%;
`;
export const TextDetailBasket = styled(Text).attrs(props => ({}))`
  font-size: 18;
  color: ${Color.brand.textGrey};
  width: 100%;
`;
export const TextPriceBasketAbsolute = styled(Text).attrs(props => ({}))`
  font-size: 23;
  color: ${Color.brand.black};
  right: 15;
`;
export const TextPriceBasket = styled(Text).attrs(props => ({}))`
  font-size: 23;
  width: 100%;
  color: ${Color.brand.black};
`;
