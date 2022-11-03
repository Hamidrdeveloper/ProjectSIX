import React, {useState} from 'react';
import {Dimensions, Image, Modal, TouchableOpacity, View} from 'react-native';
import ProgressiveImage from '../../components/progressiveImage';
import {IMAGE_ADDRESS} from '../../utils/adress.api';
import styled from 'styled-components';
import {ZoomableImage} from '../../components/zoomableImage/ZoomableImage';

const widthFull = Dimensions.get('screen').width;
const ViewFull = styled(View)`
  align-items: center;
  height: ${widthFull};
`;

export function ItemImage({file, onShowZoom}) {
  console.log('product-variations', file);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onShowZoom(IMAGE_ADDRESS + file);
        }}>
        <Image
          resizeMode="contain"
          style={{height: '80%', width: Dimensions.get('screen').width}}
          source={{uri: IMAGE_ADDRESS + file}}
        />
      </TouchableOpacity>
    </>
  );
}
