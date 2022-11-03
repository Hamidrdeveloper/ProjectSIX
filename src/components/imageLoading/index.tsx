import React from 'react';
import {Image} from 'react-native';
import { ImageOffer } from '../../screen/shop/style/shop.style';

export default function ImageLoading({src, def,Com,imageStyle}) {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <Com
        source={!loading ? src : def}
        // onLoadStart={() => setLoading(false)}
        imageStyle={imageStyle}
        onError={() => setLoading(true)}
      />
    </>
  );
}

