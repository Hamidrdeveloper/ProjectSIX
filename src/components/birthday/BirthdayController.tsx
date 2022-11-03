/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from 'react';
import {useState} from 'react';
import {useController, UseControllerProps} from 'react-hook-form';
import BirthdayComponent from '.';
import {Color} from '../../infrastructuer/theme/colors.style';
import Picker from '../picker/components/Picker';
interface PickerProps extends UseControllerProps {
  label: string;
  name: string;
  defaultValue?: string;
  setFormError: Function;
}
export default function BirthdayController(props: PickerProps) {
  const {name, rules, defaultValue} = props;
  const {field} = useController({name, rules, defaultValue});
  React.useEffect(() => {
    if (props.defaultValue != null) {
      field.onChange(props.defaultValue);
    }
  }, []);
  return (
    <>
      <BirthdayComponent
        onChange={value => {
          if (value.length >6) {
            field.onChange(value);
          }

          console.log(value);
        }}
      />
    </>
  );
}
