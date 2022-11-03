import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';

import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import CancelledView from './cancelledView';
import CompletedView from './completedView';
import ProcessingView from './processingView';
import WaitingView from './waitingView';
const widthFull = Dimensions.get('screen').width;
export default function TabOrder({navigation}) {
  const [index, setIndex] = useState(1);
  const [itemTab, setItemTab] = useState([
    {id: 1, value: true, text: 'Processing'},
    {id: 2, value: true, text: 'Completed'},
    {id: 3, value: true, text: 'Waiting'},
    {id: 4, value: true, text: 'Cancelled'},
  ]);
  function reloader(value) {
    setItemTab([]);
    setItemTab(value);
  }
  function TabView() {
    {
      switch (index) {
        case 1:
          return (
            <View style={{width: widthFull}}>
              <ProcessingView navigation={navigation} />
            </View>
          );
        case 2:
          return (
            <View style={{width: widthFull}}>
              <CompletedView navigation={navigation} />
            </View>
          );
        case 3:
          return (
            <View style={{width: widthFull}}>
              <WaitingView navigation={navigation} />
            </View>
          );
        case 4:
          return (
            <View style={{width: widthFull}}>
              <CancelledView />
            </View>
          );
      }
    }
  }
  return (
    <>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
        }}>
        {itemTab.map((data, i) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIndex(data.id);
                reloader(itemTab);
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 15,
                    color:
                      index == data.id
                        ? Color.brand.blue
                        : Color.brand.textGrey,
                  }}>
                  {data.text}
                </Text>
                <Space lineH={10} />
                <View
                  style={{
                    width: 80,
                    borderTopWidth: index == data.id ? 2 : 1,
                    borderTopEndRadius: 4,
                    borderRadius: 4,
                    borderTopColor:
                      index == data.id ? Color.brand.blue : Color.brand.fc,
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View> */}
      <Space lineH={15} />
      <View style={{width: widthFull}}>
        <ProcessingView navigation={navigation} />
      </View>
    </>
  );
}
