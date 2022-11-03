import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import { CircleImage, TextSmall, Title, TopLogo ,ViewCenter,ButtonNext,Label} from './itemWelcome.style';
import logo from '../../../assets/image/cleafin_logo.png';
import { Space } from '../../../infrastructuer/theme/space.style';



const ItemWelcomeComponent = ({circleImage,title,text,textButton,onButton}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log("text===>",circleImage);
  return (
    <ViewCenter>
     <TopLogo source={logo} resizeMode={"contain"}/>
     <Space lineW={0} lineH={25}/>
     <CircleImage  source={circleImage}/>
     <Space lineW={0} lineH={25}/>
     <Title>{title}</Title>
     <Space lineW={0} lineH={25}/>
     <TextSmall numberOfLines={2}>{text}</TextSmall>
     <Space lineW={0} lineH={35}/>
     <ButtonNext
      onPress={onButton}
     >
     <Label>{textButton}</Label>
     </ButtonNext>
    </ViewCenter>
  );
};

export {ItemWelcomeComponent};
