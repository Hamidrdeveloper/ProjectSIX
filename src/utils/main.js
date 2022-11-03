import { Dimensions } from 'react-native';
import {IMAGE_ADDRESS} from './adress.api';

export const BASE_URL = 'https://api.solutionsapps.shop/api/';
export const regexHtml = /(<([^>]+)>)/gi;
export const widthFullScreen = Dimensions.get('screen').width;

export const TOKEN = {
  token: ' ',
  map: 'pk.eyJ1IjoiaGFtaWRyZGV2ZWxvcGVyIiwiYSI6ImNrOHp3eW4ybTBmamEzZnBydmtybmRrZnAifQ.neIu6a_sJjQycKnNxEdxkA',
};
export function taxCalculationById(res: any){
  let vat =
    res?.sale_price?.value *
    res?.product?.min_order_quantity *
    (1 + res?.product?.default_vat / 100);
  return vat;
}
