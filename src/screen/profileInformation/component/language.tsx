import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Picker from '../../../components/picker/components/Picker';
import {Color} from '../../../infrastructuer/theme/colors.style';
import {Space} from '../../../infrastructuer/theme/space.style';
import {AuthContext} from '../../../service/Auth/Auth.context';
import {useController, UseControllerProps} from 'react-hook-form';
import {ProfileContext} from '../../../service/Profile/Profile.context';
import i18n from '../../../core/i18n/config';

interface PickerProps extends UseControllerProps {
  label: string;
  name: string;
  defaultValue?: string;
  setFormError: Function;
}
export default function Language(props: PickerProps) {
  const {language} = useContext(AuthContext);
  const [openLanguage, setOpenLanguage] = useState(false);
  const {name, rules, defaultValue} = props;
  const {user} = useContext(ProfileContext);
  const [valueLanguage, setValueLanguage] = useState(user?.language?.id);

  const {field} = useController({name, rules, defaultValue});
  useEffect(() => {
    if (valueLanguage) {
      field.onChange(valueLanguage);
    }
  }, [valueLanguage]);
  return (
    <>
      <View>
        <Text>{i18n.t("Global.Language")}</Text>
        <Space lineH={10} />
        <Picker
          containerStyle={{width: '100%'}}
          style={{
            borderColor: Color.brand.border,
            backgroundColor: Color.brand.f9,
          }}
          open={openLanguage}
          value={valueLanguage}
          items={language}
          setOpen={setOpenLanguage}
          setValue={setValueLanguage}
          translation={{
            PLACEHOLDER: user?.language?.title
          }}
        />
      </View>
    </>
  );
}
