import React, {useCallback, useContext, useEffect, useMemo, useReducer, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheet} from 'react-native-elements';
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
import ButtonCircle from '../../components/circleButton';
import HeaderScComponent from '../../components/header2';
import LineW from '../../components/lineW';
import RadioButtonSingle from '../../components/radioButton/radioSingle';
import {Absolute, BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {AddressContext} from '../../service/Address/Address.context';
import { ACTIONS } from '../../utils/actionsType';
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
  const {getAddressFn, addToMainAddressFn, addresses,getAddressSelect} =
    useContext(AddressContext);
  //============

  const [isVisible, setIsVisible] = useState(false);
  const [typeScreen, setTypeScreen] = useState(route.params.type);
  const [addressList, setAddressList] = useState([]);
  const [select, setSelect] = useState();
  //===============
  useEffect(()=>{
    getAddressFn()
  },[])
  useEffect(() => {
    console.log('==============addressList======================');
    console.log(addressList);
  
    console.log('==================addressList==================');
   
  }, [addressList]);
 


  useEffect(() => {
    if(addresses!=null){
      console.log('==============addresses======================');
      console.log(addresses);
      setAddressList([]);
      setAddressList(addresses);
      
      console.log('==================addresses==================');
    }
 
  }, [addresses]);
   //===============
   useEffect(()=>{
     console.log(select);
     
   },[select])
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
    getAddressSelect();
    navigation.goBack();
    addToMainAddressFn(select);
  }
  const renderContent = () => (
    <>
      <TouchableOpacity onPress={() => setIsVisible(false)}>
        <View
          style={{
            height: height - 150,
            width: `100%`,
          }}
        />
      </TouchableOpacity>

      <ViewPopUp>
        <View style={{flexDirection: 'row'}}>
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
        </View>
        <Space lineH={10} />
        <LineW />
        <Space lineH={10} />
        <View style={{flexDirection: 'row'}}>
          <IconlyProvider
            set="broken"
            size={'medium'}
            primaryColor={Color.brand.textGrey}
            secondaryColor={Color.brand.textGrey}>
            <Delete primaryColor={`red`} />
          </IconlyProvider>
          <Space lineW={10} />
          <Text style={{color: `red`, fontSize: 16}}>{'Delete address'}</Text>
        </View>
      </ViewPopUp>
    </>
  );

  function _renderItemAddress(value) {
    console.log(value.isSelected);

    return (
      <View>
        <Space lineH={10} />
        <ViewItemAddress>
          {typeScreen == 'Basket' ? (
            <RadioButtonSingle
              id={1}
              flag={value.isSelected}
              onClick={e => {
                _onAddAddress(value);
              }}
            />
          ) : null}
          <TitleAddress>{`${value.address.address_complete}`}</TitleAddress>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Menu source={require('../../assets/image/menu.png')} />
          </TouchableOpacity>
        </ViewItemAddress>
        <Space lineH={10} />
        <View style={{flexDirection: 'row'}}>
          <User size={'medium'} primaryColor={`${Color.brand.textGrey}`} />

          <Space lineW={10} />
          <DetailsAddress>{'Mr John Smit'}</DetailsAddress>
        </View>
        <Space lineH={10} />
        <View style={{flexDirection: 'row'}}>
          <Call size={'medium'} primaryColor={`${Color.brand.textGrey}`} />

          <Space lineW={10} />
          <DetailsAddress>{'08825364256'}</DetailsAddress>
        </View>
        <Space lineH={10} />
        <View style={{flexDirection: 'row'}}>
          <Discovery size={'medium'} primaryColor={`${Color.brand.textGrey}`} />

          <Space lineW={10} />
          <DetailsAddress>{'United kingdom , Hampshire'}</DetailsAddress>
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
            <TouchableOpacity onPress={()=>{navigation.navigate("AddAddress_SCREEN")}}>
            <View style={{flexDirection: 'row'}}>
              <Location size={'large'} primaryColor={Color.brand.blue} />
              <Space lineW={10} />
              <Text style={{color: Color.brand.blue, fontSize: 18}}>
                {'Add new address'}
              </Text>
            </View>
            </TouchableOpacity>
            <Space lineH={15} />
            {addressList?.map(value => {
              return _renderItemAddress(value);
            })}
          </Padding>
          <BottomSheet modalProps={{}} isVisible={isVisible}>
            {renderContent()}
          </BottomSheet>
        </ScrollView>
        {typeScreen == 'Basket' ? (
          <Absolute left={15} bottom={30}>
            <ButtonCircle
              onClick={_passSelectAddress}
            />
          </Absolute>
        ) : null}
      </BackgroundView>
    </>
  );
}