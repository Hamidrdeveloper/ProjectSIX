import React, {useState, useContext, useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Picker from '../../../components/picker/components/Picker';
import {Color} from '../../../infrastructuer/theme/colors.style';
import {Space} from '../../../infrastructuer/theme/space.style';
import {useController, UseControllerProps} from 'react-hook-form';
import {ProfileContext} from '../../../service/Profile/Profile.context';
import i18n from '../../../core/i18n/config';

interface PickerProps extends UseControllerProps {
  label: string;
  name: string;
  defaultValue?: string;
  setFormError: Function;
}
export default function Gender(props: PickerProps) {
  const {user} = useContext(ProfileContext);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      value:i18n.t("Global.Male"),
     
    },
    {
      id: 2,
      value:i18n.t("Global.Female"),
    },
    {
      id: 3,
      value:i18n.t("Global.Other"),
    },
  ]);

  const {name, rules, defaultValue} = props;
  const {field} = useController({name, rules, defaultValue});
  function radioClick(id) {
    setValue(id);
    if (id === 1) {
      field.onChange('male');
    } else {
      if (id === 2) {
        field.onChange('female');
      } else {
        field.onChange('none');
      }
    }
  }
  useEffect(() => {
    if (user.person?.gender === 'male') {
      setValue(1);
      field.onChange('male');
    } else {
      if(user.person?.gender==='female'){
        setValue(2);
        field.onChange('female');
      }else{
        setValue(3);
        field.onChange('none');
      }
   
    }
  }, []);
  return (
    <>
      <View>
        <Text>{i18n.t("Global.Gender")}</Text>
        <Space lineH={10} />
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            justifyContent: 'space-around',
          }}>
          {items.map(val => {
            return (
              <View style={{flexDirection: 'row', width: 100}}>
                <TouchableOpacity
                  key={val.id}
                  onPress={() => radioClick(val.id)}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 12,
                      borderWidth: val.id == value ? 6 : 1,
                      borderColor:
                        val.id == value ? Color.brand.blue : Color.brand.border,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                  <Space lineH={15} />
                  <Text style={{color: Color.brand.black}}>
                    {val.value}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
}
