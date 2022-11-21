import React, {ElementType} from 'react';
import {View} from 'react-native';
import {Dimensions, FlatList, ListRenderItemInfo} from 'react-native';
import ContentLoader from 'react-native-content-loader';
import { Card } from 'react-native-elements';
import {Circle, Rect} from 'react-native-svg';
import { Padding } from '../../css/main.style';
declare type Props<ItemT = any> = {
  renderItem: any;
  data: ReadonlyArray<ItemT> | null | undefined | any;
  snap: number;
  height: number;
  isLoading: boolean;
};
export default function FlatListSlide({
  renderItem,
  data,
  snap,
  height,
  isLoading,
}: Props<any>) {
  const renderDefault = () => {
    return (
      <Card
          containerStyle={{
            width: 180,
            height: 320,
            margin: 8,
            borderRadius: 8,
            padding: 5,
          }}>
      <ContentLoader height={210} width={181} duration={1000}>
        <Rect x="0" y="13" rx="5" ry="5" width="140" height="160" />
        <Rect x="0" y="180" rx="6" ry="6" width="130" height="13" />
        <Rect x="0" y="200" rx="6" ry="6" width="120" height="8" />
        <Rect x="0" y="210" rx="6" ry="6" width="100" height="8" />
      </ContentLoader>
      </Card>
    );
  };
  return (
    <>
      {!isLoading ? (
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={renderItem}
          horizontal={true}
          numColumns={1}
          initialNumToRender={5}
          windowSize={5}
          showsHorizontalScrollIndicator={false}
          style={{height: height, flexGrow: 0}}
          snapToInterval={Dimensions.get('window').width - snap}
          snapToAlignment={'center'}
        />
      ) : (
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={renderDefault}
          horizontal={true}
          numColumns={1}
          initialNumToRender={5}
          windowSize={5}
          showsHorizontalScrollIndicator={false}
          style={{height: height, flexGrow: 0}}
          snapToInterval={Dimensions.get('window').width - snap}
          snapToAlignment={'center'}
        />
      )}
    </>
  );
}
