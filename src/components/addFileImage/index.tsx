import React, {useEffect} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
const includeExtra = true;
import {StyleSheet, Modal, View, ScrollView} from 'react-native';
import {DemoButton} from './components';
import {Color} from '../../infrastructuer/theme/colors.style';
export default function Picker({visible, onClick}) {
  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);
  useEffect(() => {
    if (response != null && response.assets != null) {
      console.log(response);
      onClick(response.assets[0]);
    }
  }, [response]);
  return (
    <>
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={() => onClick(response)}>
        <View style={styles.shadow}>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              {actions.map(({title, type, options}) => {
                return (
                  <DemoButton
                    key={title}
                    onPress={() => onButtonPress(type, options)}>
                    {title}
                  </DemoButton>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  shadow: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: Color.brand.white,
  },
  buttonContainer: {
    flexWrap: 'wrap',
    marginVertical: 8,
    height: 200,
  },

  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});
interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
    },
  },
];
