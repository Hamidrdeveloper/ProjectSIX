import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {IconlyProvider, InfoCircle} from 'react-native-iconly';
import {ControlledInput} from '../../../components/textInputController';
import {Color} from '../../../infrastructuer/theme/colors.style';
import {Space} from '../../../infrastructuer/theme/space.style';
import {ProfileContext} from '../../../service/Profile/Profile.context';
import i18n from '../../../core/i18n/config';

export default function Email() {
  const {user} = useContext(ProfileContext);

  return (
    <>
      <View>
        {/* <Text>{'Email'}</Text> */}
        <Space lineH={10} />
        <ControlledInput
          name="email"
          label= {i18n.t("Global.Email")}
         
          placeholder={user?.email}
          placeholderTextColor={'#000'}
        />
        <Space lineH={10} />
        <View style={{flexDirection: 'row'}}>
          <IconlyProvider
            primaryColor={'yellow'}
            secondaryColor={'yellow'}
            set="light"
            size="xlarge">
            <InfoCircle />
          </IconlyProvider>
          <Text style={{fontSize: 11, paddingLeft: 8}}>
          
             {i18n.t("Global.Ifyouare")}
          </Text>
        </View>
      </View>
    </>
  );
}
