import React from 'react';
import PropTypes from 'prop-types';
import http from '../../utils/http-common';
import {TOKEN} from '../../utils/main';
import Storage from '../../utils/storeData';
import * as Type from './types';
import * as Address from '../../utils/adress.api';
import {User} from 'react-native-iconly';
import ErrorManagement from '../../utils/catchError';

class ProductDataService {
  taxCalculation(data: any) {
    return data.map(res => {
      // let vat =
      //   res?.sale_price?.value_after_discount *
      //   res?.product?.min_order_quantity *
      //   (1 + res?.product?.default_vat / 100);
        let vat = res?.sale_price?.gross_value_after_discount?.toFixed(2);
      return {
        ...res,
        sale_price: {
          value: vat,
          value_not_vat: res?.sale_price?.gross_value_after_discount?.toFixed(2),
          iso3:res?.sale_price?.iso3,
          gross_value:res?.sale_price?.gross_value?.toFixed(2)
        },
      };
    });
  }
  taxCalculationById(res: any) {
    // let vat =
    //   res?.sale_price?.value_after_discount *
    //   res?.product?.min_order_quantity *
    //   (1 + res?.product?.default_vat / 100);
    let vat = res?.sale_price?.gross_value_after_discount?.toFixed(2);
    return {
      ...res,
      sale_price: {
        value: vat,
        value_not_vat: res?.sale_price?.gross_value_after_discount?.toFixed(2),
        iso3:res?.sale_price?.iso3,
        gross_value:res?.sale_price?.gross_value?.toFixed(2)
      },
    };
  }
  productsSearch(data: Type.Products) {
    console.log(Address.PRODUCTS_VARIATIONS_ADDRESS, data);

    return http
      .get(Address.PRODUCTS_VARIATIONS_ADDRESS, {params: data})
      .then(res => {
        console.log(Address.PRODUCTS_VARIATIONS_ADDRESS, res);

        return this.taxCalculation(res.data.data);
      })
      .catch(error => {
        console.log(Address.PRODUCTS_VARIATIONS_ADDRESS, error.response);
      });
  }
  products(data: Type.Products) {
    console.log(Address.PRODUCTS_BY_ID_ADDRESS, data);

    return http
      .get(Address.PRODUCTS_BY_ID_ADDRESS, {params: data})
      .then(res => {
        console.log(Address.PRODUCTS_BY_ID_ADDRESS, res);

        return this.taxCalculation(res.data.data);
      })
      .catch(error => {
        console.log(Address.PRODUCTS_ADDRESS, error.response);
      });
  }
  categories() {
    console.log(Address.PRODUCTS_CATEGORIES_ADDRESS, TOKEN.token);

    return http
      .get(Address.PRODUCTS_CATEGORIES_ADDRESS)
      .then(res => {
        console.log(Address.PRODUCTS_CATEGORIES_ADDRESS, res.data.data);
        let dataArray = res.data.data.filter(res => {
          if (res.show_in_header && res.show_in_website) return res;
        });
        return dataArray;
      })
      .catch(error => {
        console.log(Address.PRODUCTS_CATEGORIES_ADDRESS, error.response);
      });
  }
  categoriesTree() {
    console.log(Address.PRODUCTS_CATEGORIES_TREE_ADDRESS, TOKEN.token);

    return http
      .get(Address.PRODUCTS_CATEGORIES_TREE_ADDRESS)
      .then(res => {
        console.log(Address.PRODUCTS_CATEGORIES_TREE_ADDRESS, res.data.data);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.PRODUCTS_CATEGORIES_TREE_ADDRESS, error.response);
      });
  }

  async getVariationsByID(productId: number): Promise<Type.ProductVariation> {
    console.log(
      Address.PRODUCTS_BY_ID_ADDRESS,
      Address.PRODUCTS_BY_ID_ADDRESS + 'id' + productId,
    );
    return http
      .get(Address.PRODUCTS_BY_ID_ADDRESS + '/product/' + productId)
      .then(res => {
        console.log(Address.PRODUCTS_BY_ID_ADDRESS, res);
        return this.taxCalculationById(res.data.data);
      })
      .catch(error => {
        console.log(Address.PRODUCTS_BY_ID_ADDRESS, error.response);
      });
  }
  async getVariationsByProduct(
    productId: number,
  ): Promise<Type.ProductVariation> {
    console.log(
      Address.PRODUCTS_BY_ID_ADDRESS,
      Address.PRODUCTS_BY_ID_ADDRESS + 'id' + productId,
    );
    return http
      .get(Address.PRODUCTS_BY_ID_ADDRESS + '/product/' + productId)
      .then(res => {
        console.log(Address.PRODUCTS_BY_ID_ADDRESS, res);
        return this.taxCalculation(res.data.data);
      })
      .catch(error => {
        console.log(Address.PRODUCTS_BY_ID_ADDRESS, error.response);
      });
  }
  async widgets() {
    return http
      .get(Address.widgets)
      .then(res => {
        console.log(Address.widgets, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.widgets, error.response);
      });
  }
}
export default new ProductDataService();
