import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {Edit} from 'react-native-iconly';
import Avatar from '../../components/avatar';
import {BackgroundForm, ButtonColor, HandleEvent} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {AuthContext} from '../../service/Auth/Auth.context';
import {MainContext} from '../../service/Main/Main.context';
import {PartnerContext} from '../../service/Partner/Partner.context';
import {Partners} from '../../service/Partner/type';
import {LocationPartner} from '../loactionPartner';
import {LoadingButton} from '../../components/buttonLoading';
import {SignUpModel} from '../../service/Auth/model';
import {widthFullScreen} from '../../utils/main';

const height = Dimensions.get('screen').height;
export default function PartFive({navigation, onChangeValue}) {
  const {partner, partnerIdFn} = useContext(PartnerContext);
  const [arrayPartner, setArrayPartner] = useState([]);
  const [openLocation, setOpenLocation] = useState(true);
  const [selectLocation, setSelectLocation] = useState('German');
  useEffect(() => {
    return setArrayPartner(partner);
  }, [partner]);
  function onPressPartner(item: Partners) {
    console.log(item.id);
    SignUpModel.sponsor_id = item.id;
    let selectArray = arrayPartner.map(data => {
      if (data?.id == item?.id) {
        return {...data, select: true};
      }
      return {...data, select: false};
    });
    setArrayPartner(selectArray);

    // navigation.navigate('PartnerDetailScreen');
  }
  function onPressPartnerDetail(item: Partners) {
    console.log(item.id);
    SignUpModel.sponsor_id = item.id;
    let selectArray = arrayPartner.find(data => {
      return data?.id == item?.id;
    });

    navigation.navigate('PartnerDetailScreen',{
      params:selectArray
    });
  }
  const {isRegister, singUpFn, isLoginOpen, isRegisterOpen} =
    useContext(AuthContext);
  const {onGetUser} = useContext(MainContext);

  function onSign() {
    singUpFn();
  }
  useEffect(() => {
    if (isRegisterOpen) {
      onGetUser();
      onChangeValue();
    }
  }, [isRegisterOpen]);
  const regex = /(<([^>]+)>)/gi;
  function renderItemPartner({item}): JSX.Element {
    console.log(item);

    return (
      <View
        style={{
          backgroundColor: item.select ? Color.brand.gryLight : '#ffff',
          width: `110%`,
        }}>
        <Space lineH={10} />
        <TouchableOpacity onPress={() => onPressPartner(item)}>
          <View style={{flexDirection: 'row'}}>
            <Avatar
              styled={{
                width: 80,
                height: 80,
                borderRadius: 80,
                alignSelf: 'center',
              }}
              onClick={() => {onPressPartnerDetail(item)}}
              src={item?.user?.avatar}
            />
            <Space lineW={15} />
            <View>
              <Text style={{fontSize: 17, color: Color.brand.black}}>
                {item?.firstName + ' ' + item?.lastName}
                {/* <Text style={{fontSize: 12, color: Color.brand.green}}>
                  {'   ' + 'Level1'}
                </Text> */}
              </Text>
              <Text style={{fontSize: 12, color: Color.brand.textGrey}}>
                {item?.address_complete.replace(regex, ', ')}
              </Text>
              <Text style={{fontSize: 12, color: Color.brand.textGrey}}>
                {`Number Of Customers : ${item?.user_id} `}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Space lineH={10} />
      </View>
    );
  }
  return (
    <>
      <BackgroundForm height={height - 350}>
        <View style={{height: '100%'}}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text style={{fontSize: 14, color: Color.brand.black}}>
              {selectLocation}
            </Text>
            <HandleEvent
              onPress={() => {
                setOpenLocation(!openLocation);
              }}
              style={{
                flexDirection: 'row',
              }}>
              <Edit
                size={20}
                primaryColor={Color.brand.blue}
                onPress={() => {
                  setOpenLocation(!openLocation);
                }}
              />
              <Space lineW={5} />
              <Text style={{fontSize: 14, color: Color.brand.blue}}>
                {'Edit'}
              </Text>
            </HandleEvent>
          </View>
          <LocationPartner
            open={openLocation}
            onChange={item => {
              setSelectLocation('Location : ' + item.label);
              setOpenLocation(!openLocation);
            }}
          />
          <Space lineH={5} />
          <FlatList
            keyExtractor={item => item.id}
            data={arrayPartner}
            renderItem={renderItemPartner}
          />
          {/* </ScrollView> */}
        </View>
        <Space lineH={10} />
        <LoadingButton
          isActive={isRegister}
          width={widthFullScreen - 30}
          onNext={() => onSign()}
          title={'Submit'}
          onClose={() => {}}
        />
      </BackgroundForm>
    </>
  );
}
