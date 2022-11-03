import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useController, UseControllerProps} from 'react-hook-form';
interface CheckBoxProps extends UseControllerProps {
  label: string;
  name: string;
  defaultValue?: boolean;
  setFormError: Function;
  isCheck: boolean;
}
function ControlledCheckBox(props: CheckBoxProps) {
  const [flagBox, setFlagBox] = useState(props.isCheck);
 
  const {name, rules, defaultValue} = props;

  const {field} = useController({name, rules, defaultValue});
  
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setFlagBox(!flagBox);
          field.onChange(!flagBox);
        }}>
        {flagBox ? (
          <View
            style={{
              borderColor: Color.brand.border,
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: Color.brand.blue,
                width: 16,
                height: 16,
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="check" color={Color.brand.white} size={15} />
            </View>
          </View>
        ) : (
          <View
            style={{
              borderColor: Color.brand.border,
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
      </TouchableOpacity>
    </>
  );
}

interface propTypes {
  isCheck: boolean;
}

export default ControlledCheckBox;
