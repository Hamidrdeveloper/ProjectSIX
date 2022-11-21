import React from 'react';
import {ProductsModel} from './model';
import FavoriteDataService from './Favorite.service';
import {Favorite} from './types';
export function allFavoritesAc(data: Favorite[]) {
  return FavoriteDataService.addAllFavorites(data);
}
export function addFavoriteAc(data: Favorite) {
  return FavoriteDataService.addFavorite(data);
}
export function removeFavoriteAc(id: number) {
  return FavoriteDataService.removeFavorite(id);
}
export function getAllFavoritesAc() {
  return FavoriteDataService.getAllFavorites();
}
