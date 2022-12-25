import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  Bag,
  Chat,
  EditSquare,
  Heart,
  Location,
  Logout,
  Notification,
  User,
  Document
} from 'react-native-iconly';
import Storage from '../../utils/storeData';
import Picker from '../../components/addFileImage';
import Avatar from '../../components/avatar';
import ButtonMenuProfile from '../../components/buttonMenuProfile';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {AddressContext} from '../../service/Address/Address.context';
import {BasketContext} from '../../service/Basket/Basket.context';
import {ProfileContext} from '../../service/Profile/Profile.context';
import {FileContext} from '../../service/File/File.context';
import {MainContext} from '../../service/Main/Main.context';
import {BackgroundView} from '../../css/main.style';
import HeaderScComponent from '../../components/header2';

export default function ProfileScreen({navigation}) {
  const {user} = useContext(ProfileContext);
  const {loadedSaveAddressFn} = useContext(AddressContext);
  const {orderSale} = useContext(BasketContext);
  const {uploadFileFn} = useContext(FileContext);
  const {onDeleteUser} = useContext(MainContext);

  const [isPicker, setPicker] = useState(false);
  useEffect(() => {
    loadedSaveAddressFn();
    orderSale();
  }, []);
  function onResponse(res) {
    if (res != null) {
      console.log(res);
      uploadFileFn(res);
    }
    setPicker(false);
  }
  return (
    <>
      <BackgroundView>
        <ScrollView>
        <HeaderScComponent navigation={navigation} title={'Profile'} />
          <View>
            <Space lineH={25} />
            <Avatar
              onClick={() => setPicker(true)}
              style={{
                width: 130,
                height: 130,
                borderRadius: 50,
                alignSelf: 'center',
              }}
              src={user?.avatar}
            />
            <Text
              style={{
                fontSize: 20,
                alignSelf: 'center',
                color: Color.brand.black,
                top: 10,
              }}>
              {user?.person?.first_name}
            </Text>
            <Image
              resizeMode="stretch"
              style={{width: '100%', height: 130, bottom: 40}}
              source={require('../../assets/image/theamPro.png')}
            />
            <View
              style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 15}}>
              <ButtonMenuProfile
                icon={<User />}
                text="Personal Information"
                onClick={() =>
                  navigation.navigate('InformationScreen', {
                    typeInformation: 'Email',
                    title: '',
                    text: '',
                  })
                }
              />
              <Space lineH={10} />
              <ButtonMenuProfile
                icon={<Location />}
                text="My Address"
                onClick={() =>
                  navigation.navigate('MyAddress_SCREEN', {
                    typeInformation: 'Email',
                    title: '',
                    text: '',
                    type: 'Profile',
                  })
                }
              />
              <Space lineH={10} />
              <ButtonMenuProfile
                icon={<Heart />}
                text="Saved"
                onClick={() =>
                  navigation.navigate('MySave_SCREEN', {
                    typeInformation: 'Email',
                    title: '',
                    text: '',
                  })
                }
              />
              <Space lineH={10} />
              <ButtonMenuProfile
                icon={<Bag />}
                text="My Orders"
                onClick={() =>
                  navigation.navigate('OrderProcessingScreen', {
                    typeInformation: 'Email',
                    title: '',
                    text: '',
                  })
                }
              />
              {/* <Space lineH={10} />
              <ButtonMenuProfile
                icon={<Chat />}
                text="Messages"
                onClick={() =>
                  navigation.navigate('Chat_SCREEN', {
                    typeInformation: 'Messages',
                    title: '',
                    text: '',
                  })
                }
              /> */}
              <Space lineH={10} />
              <ButtonMenuProfile
                icon={<EditSquare />}
                text="My Reviews"
                onClick={() =>
                  navigation.navigate('MyReviews_SCREEN', {
                    typeInformation: 'Email',
                    title: '',
                    text: '',
                  })
                }
              />
              {/* <Space lineH={10} />
              <ButtonMenuProfile
                icon={<Notification />}
                text="Notifications"
                onClick={() =>
                  navigation.navigate('Notification_SCREEN', {
                    typeInformation: 'Email',
                    title: '',
                    text: '',
                  })
                }
              /> */}
               <Space lineH={10} />
              <ButtonMenuProfile
                icon={<Document />}
                text="Document"
                onClick={() => {
                  
                  navigation.navigate('DocumentScreen');
                }}
              />
              <Space lineH={10} />
              <ButtonMenuProfile
                icon={<Logout />}
                text="Sign Out"
                onClick={() => {
                  onDeleteUser();
                  navigation.replace('SignInScreen');
                }}
              />
             
            </View>
          </View>
        </ScrollView>
      </BackgroundView>
      {/* <Picker visible={isPicker} onClick={res => onResponse(res)} /> */}
    </>
  );
}
