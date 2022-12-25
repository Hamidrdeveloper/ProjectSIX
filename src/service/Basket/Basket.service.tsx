import React from 'react';
import PropTypes from 'prop-types';
import http from '../../utils/http-common';
import {TOKEN} from '../../utils/main';
import Storage from '../../utils/storeData';
import * as Type from './types';
import * as Address from '../../utils/adress.api';

class BasketDataService {
  taxCalculation(data: any) {
    return data.map(res => {
      let vat = res?.sale_price?.gross_value_after_discount;
      return {
        ...res,
        sale_price: {
          value: vat,
          gross_value: res?.sale_price?.gross_value,
          value_not_vat: res?.sale_price?.gross_value_after_discount,
          iso3:res?.sale_price?.iso3
        },
      };
    });
  }
  bulkAdd(basket: Type.Baskets) {
    console.log(Address.Basket_Bulk_ADDRESS, basket);
    let data = {items: basket};
    return http
      .post(Address.Basket_Bulk_ADDRESS, JSON.stringify(data))
      .then(res => {
        console.log(Address.Basket_Bulk_ADDRESS, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.Basket_Bulk_ADDRESS, error.response);
      });
  }
  crateOrderSale(data: Type.BasketAddForPay) {
    return http
      .post(Address.Basket_CREATE_ORDER_ADDRESS, JSON.stringify(data))
      .then(res => {
        console.log(Address.Basket_CREATE_ORDER_ADDRESS, res);
        return true;
      })
      .catch(error => {
        console.log(Address.Basket_CREATE_ORDER_ADDRESS, error.response);
        return false;
      });
  }
  orderSale() {
    return http
      .get(
        Address.Basket_OrderSale_ADDRESS +
          '?page=1&per_page=30&orderBy={"id":"DESC"}',
      )
      .then(res => {
        console.log(Address.Basket_OrderSale_ADDRESS, res);
        return this.taxCalculation(res.data.data);
      })
      .catch(error => {
        console.log(Address.Basket_OrderSale_ADDRESS, error.response);
        return [];
      });
  }
  walletCoin(max) {
    // .get(Address.walletCoin + `?maxAmount=${max}`)

    return http
      .get(
        `${Address.walletCoin}?maxAmount=${max}`,
      )
      .then(res => {
        console.log(Address.walletCoin, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.walletCoin, error.response);
        return null;
      });
  }
  basketAdd() {
    return http
      .get(Address.Basket_OrderSale_ADDRESS + '?page=1&per_page=30')
      .then(res => {
        console.log(Address.Basket_OrderSale_ADDRESS, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.Basket_OrderSale_ADDRESS, error.response);
      });
  }
  paymentMethods() {
    return http
      .get(
        Address.PAYMENT_METHODS +
          '?page=1&per_page=100&companyCountryId=83&companyCurrencyId=49',
      )
      .then(res => {
        console.log(Address.PAYMENT_METHODS, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.PAYMENT_METHODS, error.response);
      });
  }
  coupons(code: string) {
    return http
      .post(Address.COUPONS, {code: code})
      .then(res => {
        console.log(Address.PAYMENT_METHODS, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.PAYMENT_METHODS, error.response);
      });
  }
  couponsId(code: string) {
    return http
      .get(Address.COUPONS_ID + code)
      .then(res => {
        console.log(Address.PAYMENT_METHODS, res);
        return this.taxCalculation(res.data.data?.productVariations);
      })
      .catch(error => {
        console.log(Address.PAYMENT_METHODS, error.response);
      });
  }
  favorites() {
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
  favoritesAdd(id: number) {
    return http
      .post(Address.Favorites, {product_variation_ids: [{id}]})
      .then(res => {
        console.log(Address.Favorites, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.Favorites, error.response);
      });
  }
  orderSaleID(id: number) {
    return http
      .get(Address.Basket_OrderSale_ADDRESS + `/${id}`)
      .then(res => {
        console.log(Address.Basket_OrderSale_ADDRESS, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.Basket_OrderSale_ADDRESS, error.response);
      });
  }
  userLevel() {
    return http
      .get(Address.USERS_LEVEL)
      .then(res => {
        console.log(Address.USERS_LEVEL, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.USERS_LEVEL, error.response);
      });
  }
  sendUser(id: number) {
    return http
      .post(Address.SEND_USER, {user_id: id})
      .then(res => {
        console.log(Address.SEND_USER, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.SEND_USER, error.response);
        return 'null';
      });
  }
  transportationRules(id: number) {
    return http
      .post(Address.SEND_USER, {user_id: id})
      .then(res => {
        console.log(Address.SEND_USER, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.SEND_USER, error.response);
        return 'null';
      });
  }
  shopConfig() {
    return http
      .get(Address.SHOP_CONFIG)
      .then(res => {
        console.log(Address.SHOP_CONFIG, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.SEND_USER, error.response);
        return 'null';
      });
  }
  dataConfig() {
    return http
      .get(Address.DATA_CONFIG)
      .then(res => {
        console.log(Address.DATA_CONFIG, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.DATA_CONFIG, error.response);
        return 'null';
      });
  }
}
export default new BasketDataService();
