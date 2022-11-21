import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';

function BottomSheet({visible = true, ReRender, onBack}: propTypes) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(visible);
    return;
  }, [visible]);
  return (
    <>
      <Modal
        visible={show}
        transparent={true}
        onRequestClose={() => {
          setShow(false);
          onBack();
        }}>
        <View style={styles.shadowView}>
          <View style={styles.bottomView}>
            <ReRender />
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  shadowView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bottomView: {
    height: 120,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Color.brand.white,
    borderRadius: 10,
  },
});
interface propTypes {
  title?: String;
  type?: String;
  details?: String;
  visible: boolean;
  ReRender: undefined;
  onBack: () => void;
}

export default BottomSheet;
