/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  useController,
  UseControllerProps,
  useForm,
} from 'react-hook-form';
import {ButtonColor, ViewRowBetween} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {SignUpModel} from '../../service/Auth/model';
import Picker from '../picker/components/Picker';
import PickerController from '../pickerController';
import {days} from './model';
const date = {
  day: 0,
  month: 0,
  year: 0,
};
interface Birthday {
  onChange: Function;
  top:false
}
interface dateType {
  day: number;
  month: number;
  year: number;
}
export default function BirthdayComponent(props: Birthday) {
  const {...methods} = useForm();

  const [valueDay, setValueDay] = useState(0);
  const [valueMonth, setValueMonth] = useState(0);
  const [valueYear, setValueYear] = useState(null);
  const [itemsYear, setItemsYear] = useState([]);
  const [itemsDay, setItemsDay] = useState([]);
  const [itemsMonth, setItemsMonth] = useState([
    {label: 'January', value: 1},
    {label: 'February', value: 2},
    {label: 'March', value: 3},
    {label: 'April', value: 4},
    {label: 'May', value: 5},
    {label: 'June', value: 6},
    {label: 'July', value: 7},
    {label: 'August', value: 8},
    {label: 'September', value: 9},
    {label: 'October', value: 10},
    {label: 'November', value: 11},
    {label: 'December', value: 12},
  ]);
  useEffect(() => {
    setItemsYear(generateArrayOfYears());
    setItemsDay(generateArrayOfDays(1));
  }, []);

  function onSubmit(value: dateType) {
    let params: dateType = {...date, ...value};
    let setDate = `${params.year}-${
      params.month < 10 ? '0' + params.month : params.month
    }-${params.day < 10 ? '0' + params.day : params.day}`;
    props.onChange(setDate);
    console.log(value);
  }

  const onError: SubmitErrorHandler<dateType> = errors => {
    return console.log('errors', errors);
  };

  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 100;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push({label: i, value: i});
    }
    return years;
  }
  function generateArrayOfDays(e) {
    var max = days[e].value;
    var min = 1;
    var day = [];

    for (var i = min; i <= max; i++) {
      day.push({label: i, value: i});
    }
    return day;
  }
  function onValueMonth(m) {
    setItemsDay(generateArrayOfDays(m));
  }
  return (
    <>
      <FormProvider {...methods}>
        <ViewRowBetween>
          <PickerController
            name="day"
            containerStyle={{width: '32%'}}
            placeholder={'Day'}
            dropDownDirection={props.top?"TOP":"BOTTOM"}
            zIndex={15}
            placeholderStyle={{fontSize: 18}}
            style={{
              borderColor: Color.brand.border,
              backgroundColor: Color.brand.f9,
            }}
            items={itemsDay}
            onChange={methods.handleSubmit(onSubmit, onError)}
          />
          <PickerController
            name="month"
            containerStyle={{width: '32%'}}
            placeholderStyle={{fontSize: 18}}
            dropDownDirection={props.top?"TOP":"BOTTOM"}
            placeholder={'Month'}
            zIndex={15}
            style={{
              borderColor: Color.brand.border,
              backgroundColor: Color.brand.f9,
            }}
            items={itemsMonth}
            onChange={methods.handleSubmit(onSubmit, onError)}
          />
          <PickerController
            name={'year'}
            containerStyle={{width: '32%'}}
            placeholderStyle={{fontSize: 18}}
            dropDownDirection={props.top?"TOP":"BOTTOM"}
            placeholder={'Year'}
            zIndex={15}
            style={{
              borderColor: Color.brand.border,
              backgroundColor: Color.brand.f9,
            }}
            items={itemsYear}
            onChange={methods.handleSubmit(onSubmit, onError)}
          />
        </ViewRowBetween>
      </FormProvider>
    </>
  );
}
