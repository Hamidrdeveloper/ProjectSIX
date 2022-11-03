import React, {useContext, useState} from 'react';
import CheckboxTree from 'react-native-checkbox-tree';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Color} from '../../infrastructuer/theme/colors.style';
import {BackgroundView, HandleEvent, Padding} from '../../css/main.style';
import HeaderScComponent from '../../components/header2';
import {Card} from 'react-native-elements';
import {ProductContext} from '../../service/Products/Product.context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Space} from '../../infrastructuer/theme/space.style';

function CategoriesFilterScreen({navigation}) {
  const {categoriesTreeItem, searchProductsFn} = useContext(ProductContext);
  const [selectCategory, setSelectCategory] = useState([]);
  function onSelectCategory(item: number) {
    console.log(item);
    setSelectCategory([...selectCategory, item]);
  }
  return (
    <BackgroundView>
      <ScrollView>
        <HeaderScComponent
          navigation={navigation}
          title={'Categories'}
          details={'Delete All filters'}
        />
        <CheckboxTree
          data={categoriesTreeItem}
          textField="title"
          childField="childs"
          textStyle={{color: 'black'}}
          iconColor="black"
          iconSize={30}
          renderItem={({item, isSelect, isOpen, onOpen, onClose, onSelect}) => (
            <View style={styles.wrapItem}>
              {isOpen ? (
                <TouchableOpacity onPress={onClose}>
                  <AntDesign size={30} name="arrowright" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onOpen}>
                  <AntDesign size={30} name="arrowdown" />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() => {
                  onSelect();
                  onSelectCategory(item.id);
                }}>
                <Ionicons
                  size={26}
                  name={isSelect ? 'checkbox-outline' : 'square-outline'}
                />
              </TouchableOpacity>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          )}
          onSelect={item => {
            console.log(item);
          }}
        />
        <Space lineH={20} />
      </ScrollView>
      <Card
        containerStyle={{
          height: 70,
          width: '100%',
          position: 'absolute',
          bottom: 15,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: Color.brand.white,
        }}>
        <HandleEvent
          onPress={() => {
            searchProductsFn('', selectCategory, '');
          }}
          style={{
            height: 50,
            width: '100%',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            borderColor: Color.brand.border,
            borderWidth: 1,
            backgroundColor: Color.brand.white,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: Color.brand.black,
            }}>
            {'View Products'}
          </Text>
        </HandleEvent>
      </Card>
    </BackgroundView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
  },
  wrapItem: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
  },
  iconItem: {
    marginHorizontal: 8,
  },
});
export default CategoriesFilterScreen;
