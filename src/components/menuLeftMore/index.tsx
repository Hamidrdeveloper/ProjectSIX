import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ChevronDownCircle, Send} from 'react-native-iconly';
import {Color} from '../../infrastructuer/theme/colors.style';
import {BasketContext} from '../../service/Basket/Basket.context';
import {LoadingButton} from '../buttonLoading';
import DropdownAlert from 'react-native-dropdownalert';

import Picker from '../picker/components/Picker';
export default function MenuLeftMore() {
  const [openPartner, setOpenPartner] = React.useState(false);
  const [partner, setPartner] = React.useState('');
  const {userLevelFn, userLevel, bulkAddSendPartner} =
    React.useContext(BasketContext);
  const [showSend, setShowSend] = React.useState(false);
  let dropDownAlertRef = React.useRef();

  React.useEffect(() => {
    userLevelFn();
  }, []);
  const onSend = () => {
    bulkAddSendPartner(partner).then(rs => {
      if (rs) {
        dropDownAlertRef.alertWithType(
          'success',
          'Basket was sent successfully.',
        );
      } else {
        dropDownAlertRef.alertWithType(
          'error',
          'The basket could not be sent.',
        );
      }
      setShowSend(!rs);
    });
  };
  const ModalSendCart = () => {
    return (
      <Modal
        transparent
        visible={showSend}
        onRequestClose={() => setShowSend(false)}>
        <View
          style={{
            width: `100%`,
            height: `100%`,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: Color.brand.white,
              width: `80%`,
              height: 200,
              borderRadius: 15,
              elevation: 8,
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: 15,
            }}>
            <Picker
              containerStyle={{width: '80%'}}
              style={{
                borderColor: Color.brand.border,
                backgroundColor: Color.brand.f9,
              }}
              placeholderStyle={{fontSize: 18}}
              placeholder={'Your Partner'}
              open={openPartner}
              zIndex={10}
              value={partner}
              dropDownDirection="TOP"
              items={userLevel}
              setOpen={setOpenPartner}
              setValue={setPartner}
            />
            <LoadingButton
              isActive={false}
              width={Dimensions.get('window').width - 200}
              onNext={() => onSend()}
              title={'Send'}
              onClose={() => {}}
            />
            <TouchableOpacity
              onPress={() => {
                setShowSend(false);
                // onChange('');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 5,
                width: 30,
                height: 30,
                position: 'absolute',
                top: -15,
                right: 0,
                backgroundColor: '#fff',
                borderRadius: 30,
              }}>
              <ChevronDownCircle
                set="broken"
                size={'medium'}
                primaryColor={Color.brand.black}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <>
      {/* <Modal transparent visible={true}> */}
      <View
        style={{
          width: `100%`,
          alignItems: 'flex-end',
          top: 90,
          position: 'absolute',
        }}>
        <View
          style={{
            width: `40%`,
            borderRadius: 8,

            height: 30,
            right:8,
            backgroundColor: Color.brand.white,
           
          }}>
          <TouchableOpacity
            onPress={() => {
              setShowSend(true);
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 5,
            }}>
            <Text style={{fontSize: 18, color: Color.brand.blue}}>
              {'Share Cart'}
            </Text>
            <Send set="light" primaryColor={Color.brand.blue} />
          </TouchableOpacity>
        </View>
        <ModalSendCart />
        <DropdownAlert
          titleNumOfLines={3}
          renderImage={props => {
            return (
              <Image
              resizeMode='center'
                style={{width: 50, height: 30,tintColor:Color.brand.white}}
                source={require('../../assets/image/cleafin_logo.png')}
              />
            );
          }}
          ref={ref => {
            if (ref) {
              dropDownAlertRef = ref;
            }
          }}
        />
      </View>

      {/* </Modal> */}
    </>
  );
}
