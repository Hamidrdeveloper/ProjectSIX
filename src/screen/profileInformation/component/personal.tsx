/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {ControlledInput} from '../../../components/textInputController';
import {Color} from '../../../infrastructuer/theme/colors.style';
import {Space} from '../../../infrastructuer/theme/space.style';
import {ProfileContext} from '../../../service/Profile/Profile.context';

export default function Personal() {
  const {user} = useContext(ProfileContext);

  return (
    <>
      <View>
        <ControlledInput
          name="people.first_name"
          label="First Name"
          defaultValue={user?.person?.first_name}
          placeholder={user?.person?.first_name}
          placeholderTextColor={'#000'}
        />

        <Space lineH={10} />
        <ControlledInput
          name="people.last_name"
          label="Last Name"
          defaultValue={user?.person?.last_name}
          placeholder={user?.person?.last_name}
          placeholderTextColor={'#000'}
        />
      </View>
    </>
  );
}
