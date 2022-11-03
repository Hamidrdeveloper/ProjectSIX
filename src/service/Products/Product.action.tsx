import ProductDataService from './Product.service';
import React, {useContext} from 'react';
import {ProductsModel} from './model';
import * as Type from './types';
import {CommentContext} from '../Comment/Comment.context';
export function productsAc(data) {
  return ProductDataService.products(data);
}

export function productsSearchAc(data) {
  return ProductDataService.productsSearch(data);
}
export function categoriesAc() {
  return ProductDataService.categories();
}
export function categoriesTreeAc() {
  return ProductDataService.categoriesTree();
}
export function productByAttributeIdAc(productId: number) {
  return ProductDataService.getVariationsByID(productId);
}
export function productByIdAc(productId: number) {
  return ProductDataService.getVariationsByProduct(productId);
}
export function goToScreenDetails(navigation, product, prFn, cmFn, reFn) {
  navigation.navigate('Details_SCREEN', {data: product});
  // prFn(product.number, navigation);

  cmFn(product.id);
  cmFn(product.id);
  
  // if (product?.productVariationCategories.length > 0) {
  //   reFn(product.productVariationCategories[0].id);
  // } else {
  //   reFn('');
  // }
}
export function goToScreenCategory(navigation, product, prFn) {
  prFn('', product.id);
}
export function widgetsAc() {
  return ProductDataService.widgets();
}
