import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, Modal, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {CaretDown, ChevronDown, ChevronDownCircle} from 'react-native-iconly';
import styled from 'styled-components';
import {LoadingButton} from '../../components/buttonLoading';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {BasketContext} from '../../service/Basket/Basket.context';
import {widthFullScreen} from '../../utils/main';

const Card = styled(View)`
  width: 100%;
  height: 200;
  border-radius: 12;
  justify-content: center;
  background-color: ${Color.brand.white};
  padding: 20px;
  align-items: center;
`;

const ViewModal = styled(View)`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TextInputInform = styled(TextInput)`
  width: 100%;
  height: 50;
  border-width: 1;
  border-color: ${Color.brand.border};
  border-radius: 5;
  color: ${Color.brand.black};
  font-size: 18;
  background-color: ${Color.brand.f9};
`;
interface Type {
  onChange: (e) => void;
  visible: boolean;
}
export default function EnterCode({onChange, visible}: Type) {
  const [show, setShow] = useState(false);
  const [textCode, setTextCode] = useState('');
  const {couponsFn} = useContext(BasketContext);
  useEffect(() => {
    setShow(visible);
    return;
  }, [visible]);
  return (
    <>
      <Modal visible={show} transparent onRequestClose={() => setShow(false)}>
        <ViewModal>
          <Card>
            <TextInputInform
              onChangeText={e => {
                setTextCode(e);
              }}
            />
            <Space lineH={20} />
            <LoadingButton
              isActive={false}
              title={'Enter Code'}
              onNext={() => {
                couponsFn(textCode);
                setTimeout(() => {
                  setShow(false);
                  onChange(textCode);
                }, 2000);
              }}
              onClose={() => {}}
              styleMain={{backgroundColor: '#fff', width: '80%'}}
              width={widthFullScreen - 80}
            />
            <TouchableOpacity
              onPress={() => {
                setShow(false);
                onChange('');
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
                color={Color.brand.black}
              />
            </TouchableOpacity>
          </Card>
        </ViewModal>
      </Modal>
    </>
  );
}
