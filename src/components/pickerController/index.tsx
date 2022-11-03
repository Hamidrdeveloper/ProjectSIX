/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import {useState} from 'react';
import {useController, UseControllerProps} from 'react-hook-form';
import {Color} from '../../infrastructuer/theme/colors.style';
import Picker from '../picker/components/Picker';
interface PickerProps extends UseControllerProps {
  label: string;
  name: string;
  defaultValue?: string;
  setFormError: Function;
  onChange: Function;
}
export default function PickerController(props: PickerProps) {
  const [value, setValue] = useState(props.defaultValue);
  const [open, setOpen] = useState(false);
  const {name, rules, defaultValue, ...inputProps} = props;
  const {field} = useController({name, rules, defaultValue});
  useEffect(() => {
    field.onChange(props.defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    field.onChange(value);
    props.onChange(value);
  }, [value]);
  return (
    <>
      <Picker
        containerStyle={{width: '100%'}}
        style={{
          borderColor: Color.brand.border,
          backgroundColor: Color.brand.f9,
        }}
        placeholderStyle={{fontSize: 18}}
        placeholder={'Your Country'}
        open={open}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        {...inputProps}
      />
    </>
  );
}
