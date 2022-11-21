import React, {useEffect, useState} from 'react';
import {Space} from '../../infrastructuer/theme/space.style';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
export default function RadioButtonSingle({
  onClick,
  id,
  flag,
}) {
  const [value, setValue] = useState(false);
  const radioClick = data => {
    setValue(!value);
    onClick(!value);
  };
  useEffect(()=>{
    setValue(flag)
  })
  console.log(flag);
  
  return (
    <View style={{width: 30}}>
          <>
            
            <TouchableOpacity onPress={() => radioClick(id)}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 200,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 12,
                    borderWidth: value  ? 6 : 1,
                    borderColor:
                    value? Color.brand.blue : Color.brand.border,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
                <Space lineW={15} />
              </View>
            </TouchableOpacity>
          </>
    </View>
  );
}
