import {TextInput, View, Text} from 'react-native';
import styled from 'styled-components';
import {Color} from '../../../infrastructuer/theme/colors.style';

export const TextInputSign = styled(TextInput)`
  width: 100%;
  height: 50;
  border-width: 1;
  border-color: ${Color.brand.border};
  border-radius: 5;
  color: ${Color.brand.black};
  font-size: 18;
`;

export const ViewRowTextInput = styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: space-between;
`;
export const ViewButtonBottom = styled(View)`
  width: 100%;
  bottom: 25;
  align-self: center;
  justify-content: center;
`;
export const ViewRowTextPicker = styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: space-between;
  justify-content: space-between;
`;
export const ViewRowPart = styled(View).attrs(({height}) => ({
  style: {height: height},
}))``;
export const TitleInput = styled(Text)`
  color: ${Color.brand.black};
`;
export const BoldTitle = styled(Text)`
  font-size: 26;
  color: ${Color.brand.black};
`;
export const TitleWelcome = styled(Text)`
  font-size: 15;
  color: ${Color.brand.black};
`;
export const ViewIcon = styled(View)`
  width: 50;
  height: 50;
  position: absolute;
  right: 10;
  justify-content: center;
  align-items: center;
`;
