import React from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import ContentLoader from 'react-native-content-loader';
import {Rect} from 'react-native-svg';
import { IMAGE_ADDRESS } from '../../utils/adress.api';
const w = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

class ProgressiveImage extends React.Component {
  state = {
    isLoaded: true,
  };
  thumbnailAnimated = new Animated.Value(0);

  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1
    }).start(() => {
      this.setState({isLoaded: false});
    });
  };

  render() {
    const {thumbnailSource, source, style, ...props} = this.props;
    console.log('====================================');
    console.log('ContentLoader', source);
    console.log('====================================');
    return (
      <View style={styles.container}>
        {/* {this.state.isLoaded ? (
          <ContentLoader height={250} width={w} duration={1000}>
            <Rect x="0" y="13" rx="5" ry="5" width={w} height="250" />
          </ContentLoader>
        ) : null} */}
        <Animated.Image
          {...props}
          source={{uri: IMAGE_ADDRESS + source.uri}}
          style={[styles.imageOverlay, {opacity: 1}]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
