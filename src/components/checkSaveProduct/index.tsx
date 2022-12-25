import {ButtonHeart} from '../../screen/shop/style/shop.style';
import Storage from '../../utils/storeData/index';
import React, {useContext, useEffect, useState} from 'react';
import {KEY} from '../../utils/storeData/key';
import {AddressContext} from '../../service/Address/Address.context';
import FavoriteService from '../../service/Favorite/Favorite.service';
import {FavoriteContext} from '../../service/Favorite/Favorite.context';
import {AuthContext} from '../../service/Auth/Auth.context';
import { View } from 'react-native';

export function CheckSaveProduct({item}) {
  const {loadedSaveAddressFn, saveProduct} = useContext(AddressContext);
  const {addFavoriteFn, removeFavoriteFn,favorite} = useContext(FavoriteContext);
  const {isLoginOpen} = useContext(AuthContext);

  const [state, setState] = useState(false);
  function isCherries(product) {
    return product.id === item.id
      
   }
  useEffect(() => {
    const found = favorite?.some(isCherries)
    setState(found);
  }, [favorite]);
  const _onSaveProduct = (nameProduct, product: any) => {
    if (state) {
      removeFavoriteFn(product.id);
      setState(false);
     
    } else {
      addFavoriteFn(product.id)
      setState(true);
     
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
