import React, { PureComponent } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

type PropsType = { index?: number };

export function TransitionView({ index, ...rest }) {
    return (
      <Animatable.View
        animation="fadeIn"
        duration={300}
        delay={5}
        useNativeDriver
        {...rest}
      />
    );
  }