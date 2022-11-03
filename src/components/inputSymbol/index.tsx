import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';

export default function InputSymbol({symbol, containerStyle, onChange}) {
  const [value, setValue] = useState('');

  return (
    <>
      <View
        style={[
          {
            alignItems: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: Color.brand.border,
            borderRadius: 5,
            height: 40,
          },
          containerStyle,
        ]}>
        <TextInput
          style={{maxWidth: `78%`}}
          value={value}
          onChangeText={e => {
            onChange(e);
            setValue(e);
          }}
        />
        <Text style={{color: Color.brand.black}}>{symbol}</Text>
      </View>
    </>
  );
}
