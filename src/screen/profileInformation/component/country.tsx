import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Picker from '../../../components/picker/components/Picker';
import {Color} from '../../../infrastructuer/theme/colors.style';
import {Space} from '../../../infrastructuer/theme/space.style';
import {AuthContext} from '../../../service/Auth/Auth.context';
import {useController, UseControllerProps} from 'react-hook-form';
import {ProfileContext} from '../../../service/Profile/Profile.context';

interface PickerProps extends UseControllerProps {
  label: string;
  name: string;
  defaultValue?: string;
  setFormError: Function;
}
export default function Country(props: PickerProps) {
  const {countries} = useContext(AuthContext);
   const {user} = useContext(ProfileContext);
  const [openCountry, setOpenCountry] = useState(false);
  const [valueCountry, setValueCountry] = useState(user?.country?.id);
  const {name, rules, defaultValue} = props;
 

  const {field} = useController({name, rules, defaultValue});
  useEffect(() => {
    if (valueCountry) {
      field.onChange(valueCountry);
    }
  }, [valueCountry]);
  return (
    <>
      <View>
        <Text>{'Country'}</Text>
        <Space lineH={10} />
        <Picker
          containerStyle={{width: '100%'}}
          style={{
            borderColor: Color.brand.border,
            backgroundColor: Color.brand.f9,
          }}
          translation={{
            PLACEHOLDER: user?.country?.name
          }}
          open={openCountry}
          value={valueCountry}
          items={countries}
          setOpen={setOpenCountry}
          setValue={setValueCountry}
        />
      </View>
    </>
  );
}
