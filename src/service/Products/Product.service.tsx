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
        let vat = res?.sale_price?.gross_value_after_discount;
      return {
        ...res,
        sale_price: {
          value: vat,
          value_not_vat: res?.sale_price?.gross_value_after_discount,
        },
      };
    });
  }
  taxCalculationById(res: any) {
    // let vat =
    //   res?.sale_price?.value_after_discount *
    //   res?.product?.min_order_quantity *
    //   (1 + res?.product?.default_vat / 100);
    let vat = res?.sale_price?.gross_value_after_discount;
    return {
      ...res,
      sale_price: {
        value: vat,
        value_not_vat: res?.sale_price?.gross_value_after_discount,
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
      .get(Address.PRODUCTS_BY_ID_ADDRESS + '?productId=' + productId)
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
      .get(Address.PRODUCTS_BY_ID_ADDRESS, {
        params: {productId: productId, page: 1, per_page: 10},
        headers: {
          Host: 'api.solutionsapps.shop',
          'X-PANEL': true,
          Accept: 'application/json, text/plain, */*',
          Referer: 'https://admin.solutionsapps.shop/',
          Origin: 'https://admin.solutionsapps.shop/',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODU1NDExYWU1MWMxNTU5MDVkOTI2ZDk1Nzk0YWJhMTQ3YmU1OWNmYjVhZTZiNDM0ZTNhNWIxZDVjYzQwM2RhNTNhNWZiMTcwOWIxZjE4M2MiLCJpYXQiOjE2NTM4MjMyNTAuNjEzNzQ5LCJuYmYiOjE2NTM4MjMyNTAuNjEzNzUzLCJleHAiOjE2ODUzNTkyNTAuNjExNzM1LCJzdWIiOiIyMCIsInNjb3BlcyI6W119.CGzCgaKEirdya_FCD856I-E5xMWWed4UZ9GJmIbsgNsr5COTz0KEL8OOXLlz9yb9_ZtkYG1aNyW580FL_Fp-m5CIqE_EzOUTuEaBMWnm8h2-K9lzTOMFP2-r0rDsuy7mZwvnvJ9YKyzDBn1oTWN2mObtAuwANXZeMUMkarf-V7OIriHdKUuwy2zxiz3-DUUsMUcy6r61CaznRnnY0Xno_D2saTgws90RMSi_oGBXArSdcAh2W6X5NRJFb9Luy09VDlX9z3chVu9u1qRg-Ja5Vq1fOcAEKvU0GdtMyG_FMXHVALyzmqfqSYsUZYgLfeGFnxZZHhC_nq7T0hvydKWrHEMn9y2yUlUu54orxHQL7eD6DU3zwtXk3meyE19I03GoFnojauWLetGA8wzNf4kc4B8nzikjTf54v8fnRjF7W2BvA5BXOVxymUvipUF1Iy6OtSZwfTVcVg5_dYexAq4SR07wuk5kGuA4hI7EMEugDtkuIs_b72c5KnedwVku_y9YPZYii89yJpKasfGlte9048H5gGB4pRsQZ-JX2zdA0wgFs6fBrUH7irkZI9UNOU0wLRueN4XutY0T7R96x2ppuHpRFcY-IOc5bD_6Tw9-8rAL2n1_7E0fbKkVR-mrI_fcD27zaqg8uAQFUnTOHJJwNkKV3gxDitNyBv2kxjFJs1o',
        },
      })
      .then(res => {
        console.log(Address.PRODUCTS_BY_ID_ADDRESS, res);
        return res.data.data;
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
