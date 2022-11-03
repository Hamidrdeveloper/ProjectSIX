import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import HeaderScComponent from '../../components/header2';
import ButtonInformation from '../../components/inputInformation';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {ProfileContext} from '../../service/Profile/Profile.context';

export default function InformationScreen({navigation}) {
  const {user} = useContext(ProfileContext);

  return (
    <BackgroundView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderScComponent navigation={navigation} title={'Profile'} />

        <Padding>
          <ButtonInformation
            title={'First Name And Last Name'}
            ButtonTitle={
              user?.person.first_name + ' ' + user?.person?.last_name
            }
            onClick={() =>
              navigation.navigate('ProfileInformation_SCREEN', {
                typeInformation: 'Personal',
                title: 'First Name And Last Name',
                text: 'Enter Your First Name And Last Name',
              })
            }
          />
          <ButtonInformation
            title={'Email'}
            ButtonTitle={user?.email}
            onClick={() =>
              navigation.navigate('ProfileInformation_SCREEN', {
                typeInformation: 'Email',
                title: 'Email',
                text: 'Enter Your Email',
              })
            }
          />
          <ButtonInformation
            title={'Birthday'}
            ButtonTitle={user?.birth_date}
            onClick={() =>
              navigation.navigate('ProfileInformation_SCREEN', {
                typeInformation: 'Birthday',
                title: 'Birthday',
                text: 'Specify Your Date Of Birth',
              })
            }
          />
          <ButtonInformation
            title={'Country'}
            ButtonTitle={user?.country?.name}
            onClick={() =>
              navigation.navigate('ProfileInformation_SCREEN', {
                typeInformation: 'Country',
                title: 'Country',
                text: 'Specify Your Country',
              })
            }
          />
          <ButtonInformation
            title={'Language'}
            ButtonTitle={user?.language?.title}
            onClick={() =>
              navigation.navigate('ProfileInformation_SCREEN', {
                typeInformation: 'Language',
                title: 'Language',
                text: 'Specify Your Language',
              })
            }
          />
          <ButtonInformation
            title={'Gender'}
            ButtonTitle={user?.person?.gender}
            onClick={() =>
              navigation.navigate('ProfileInformation_SCREEN', {
                typeInformation: 'Gender',
                title: 'Gender',
                text: 'Specify Your Gender',
              })
            }
          />
          <ButtonInformation
            title={'Password'}
            ButtonTitle={'*******'}
            onClick={() =>
              navigation.navigate('ProfileInformation_SCREEN', {
                typeInformation: 'Email',
                title: 'Email',
                text: 'Enter Your Email',
              })
            }
          />
        </Padding>
      </ScrollView>
    </BackgroundView>
  );
}
