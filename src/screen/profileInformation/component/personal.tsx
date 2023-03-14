/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {ControlledInput} from '../../../components/textInputController';
import {Color} from '../../../infrastructuer/theme/colors.style';
import {Space} from '../../../infrastructuer/theme/space.style';
import {ProfileContext} from '../../../service/Profile/Profile.context';
import i18n from '../../../core/i18n/config';

export default function Personal() {
  const {user} = useContext(ProfileContext);

  return (
    <>
      <View>
        <ControlledInput
          name="people.first_name"
          label={i18n.t("Global.FirstName")}
          
          defaultValue={user?.person?.first_name}
          placeholder={user?.person?.first_name}
          placeholderTextColor={'#000'}
        />

        <Space lineH={10} />
        <ControlledInput
          name="people.last_name"
          label={i18n.t("Global.LastName")}
          defaultValue={user?.person?.last_name}
          placeholder={user?.person?.last_name}
          placeholderTextColor={'#000'}
        />
      </View>
    </>
  );
}
