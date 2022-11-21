import React, {ElementType} from 'react';
import {View} from 'react-native';
import {Dimensions, FlatList, ListRenderItemInfo} from 'react-native';
import ContentLoader from 'react-native-content-loader';
import {Card} from 'react-native-elements';
import {Circle, Rect} from 'react-native-svg';
import {Padding} from '../../css/main.style';
declare type Props<ItemT = any> = {
  renderItem: any;
  data: ReadonlyArray<ItemT> | null | undefined | any;
  snap: number;
  height: number;
  numColumns: number;
  isLoading: boolean;
};
const widthFull = Dimensions.get('screen').width;

export default function FlatListCustom({
  renderItem,
  data,
  snap,
  height,
  isLoading,
  numColumns,
}: Props<any>) {
  const renderDefault = () => {
    return (
      <View
      style={{width: widthFull / 2}}>
        <ContentLoader height={210} width={181} duration={1000}>
          <Rect x="0" y="13" rx="5" ry="5" width="140" height="160" />
          <Rect x="0" y="180" rx="6" ry="6" width="130" height="13" />
          <Rect x="0" y="200" rx="6" ry="6" width="120" height="8" />
          <Rect x="0" y="210" rx="6" ry="6" width="100" height="8" />
        </ContentLoader>
      </View>
    );
  };
  return (
    <>
      {!isLoading ? (
        <FlatList 
          data={data}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      ) : (
        <FlatList
          data={[1, 2, 3, 4,5,6,7]}
          renderItem={renderDefault}
          numColumns={numColumns}
        />
      )}
    </>
  );
}
