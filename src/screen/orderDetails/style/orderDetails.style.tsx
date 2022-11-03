import { Color } from "../../../infrastructuer/theme/colors.style";
import {Image,Text,  TouchableOpacity,  View} from 'react-native';
import styled from 'styled-components';

export const ViewRow = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const TextGray = styled(Text)`
  color: ${Color.brand.textGrey};
  font-size: 14;
`;
export const TextBlack = styled(Text)`
  color: ${Color.brand.black};
  font-size: 14;
`;
export const TextRed = styled(Text)`
  color: red;
  font-size: 14;
`;
export const TextGreen = styled(Text)`
  color: ${Color.brand.green};
  font-size: 14;
`;
export const TextBlue = styled(Text)`
  color: ${Color.brand.blue};
  font-size: 14;
`;
export const BoxValidBold = styled(View)`
  width:45;
  height:45;
  borderRadius:12;
 border-width:1;
 border-color:${Color.brand.green}
 background-color:${Color.brand.green};
 align-items:center;
 justify-content:center;
`;
export const BoxValid = styled(View)`
   width:35;
   height:35;
   borderRadius:12;
  border-width:1;
  border-color:${Color.brand.green}
  background-color:${Color.brand.white};
  align-items:center;
  justify-content:center;
`;
export const LineValid = styled(View)`
  width: 35;
  height: 1;
  borderradius: 5;
  border-top-width: 2;
  border-color: ${Color.brand.green};
`;
export const LineNotValid = styled(View)`
  width: 35;
  height: 1;
  borderradius: 5;
  border-top-width: 2;
  border-color: ${Color.brand.gryLight};
`;
export const Center = styled(View)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const BoxNotValid = styled(View)`
  width: 35;
  height: 35;
  border-radius: 12;
  border-width: 1;
  border-color: ${Color.brand.c4};
  background-color: ${Color.brand.gryLight};
  align-items: center;
  justify-content: center;
`;
export const ImageValid = styled(Image)`
  width: 15;
  height: 15;
  tint-color: ${Color.brand.green};
`;
export const ImageValidBold = styled(Image)`
  width: 20;
  height: 20;
  tint-color: ${Color.brand.white};
`;
export const ImageNotValid = styled(Image)`
  width: 15;
  height: 15;
  tint-color: ${Color.brand.c4};
`;
export const TextPore = styled(Text)`
  color: ${Color.brand.colorButton};
  font-size: 15;
  text-align: center;

`;
export const TextBlackCenter = styled(Text)`
  color: ${Color.brand.black};
  font-size: 15;
  text-align: center;
 
`;
export const ViewRowItem = styled(View)`
    width: 100%;
    flex-direction: row;
  `;
  export const ImageItemShop = styled(Image)`
    width: 110;
    height: 90;
  `;
  export const ButtonGrayItem = styled(View)`
    width: 48%;
    height: 40;
    border-width: 1;
    border-radius: 8;
    border-color: ${Color.brand.border};
    align-items: center;
    justify-content: center;
  `;
  export const ButtonPoreItem = styled(TouchableOpacity)`
    width: 48%;
    height: 40;
    border-width: 1;
    border-radius: 8;
    border-color: ${Color.brand.colorButton};
    align-items: center;
    justify-content: center;
  `;