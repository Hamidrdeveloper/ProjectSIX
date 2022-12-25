import React, {createContext, ReactElement, useContext, useState} from 'react';
import {KEY} from '../../utils/storeData/key';
import {AddressContext} from '../Address/Address.context';
import {
  addFavoriteAc,
  allFavoritesAc,
  getAllFavoritesAc,
  removeFavoriteAc,
} from './Favorite.action';
import {Favorite} from './types';
import Storage from '../../utils/storeData/index';

interface IFavoriteContext {
  isFavorite: boolean;
  addFavoriteFn: (data: Favorite) => void;
  addAllFavoritesFn: (data: Favorite[]) => void;
  removeFavoriteFn: (id: number) => void;
  getAllFavoritesFn: () => void;
  favorite: Array<Favorite>;
}
export const FavoriteContext = createContext<IFavoriteContext>(
  {} as IFavoriteContext,
);
export default function FavoriteContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [isFavorite, setFavorite] = useState(false);
  const [favorite, setDataFavorites] = useState([]);
  const {loadedSaveAddressFn, saveProduct} = useContext(AddressContext);

  function addFavoriteFn(data: Favorite) {
    addFavoriteAc(data)
      .then(res => {
        getAllFavoritesFn()
      })
      .catch(error => {});
  }
  function addAllFavoritesFn(data: Favorite[]) {
    allFavoritesAc(data)
      .then(res => {})
      .catch(error => {});
  }
  function removeFavoriteFn(id: number) {
    removeFavoriteAc(id)
      .then(res => {
        getAllFavoritesFn()

      })
      .catch(error => {});
  }
  function getAllFavoritesFn() {
    getAllFavoritesAc()
      .then(e => {
        setDataFavorites(e);
      })
      .catch(error => {});
     
  }

  return (
    <FavoriteContext.Provider
      value={{
        isFavorite,
        addFavoriteFn,
        addAllFavoritesFn,
        removeFavoriteFn,
        getAllFavoritesFn,
        favorite,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
}
