import BasketDataService from './Basket.service';
import React, {useContext} from 'react';
import * as Type from './types';
import {CommentContext} from '../Comment/Comment.context';
export function BasketsAc(data) {
  return BasketDataService.bulkAdd(data);
}
export function crateOrderSaleAc(data: Type.BasketAddForPay) {
  return BasketDataService.crateOrderSale(data);
}
export function orderSaleIDAc(id: number) {
  return BasketDataService.orderSaleID(id);
}
export function walletCoinAc(max: number) {
  return BasketDataService.walletCoin(max);
}
export function orderSalesAc() {
  return BasketDataService.orderSale();
}
export function paymentMethodsAc() {
  return BasketDataService.paymentMethods();
}
export function couponsAc(code: string) {
  return BasketDataService.coupons(code);
}
export function favoritesAc() {
  return BasketDataService.favorites();
}
export function favoritesAddAc(id: number) {
  return BasketDataService.favoritesAdd(id);
}
export function couponsIdAc(id: number) {
  return BasketDataService.couponsId(id);
}


export function userLevelAc() {
  return BasketDataService.userLevel();
}
export function sendUserAc(id: number) {
  return BasketDataService.sendUser(id);
}
export function shopConfigAc() {
  return BasketDataService.shopConfig();
}
export function dataConfigAc() {
  return BasketDataService.dataConfig();
}

