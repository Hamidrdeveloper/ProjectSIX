import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import HeaderScComponent from '../../components/header2';
import ButtonInformation from '../../components/inputInformation';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {ProfileContext} from '../../service/Profile/Profile.context';
import i18n from '../../core/i18n/config';

export default function InformationScreen({navigation}) {
  const {user} = useContext(ProfileContext);

  return (
    <BackgroundView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderScComponent navigation={navigation} title={i18n.t("Global.Profile")} />

        <Padding>
          <ButtonInformation
            title={i18n.t("Global.FirstName")}
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
            title={i18n.t("Global.Email")}
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
            title={i18n.t("Global.Birthday")}
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
            title={i18n.t("Global.Country")}
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
            title={i18n.t("Global.Language")}
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
            title={i18n.t("Global.Gender")}
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
            title={i18n.t("Global.Password")}
            
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
