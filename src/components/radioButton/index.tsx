import React, {useState} from 'react';
import {Space} from '../../infrastructuer/theme/space.style';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
export default function RadioButton({
  onClick,
  items,
  flexDirection,
  isImage = false,
  isDescription = true,
}) {
  const [value, setValue] = useState(0);
  const radioClick = data => {
    setValue(data);
    onClick(data);
  };

  return (
    <View style={{flexDirection: flexDirection, padding:5,width: `100%`,justifyContent:"space-around"}}>
      {items.map(val => {
        return (
          <>
            <Space lineH={40} />
            <TouchableOpacity onPress={() => radioClick(val.id)}>
              <View
                style={{
                  flexDirection: 'row',
                
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 12,
                    borderWidth: val.id == value ? 6 : 1,
                    borderColor:
                      val.id == value ? Color.brand.blue : Color.brand.border,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
                <Space lineW={15} />
                {isImage ? (
                  <>
                    <Image
                      resizeMode="center"
                      style={{width: 50, height: 50}}
                      source={val.image}
                    />
                    <Space lineW={15} />
                  </>
                ) : null}
                <View>
                  <Text
                    style={{
                      fontSize: isImage ? 16 : 14,
                      color: Color.brand.black,
                    }}>
                    {val.title}
                  </Text>

                  {isDescription ? null : (
                    <>
                   
                      <Space lineH={10} />
                      <Text style={{fontSize: 14, color: Color.brand.textGrey}}>
                        {val.description}
                      </Text>
                    </>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
}
