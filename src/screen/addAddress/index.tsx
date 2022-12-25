/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {BackgroundView, Padding} from '../../css/main.style';
import HeaderScComponent from '../../components/header2';
import {TextInputSign} from '../signUp/style/signUp.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {Text, ScrollView, Button, View, Platform, Modal, Image} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  useController,
} from 'react-hook-form';
import {ContactGroupsContext} from '../../service/Address/types';
import {ControlledInput, ControlledInputPhone} from '../../components/textInputController';
import {AddressContext} from '../../service/Address/Address.context';
import {useContext} from 'react';
import {TOKEN} from '../../utils/main';
import DropdownAlert from 'react-native-dropdownalert';
import CheckBox from '../../components/checkBox';
import LineW from '../../components/lineW';
import {LoadingButton} from '../../components/buttonLoading';
import ControlledCheckBox from '../../components/controlledCheckBox';
import styled from 'styled-components';
import PickerController from '../../components/pickerController';
import {AuthContext} from '../../service/Auth/Auth.context';

const ViewLoading = styled(View)`
  height: 50;
  margin-top: 15;
  width: 100%;
`;
type FormValues = {
  first_name: string;
  last_name: string;
  name: string;
  company_name: string;
  phone: string;
  cart_title: string;
};
export default function AddAddressScreen({navigation}) {
  const {...methods} = useForm();
  const {addAddressFn, isAddToData, isAddToDataLodging, getAddressSelect} =
    useContext(AddressContext);
  const {countries} = useContext(AuthContext);

  let dropDownAlertRef = useRef();

  const [formError, setError] = useState<Boolean>(false);

  function onSubmit(data: FormValues) {
    const finalData: ContactGroupsContext = {
      country_id: 83,
      first_name: data.first_name + '',
      last_name: data.last_name + '',
      company_name: data.company_name + '',
      translate: {
        de: {
          locale: 'de',
          title: data.cart_title,
        },
      },
      addresses: [
        {
          ...data,
          country: undefined,
          latitude: 51.5285582,
          longitude: -0.2416815,
        },
      ],
      phones:
        data.phone || data.phone !== ''
          ? [
              {
                type: 'phone',
                number: data.phone,
              },
            ]
          : undefined,
    };
    console.log(finalData);
    addAddressFn(finalData);
  }
  useEffect(() => {
    if (isAddToData == '1') {
      getAddressSelect();
      setTimeout(() => {
        navigation.goBack();
      }, 5000);
    } else {
      if (isAddToData == '2') {
        dropDownAlertRef.alertWithType(
          'error',
          'Your address could not be registered. Please try again',
        );
      }
    }
  }, [isAddToData]);
  const onError: SubmitErrorHandler<FormValues> = errors => {
    dropDownAlertRef.alertWithType(
      'error',
      'All fields marked with an asterisk must be filled',
    );

    return console.log('errors', errors);
  };
  //   function popupSelectAddress(){
  //     <Modal
  //     transparent
  //     visible={true}>
  //       <View style={{width:`100%`,height:`100%`,backgroundColor:'rgba(0,0,0,0.3)'}}>
  //        <View style={{position:'absolute',bottom:0,width:`100%`,height:250}}>
  // {/* <View style={{flexDirection: 'row', paddingTop: 30}}>
  //                 <ControlledCheckBox
  //                   defaultValue={true}
  //                   name="is_pack_station"
  //                   isCheck={true}
  //                 />
  //                 <Space lineW={10} />
  //                 <Text style={{fontSize: 15}}>{'Pack station'}</Text>
  //                 <Space lineW={50} />
  //                 <ControlledCheckBox
  //                   defaultValue={true}
  //                   name="is_post_office"
  //                   isCheck={true}
  //                 />
  //                 <Text style={{fontSize: 15}}>{'Post office'}</Text>
  //               </View> */}
  //        </View>

  //         </View>

  //     </Modal>
  //   }
  return (
    <>
      <BackgroundView>
        <ScrollView>
          <HeaderScComponent navigation={navigation} title={'Add Address'} />

          <Padding>
            <FormProvider {...methods}>
              <PickerController
                name={'cart_title'}
                containerStyle={{width: '100%'}}
                placeholderStyle={{fontSize: 18}}
                placeholder={'Standard'}
                defaultValue={'Standard'}
                style={{
                  borderColor: Color.brand.border,
                  backgroundColor: Color.brand.f9,
                }}
                items={[
                  {label: 'Standard', value: 'Standard'},
                  {label: 'Home', value: 'Home'},
                  {label: 'Office', value: 'Office'},
                  {label: 'Other', value: 'Other'},
                ]}
                onChange={() => {}}
              />
              <ControlledInput
                name="company_name"
                label="Company Name"
                placeholderTextColor={'#F9F9F9'}
                maxLength={100}
                setFormError={setError}
              />
              <ControlledInput
                name="first_name"
                label="First Name"
                maxLength={40}
                placeholderTextColor={'#F9F9F9'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
              />
              <ControlledInput
                name="last_name"
                label="Last Name"
                maxLength={40}
                placeholderTextColor={'#F9F9F9'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
              />
              <ControlledInput
                name="address2"
                label="Street"
                maxLength={50}
                placeholderTextColor={'#F9F9F9'}
                setFormError={setError}
              />
              <ControlledInputPhone
                name="house_number"
                label="House Number"
                rules={{required: 'Password is required!'}}
                placeholderTextColor={'#F9F9F9'}
                setFormError={setError}
                maxLength={11}
                keyboardType="number-pad"
              />
              <ControlledInput
                name="postal_code"
                label="Post Code"
                placeholderTextColor={'#F9F9F9'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
                maxLength={11}
                keyboardType="number-pad"
              />

              <ControlledInput
                name="city"
                label="City"
                placeholderTextColor={'#F9F9F9'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
                maxLength={40}
              />
              <ControlledInput
                name="state"
                label="State"
                placeholderTextColor={'#F9F9F9'}
                setFormError={setError}
                maxLength={40}
              />
              <Space lineH={10} />
              <Text style={{color: 'black'}}>
                {'Country'}
                <Text style={{color: 'red'}}>{'*'}</Text>
              </Text>
              <Space lineH={10} />
              <PickerController
                name={'country_id'}
                containerStyle={{width: '100%'}}
                placeholderStyle={{fontSize: 18}}
                style={{
                  borderColor: Color.brand.border,
                  backgroundColor: Color.brand.f9,
                }}
                rules={{required: 'Password is required!'}}
                items={countries}
                onChange={() => {}}
              />

              <ControlledInputPhone
                name="phone"
                label="Phone"
                rules={{required: 'Password is required!'}}
                placeholderTextColor={'#F9F9F9'}
                setFormError={setError}
                maxLength={11}
                keyboardType="number-pad"
              />

              <ControlledInput
                name="address1"
                label="Address Line"
                placeholderTextColor={'#F9F9F9'}
                setFormError={setError}
                style={{
                  height: 130,
                  textAlignVertical: 'auto',
                  paddingTop: 0,
                  paddingBottom: 0,
                  alignSelf: 'flex-start',
                }}
              />
            </FormProvider>

            <ViewLoading>
              <LoadingButton
                isActive={isAddToDataLodging}
                title={'Submit'}
                onNext={methods.handleSubmit(onSubmit, onError)}
                onClose={() => {}}
              />
            </ViewLoading>
            <Space lineH={80} />
          </Padding>
        </ScrollView>
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
      </BackgroundView>
    </>
  );
}
