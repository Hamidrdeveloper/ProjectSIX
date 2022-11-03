/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import StepIndicator from '../step-indicator/index';

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 8,
  stepStrokeCurrentColor: Color.brand.green,
  stepStrokeWidth: 8,
  stepStrokeFinishedColor: Color.brand.green,
  stepStrokeUnFinishedColor: Color.brand.c4,
  separatorFinishedColor: Color.brand.green,
  separatorUnFinishedColor: Color.brand.c4,
  stepIndicatorFinishedColor: '#EEEEEE',
  stepIndicatorUnFinishedColor: '#EEEEEE',
  stepIndicatorCurrentColor: '#EEEEEE',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: Color.brand.green,
  stepIndicatorLabelFinishedColor: '#EEEEEE',
  stepIndicatorLabelUnFinishedColor: '#EEEEEE',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: Color.brand.green,
};

const IndicatorStep = ({labels,currentPosition,stepCount}) => {
  const [startValue, setStartValue] = useState(new Animated.Value(1));
  const [endValue, setEndValue] = useState(0);
  const setIndex = () => {
    if (endValue > 2) {
      setEndValue(endValue - 1);
    } else {
      setEndValue(endValue + 1);
    }
  };
  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={currentPosition}
      stepCount={stepCount}
      labels={labels}
      onPress={() => setIndex()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});
export default IndicatorStep;
