import {Pressable, View, TextInput, Platform} from 'react-native';
import styled from 'styled-components';
import {Color} from '../infrastructuer/theme/colors.style';

export const BackgroundView = styled(View).attrs(() => ({
  paddingTop: Platform.OS === 'ios' ? 38 : 0,
  width: '100%',
  height: '100%',
  backgroundColor: Color.brand.white,
}))``;
export const BackgroundForm = styled(View).attrs(
  ({height = 320}: {height: number}) => ({
    width: '100%',
    height: height,
    backgroundColor: Color.brand.white,
  }),
)``;
export const Padding = styled(View).attrs(() => ({
  width: '100%',
  height: '100%',
  backgroundColor: Color.brand.white,
  padding: 15,
}))``;
export const HandleEvent = styled(Pressable).attrs(() => ({}))``;
export const Absolute = styled(View).attrs(({right, left, top, bottom}) => ({
  style: {
    left: left,
    top: top,
    bottom: bottom,
    right: right,
  },
}))`
  position: absolute;
`;
export const TextInputInform = styled(TextInput)`
  width: 100%;
  height: 50;
  border-width: 1;
  border-color: ${Color.brand.border};
  border-radius: 5;
  color: ${Color.brand.black};
  font-size: 18;
  background-color: ${Color.brand.f9};
`;
export const ViewRowBetween = styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: space-between;
  justify-content: space-between;
`;
export const ButtonColor = styled(Pressable).attrs(
  ({zIndex = 0}: {zIndex: number}) => ({
    zIndex: zIndex,
  }),
)`
  height: 50;
  width: 100%;
  border-radius: 10;
  align-self: center;
  justify-content: center;
  background-color: ${Color.brand.colorButton};
`;
export const ShadowButton = styled(View).attrs(
  ({zIndex = 0}: {zIndex: number}) => ({
    zIndex: zIndex,
  }),
)`
  height: 50;
  width: 100%;
  background-color: rgba(209, 209, 209, 0.5);
  position: absolute;
  border-radius: 10;
`;
