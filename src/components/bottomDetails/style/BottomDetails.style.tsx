import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import {Color} from '../../../infrastructuer/theme/colors.style';

export const ViewBottomDetails = styled(View).attrs(() => ({}))`
  shadow-color: '#000';
  shadow-offset: {
    width: 0;
    height: 5;
  }
  shadow-opacity: 0.36;
  shadow-radius: 6.68;
  elevation: 11;
  width: 100%;
  height: 110;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  padding-left: 15;
  padding-right: 15;
  background-color: ${Color.brand.white};
`;
export const ViewBasket = styled(View).attrs(() => ({}))`
  background-color: ${Color.brand.colorButton};
  width: 150;
  height: 55;
  border-radius: 10;
  align-items: center;
  justify-content: center;
`;
export const TextItem = styled(Text).attrs(() => ({}))`
  color: ${Color.brand.black};
  font-size: 20;
`;
export const ViewOffer = styled(View).attrs(() => ({}))`
  background-color: ${Color.brand.red};
  width: 50;
  height: 30;
  border-bottom-right-radius: 10;
  border-top-right-radius: 10;
  border-top-left-radius: 10;
  align-items: center;
  justify-content: center;
`;
export const ViewDataOffer = styled(View).attrs(() => ({}))`
  flex-direction:row;
  position:absolute;
  right:15;
`;

export const TextItemOffer = styled(Text).attrs(() => ({}))`
  color: ${Color.brand.grey};
  font-size: 15;
  text-decoration-line: line-through;

`;
