import styled from 'styled-components';
import {Image, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {Color} from '../../../infrastructuer/theme/colors.style';
export const ViewCenter = styled.View`
  align-items: center;
  height: 100%;
  padding-top: 15px;
  padding-bottom: 30%;
  padding-left:25;
  padding-right:25;
  justify-content: space-between;
`;
export const TopLogo = styled.Image`
  width: 120px;
  height: 70px;
`;
export const TextSmall = styled.Text`
  font-size: 17px;
  text-align: center;
  color: ${Color.brand.grey};
`;
export const CircleImage = styled.Image`
  width: 280px;
  height: 280px;
  border-radius: 300px;
`;
export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${Color.brand.black};
`;
export const Label = styled.Text`
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  width:100%;
  color: ${Color.brand.white};
  

`;
export const ButtonNext = styled(TouchableOpacity)`
  width: 80%;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${Color.brand.colorButton};
`;
