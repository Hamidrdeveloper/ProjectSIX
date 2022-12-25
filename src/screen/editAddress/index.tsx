/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {BackgroundView, Padding} from '../../css/main.style';
import HeaderScComponent from '../../components/header2';
import {TextInputSign} from '../signUp/style/signUp.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {Text, ScrollView, Button, View, TouchableOpacity, Image} from 'react-native';
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
import PickerController from '../../components/pickerController';
import {AuthContext} from '../../service/Auth/Auth.context';
type FormValues = {
  first_name: string;
  last_name: string;
  name: string;
  company_name: string;
  phone: string;
  cart_title: string;
};
export default function EditAddressScreen({navigation, route}) {
  const defaultValues = route.params.address;
  const {...methods} = useForm();
  const {countries} = useContext(AuthContext);

  const {
    editAddressFn,
    isAddToData,
    getAddressSelect,
    addAddressFn,
    isAddToDataLoding: isAddToDataLodging,
  } = useContext(AddressContext);
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
    console.log(defaultValues);
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
                placeholder={defaultValues.title}
                defaultValue={defaultValues.title}
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
                defaultValue={defaultValues?.company_name}
                placeholder={defaultValues?.company_name}
                placeholderTextColor={'#000'}
                setFormError={setError}
                maxLength={50}
              />
              <ControlledInput
                defaultValue={defaultValues?.first_name}
                placeholder={defaultValues?.first_name}
                name="first_name"
                label="First Name"
                placeholderTextColor={'#000'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
                maxLength={40}
              />
              <ControlledInput
                name="last_name"
                label="Last Name"
                defaultValue={defaultValues?.last_name}
                placeholder={defaultValues?.last_name}
                placeholderTextColor={'#000'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
                maxLength={40}
              />
              <ControlledInput
                name="address2"
                label="Street"
                defaultValue={defaultValues?.address?.address2}
                placeholder={defaultValues?.address?.address2}
                placeholderTextColor={'#000'}
                setFormError={setError}
                maxLength={60}
              />
              <ControlledInputPhone
                name="house_number"
                label="House Number"
                rules={{required: 'Password is required!'}}
                placeholderTextColor={'#F9F9F9'}
                setFormError={setError}
                defaultValue={defaultValues?.phones[0]?.number}
                placeholder={defaultValues?.phones[0]?.number}
                maxLength={11}
                keyboardType="number-pad"
              />
              <ControlledInput
                name="postal_code"
                label="Post Code"
                defaultValue={defaultValues?.address?.postal_code}
                placeholder={defaultValues?.address?.postal_code}
                placeholderTextColor={'#000'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
                maxLength={11}
                keyboardType="number-pad"
              />
              <ControlledInput
                name="city"
                label="City"
                defaultValue={defaultValues?.address?.city}
                placeholder={defaultValues?.address?.city}
                placeholderTextColor={'#000'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
                maxLength={40}
              />
              <ControlledInput
                name="state"
                label="State"
                defaultValue={defaultValues?.address?.state}
                placeholder={defaultValues?.address?.state}
                placeholderTextColor={'#000'}
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
                placeholder={defaultValues?.country?.name}
                defaultValue={defaultValues?.country?.id}
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
                defaultValue={defaultValues?.phones[0]?.number}
                placeholder={defaultValues?.phones[0]?.number}
                placeholderTextColor={'#000'}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
                maxLength={11}
                keyboardType="number-pad"
              />
              {/* <View style={{flexDirection: 'row', paddingTop: 30}}>
                <ControlledCheckBox
                  defaultValue={defaultValues.address.is_pack_station}
                  name="is_pack_station"
                  isCheck={true}
                />
                <Space lineW={10} />
                <Text style={{fontSize: 15}}>{'Pack station'}</Text>
                <Space lineW={50} />
                <ControlledCheckBox
                  defaultValue={defaultValues.address.is_post_office}
                  name="is_post_office"
                  isCheck={true}
                />
                <Text style={{fontSize: 15}}>{'Post office'}</Text>
              </View> */}

              <ControlledInput
                name="address1"
                label="Address Line"
                defaultValue={defaultValues?.address?.address1}
                placeholder={defaultValues?.address?.address1}
                placeholderTextColor={'#000'}
                setFormError={setError}
                style={{height: 130, textAlignVertical: 'top'}}
              />
            </FormProvider>

            <View
              style={{
                height: 50,
                marginTop: 15,
                width: '100%',
              }}>
              <LoadingButton
                isActive={isAddToDataLodging}
                title={'Submit'}
                onNext={methods.handleSubmit(onSubmit, onError)}
                onClose={() => {}}
              />
            </View>
            <Space lineH={80} />
          </Padding>
        </ScrollView>
        <DropdownAlert
        renderImage={props => {
            return (
              <Image
              resizeMode='center'
                style={{width: 50, height: 30,tintColor:Color.brand.white}}
                source={require('../../assets/image/cleafin_logo.png')}
              />
            );
          }}
          titleNumOfLines={3}
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
