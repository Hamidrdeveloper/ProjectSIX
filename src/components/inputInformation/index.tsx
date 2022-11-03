import React from 'react';
import PropTypes from 'prop-types';
import {GestureResponderEvent, Text, TouchableOpacity, View} from 'react-native';
import {ChevronRight, IconlyProvider} from 'react-native-iconly';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import LineW from '../lineW';

function ButtonInformation({title,ButtonTitle,onClick}:ButtonInformation) {
  return (
    <>
      <TouchableOpacity onPress={() => onClick()}>
        <View style={{paddingBottom: 10}}>
          <Text style={{color: Color.brand.textGrey, fontSize: 16}}>
            {title}
          </Text>
          <Space lineH={15} />
          <View
            style={{
              flexDirection: 'row',
              width: `100%`,
              height: 50,
              justifyContent: 'space-between',
            }}>
            <Text style={{color: Color.brand.black, fontSize: 17}}>
              {ButtonTitle}
            </Text>
            <IconlyProvider
              primaryColor={Color.brand.black}
              secondaryColor={Color.brand.black}
              stroke="bold"
              size="xlarge">
              <ChevronRight />
            </IconlyProvider>
          </View>
          <LineW />
        </View>
      </TouchableOpacity>
    </>
  );
}

interface ButtonInformation  {
  title: String,
  ButtonTitle: String,
  onClick:(()=>void),
};

export default ButtonInformation;
