import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  StyleSheet,
} from 'react-native';

import {
  useController,
  useFormContext,
  ControllerProps,
  UseControllerProps,
} from 'react-hook-form';
import {TextInputSign} from '../../screen/signUp/style/signUp.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {TextInputInform} from '../../css/main.style';

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string;
  name: string;
  defaultValue?: string;
  setFormError: Function;
}
export const ControlledInput = (props: TextInputProps) => {
  const {name, label, rules, defaultValue, ...inputProps} = props;
  console.log('rules', rules);

  const {field} = useController({name, rules, defaultValue});
  React.useEffect(() => {
    console.log(props.defaultValue);
    
    if (props.defaultValue != null) {
      field.onChange(props.defaultValue);
    } else {
      field.onChange(' ');
    }
  }, []);
  return (
    <>
      <Space lineH={10} />
      {label && (
        <Text style={styles.label}>
          {label}
          {rules != null ? <Text style={{color: 'red'}}>{'*'}</Text> : null}
        </Text>
      )}
      <Space lineH={10} />
      <TextInputInform
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...inputProps}
      />
    </>
  );
};
const styles = StyleSheet.create({
  label: {
    color: 'black',
  },
  container: {
    flex: -1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
    borderColor: 'white',
    borderWidth: 1,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  errorContainer: {
    flex: -1,
    height: 25,
  },
  error: {
    color: Color.brand.red,
  },
});
