import React from 'react';
import {Image, Dimensions, StatusBar, StyleSheet} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
// Photo by Walling [https://unsplash.com/photos/XLqiL-rz4V8] on Unsplash [https://unsplash.com/]

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
});

export function ZoomableImage({images}) {
  return (
    <>
      
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={Dimensions.get('window').width - 30}
        imageHeight={Dimensions.get('window').height - 100}>
          
        <Image
          resizeMode="contain"
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          source={{
            uri: images,
          }}
        />
         <Image
          resizeMode="contain"
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
          }}
        />
         <Image
          resizeMode="contain"
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
          }}
        />
      </ImageZoom>
    </>
  );
}
