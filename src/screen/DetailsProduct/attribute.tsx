import React, {useContext, useEffect, useState} from 'react';
import Picker from '../../components/picker/components/Picker';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {Attribute} from '../../service/Products/types';
import {TextBlack18, ViewRate} from './style/DetailsProduct.styles';
import styled from 'styled-components';
import {ProductContext} from '../../service/Products/Product.context';

const TextPicker = styled(TextBlack18)`
  width: 30%;
  font-size: 16;
`;
interface Type {
  data: Array<any>;
  setProduct: any;
  product: any;
  onChange: (e, i) => void;
}

export default function AttributeItem({
  data,
  setProduct,
  product,
  onChange,
}: Type) {
  const {productByAttributesFn} = useContext(ProductContext);
  const [openArray, setOpenArray] = useState([]);
  const [openArrayDefault, setOpenArrayDefault] = useState([]);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  useEffect(() => {
    let openData = [];
    data.forEach(() => {
      openData.push(false);
    });
    setOpenArray(openData);
    setOpenArrayDefault(openData);
  }, [data]);
  useEffect(() => {
    if (value != null) {
      setValueFn(value);
    }
  }, [value]);
  const setValueFn = e => {
    console.log('attribute', e);
    let index = 0;
    const selectAttribute = product.filter((res, i) => {
      if (res.id == e) {
        index = i;
        return true;
      }
    });
    if (selectAttribute.length > 0) {
      onChange(selectAttribute[0], index);
    }
  };
  const setOpenLanguage = i => {
    let changeData = openArray.map((v, index) => {
      console.log('typeBox', v + ' ' + index);

      if (index === i) {
        return !v;
      } else {
        return false;
      }
    });

    console.log('typeBox', openArray[i]);

    setOpenArray([...changeData]);
  };
  const ListAttr = () => {
    return (
      <>
        {openArray?.map((value, index) => {
          return typeBox(value, index);
        })}
      </>
    );
  };
  const typeBox = (item: Attribute, index: number) => {
    console.log('typeBox', item);

    return (
      <>
        <Space lineH={20} />
        <ViewRate>
          <TextPicker>{`${data[index][0]?.name} :`}</TextPicker>

          <Picker
            containerStyle={{width: 220}}
            style={{borderColor: Color.brand.border}}
            open={item}
            value={value}
            dropDownDirection="TOP"
            items={data[index]}
            setOpen={() => setOpenLanguage(index)}
            setValue={setValue}
            setItems={setItems}
          />
        </ViewRate>
      </>
    );
  };
  return (
    <>
      <ListAttr />
    </>
  );
}
