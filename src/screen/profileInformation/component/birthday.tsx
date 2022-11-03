import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import BirthdayController from '../../../components/birthday/BirthdayController';
import {Color} from '../../../infrastructuer/theme/colors.style';
import {Space} from '../../../infrastructuer/theme/space.style';
import {ProfileContext} from '../../../service/Profile/Profile.context';

export default function Birthday() {
  const {user} = useContext(ProfileContext);
  console.log(user);

  return (
    <>
      <View>
        <Text>{'Birthday'}</Text>
        <Space lineH={10} />
        <BirthdayController
          label={''}
          defaultValue={user?.birth_date}
          name={'birth_date'}
          setFormError={undefined}
        />
      </View>
    </>
  );
}
