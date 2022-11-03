import React from 'react';
import Storage from '../../utils/storeData';
import {Favorite} from './types';
const FAVORITE_KEY = 'favorites';
import * as Address from '../../utils/adress.api';
import http from '../../utils/http-common';

class FavoriteDataService {
  async addAllFavorites(favorites: Favorite[]): Promise<boolean> {
    return Storage.storeData(FAVORITE_KEY, JSON.stringify(favorites));
  }

  async addFavorite(favorite: Favorite): Promise<boolean> {
    console.log(favorite);
    return http
    .put(Address.Favorites, {product_variation_ids: [favorite]})
    .then(res => {
      console.log(Address.Favorites, res);
      return res.data.data;
    })
    .catch(error => {
      console.log(Address.Favorites, error.response);
    });
  }

  async removeFavorite(id: number): Promise<boolean> {
    console.log(id);
    return http
    .put(Address.Favorites, {product_variation_ids: [id]})
    .then(res => {
      console.log(Address.Favorites, res);
      return res.data.data;
    })
    .catch(error => {
      console.log(Address.Favorites, error.response);
    });
  }

  async getAllFavorites(): Promise<Favorite[]> {
    return http
    .get(Address.Favorites + '?per_page=50')
    .then(res => {
      console.log(Address.PAYMENT_METHODS, res);
      return res.data.data;
    })
    .catch(error => {
      console.log(Address.PAYMENT_METHODS, error.response);
    });
}
}
export default new FavoriteDataService();
