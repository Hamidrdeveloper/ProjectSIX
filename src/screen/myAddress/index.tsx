import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Call,
  Delete,
  Discovery,
  IconlyProvider,
  Location,
  MoreCircle,
  Swap,
  User,
} from 'react-native-iconly';
import BottomSheet from '../../components/bottomSheet';
import ButtonCircle from '../../components/circleButton';
import HeaderScComponent from '../../components/header2';
import LineW from '../../components/lineW';
import RadioButtonSingle from '../../components/radioButton/radioSingle';
import {
  Absolute,
  BackgroundView,
  HandleEvent,
  Padding,
} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {AddressContext} from '../../service/Address/Address.context';
import {ProfileContext} from '../../service/Profile/Profile.context';
import {ACTIONS} from '../../utils/actionsType';
import {
  DetailsAddress,
  Menu,
  TitleAddress,
  ViewItemAddress,
  ViewPopUp,
} from './style/myAddress.style';
const height = Dimensions.get('screen').height;
export default function MyAddressScreen({navigation, route}) {
  //Context
  const {getAddressFn, addToMainAddressFn, addresses, removeAddressFn} =
    useContext(AddressContext);
  const {userInvoiceAddressFn} = useContext(ProfileContext);
  //============

  const [isVisible, setIsVisible] = useState(false);
  const [typeScreen, setTypeScreen] = useState(route?.params.type);
  const [addressList, setAddressList] = useState([]);
  const [select, setSelect] = useState();
  const [selectMore, setSelectMore] = useState();
  //===============
  useEffect(() => {
    getAddressFn();
  }, []);

  useEffect(() => {
    if (addresses != null) {
      console.log('==============addresses======================');
      console.log(addresses);
      setAddressList([]);
      setAddressList(addresses);

      console.log('==================addresses==================');
    }
  }, [addresses]);
  //===============
  useEffect(() => {
    console.log(select);
  }, [select]);
  function _onAddAddress(value) {
   
    setSelect(value);
    let add = addresses.map(res => {
      console.log('_onAddAddress', value.id + ' ' + res.id);
      if (value.id == res.id) {
        return {...res, isSelected: true};
      }

      return {...res, isSelected: false};
    });
    console.log('_onAddAddress', add);

    setAddressList(add);
  }
  function _passSelectAddress() {

    switch (typeScreen) {
      case 'Basket':
        userInvoiceAddressFn(select);
        addToMainAddressFn(select);
        break;
      case 'Invoice':
        userInvoiceAddressFn(select);
        break;
      case 'Deliver':
       
        addToMainAddressFn(select);
        break;
    }
    navigation.goBack();
  }
  const RerenderContent = item => {
    return (
      <>
        <ViewPopUp>
          <HandleEvent
            onPress={() => {
              setIsVisible(false);
              navigation.navigate('EditAddress_SCREEN', {address: selectMore});
            }}
            style={{flexDirection: 'row'}}>
            <IconlyProvider
              set="broken"
              size={'medium'}
              primaryColor={Color.brand.black}
              secondaryColor={Color.brand.black}>
              <User primaryColor={`${Color.brand.black}`} />
            </IconlyProvider>
            <Space lineW={10} />
            <Text style={{color: Color.brand.black, fontSize: 16}}>
              {'Edit address'}
            </Text>
          </HandleEvent>
          <Space lineH={10} />
          <LineW />
          <Space lineH={10} />
          <HandleEvent
            onPress={() => {
              setIsVisible(false);
              removeAddressFn(item);
            }}
            style={{flexDirection: 'row'}}>
            <IconlyProvider
              set="broken"
              size={'medium'}
              primaryColor={Color.brand.textGrey}
              secondaryColor={Color.brand.textGrey}>
              <Delete primaryColor={'red'} />
            </IconlyProvider>
            <Space lineW={10} />
            <Text style={{color: 'red', fontSize: 16}}>{'Delete address'}</Text>
          </HandleEvent>
        </ViewPopUp>
      </>
    );
  };

  function _renderItemAddress(value) {
    console.log(value.isSelected);
    const regex = /(<([^>]+)>)/gi;
    return (
      <View>
        <Space lineH={10} />
        <ViewItemAddress>
          {typeScreen == 'Basket' ||
          typeScreen == 'Invoice' ||
          typeScreen == 'Deliver' ? (
            <RadioButtonSingle
              id={1}
              flag={value.isSelected}
              onClick={e => {
                _onAddAddress(value);
              }}
            />
          ) : null}
          <TitleAddress>{`${value?.address?.address_complete.replace(
            regex,
            ', ',
          )}`}</TitleAddress>
          <TouchableOpacity
            onPress={() => {
              setSelectMore(value);
              setIsVisible(true);
            }}>
            <Menu source={require('../../assets/image/menu.png')} />
          </TouchableOpacity>
        </ViewItemAddress>
        <Space lineH={10} />
        <View style={{flexDirection: 'row'}}>
          <User size={'medium'} primaryColor={`${Color.brand.textGrey}`} />

          <Space lineW={10} />
          {/* <DetailsAddress>
            {value?.people[0]?.first_name + '' + value?.people[0]?.last_name}
          </DetailsAddress> */}
        </View>
        <Space lineH={10} />
        <View style={{flexDirection: 'row'}}>
          <Call size={'medium'} primaryColor={`${Color.brand.textGrey}`} />

          <Space lineW={10} />
          <DetailsAddress> {value?.phones[0]?.number}</DetailsAddress>
        </View>
        <Space lineH={10} />
        <View style={{flexDirection: 'row'}}>
          <Discovery size={'medium'} primaryColor={`${Color.brand.textGrey}`} />

          <Space lineW={10} />
          <DetailsAddress>{value?.title}</DetailsAddress>
        </View>
        <Space lineH={10} />
        <LineW />
      </View>
    );
  }
  return (
    <>
      <BackgroundView>
        <ScrollView>
          <HeaderScComponent navigation={navigation} title={'My addresses'} />

          <Padding>
            <Space lineH={15} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddAddress_SCREEN');
              }}>
              <View style={{flexDirection: 'row'}}>
                <Location size={'large'} primaryColor={Color.brand.blue} />
                <Space lineW={10} />
                <Text style={{color: Color.brand.blue, fontSize: 18}}>
                  {'Add new address'}
                </Text>
              </View>
            </TouchableOpacity>
            <Space lineH={15} />
            {addressList?.reverse()?.map(value => {
              return _renderItemAddress(value);
            })}
            <Space lineH={65} />
          </Padding>
          <BottomSheet
            visible={isVisible}
            onBack={() => {
              setIsVisible(false);
            }}
            ReRender={() => RerenderContent(selectMore)}
          />
        </ScrollView>
        {typeScreen == 'Basket' ||
        typeScreen == 'Invoice' ||
        typeScreen == 'Deliver' ? (
          <Absolute left={15} bottom={30}>
            <ButtonCircle onClick={_passSelectAddress} />
          </Absolute>
        ) : null}
      </BackgroundView>
    </>
  );
}
