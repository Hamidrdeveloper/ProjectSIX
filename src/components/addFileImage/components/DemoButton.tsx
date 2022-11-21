import React from 'react';
import {StyleSheet, Text, ViewStyle, TextStyle, Pressable} from 'react-native';

interface Props {
  onPress: () => void;
}

export function DemoButton({
  onPress,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.container,
      ]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: 45,
    width:`100%`,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
});