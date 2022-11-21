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
      .then(res => {})
      .catch(error => {});
  }
  function addAllFavoritesFn(data: Favorite[]) {
    allFavoritesAc(data)
      .then(res => {})
      .catch(error => {});
  }
  function removeFavoriteFn(id: number) {
    removeFavoriteAc(id)
      .then(res => {})
      .catch(error => {});
  }
  function getAllFavoritesFn() {
    // getAllFavoritesAc()
    //   .then(e => {
    //     Storage.retrieveData(KEY.MySave).then(res => {
    //       console.log(KEY.MySave, JSON.parse(res));
    //       e.map(x => {
    //         Storage.removeData(`${x.id}`);
    //       });
    //     });
    //     e.map(x => {
    //       console.log('====================================');
    //       console.log("SaveLoade",x);
    //       console.log('====================================');
    //       Storage.storeData(`${x.id}`, JSON.stringify(x));
          
    //     });
    //   })
    //   .catch(error => {});
    //   Storage.retrieveData(KEY.MySave).then(res => {
    //         let productsSave = [];
    //         if (res != null) {
    //           productsSave = [...JSON.parse(res), x];
    //         } else {
    //           productsSave.push(x);
    //         }

    //         console.log(productsSave);
    //         Storage.storeData(KEY.MySave, JSON.stringify(productsSave)).then(
    //           () => {
    //             loadedSaveAddressFn();
    //           },
    //         );
    //       });
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
