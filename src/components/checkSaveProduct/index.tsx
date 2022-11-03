import {ButtonHeart} from '../../screen/shop/style/shop.style';
import Storage from '../../utils/storeData/index';
import React, {useContext, useEffect, useState} from 'react';
import {KEY} from '../../utils/storeData/key';
import {AddressContext} from '../../service/Address/Address.context';
import FavoriteService from '../../service/Favorite/Favorite.service';
import {FavoriteContext} from '../../service/Favorite/Favorite.context';
import {AuthContext} from '../../service/Auth/Auth.context';

export function CheckSaveProduct({item}) {
  const {loadedSaveAddressFn, saveProduct} = useContext(AddressContext);
  const {addFavoriteFn, removeFavoriteFn} = useContext(FavoriteContext);
  const {isLoginOpen} = useContext(AuthContext);

  const [state, setState] = useState(false);

  useEffect(() => {
    Storage.retrieveData(`${item.id}`).then(res => {
      if (res != null) {
        setState(true);
      } else {
        setState(false);
      }
    });
  }, [saveProduct]);
  const _onSaveProduct = (nameProduct, product: any) => {
    if (state) {
      // removeFavoriteFn(product.id);
      setState(false);
      Storage.removeData(`${product.id}`);
      Storage.retrieveData(KEY.MySave).then(res => {
        let productsSave = JSON.parse(res);
        let setData = productsSave?.filter(function (value) {
          return value.id !== product.id;
        });

        console.log('setData', setData);
        Storage.storeData(KEY.MySave, JSON.stringify(setData)).then(() => {
          loadedSaveAddressFn();
        });
      });
    } else {
      // addFavoriteFn(product.id)
      setState(true);
      Storage.storeData(`${product.id}`, JSON.stringify(product));
      Storage.retrieveData(KEY.MySave).then(res => {
        let productsSave = [];
        if (res != null) {
          productsSave = [...JSON.parse(res), product];
        } else {
          productsSave.push(product);
        }

        console.log(productsSave);
        Storage.storeData(KEY.MySave, JSON.stringify(productsSave)).then(() => {
          loadedSaveAddressFn();
        });
      });
    }
  };
  return (
    <>
      {isLoginOpen ? (
        <ButtonHeart
          set={state ? 'bold' : 'light'}
          onPress={() => _onSaveProduct(item.name, item)}
        />
      ) : null}
    </>
  );
  // });
}
