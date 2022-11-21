import React from 'react';
import PropTypes from 'prop-types';
import http from '../../utils/http-common';
import {TOKEN} from '../../utils/main';
import Storage from '../../utils/storeData';
import * as Type from './types';
import * as Address from '../../utils/adress.api';

class CommentDataService {
  crateComment(data: Type.Comments) {
    console.log(Address.PRODUCTS_COMMENT, data);

    return http
      .post(Address.PRODUCTS_COMMENT, data)
      .then(res => {
        console.log(Address.PRODUCTS_COMMENT, res);
        return true;
      })
      .catch(error => {
        console.log(Address.PRODUCTS_COMMENT, error.response);
        return false;
      });
  }
  getComment(data: Type.Comments) {
    console.log(Address.PRODUCTS_COMMENT, data);

    return http
      .get(Address.PRODUCTS_COMMENT, {params:{productVariationId:data}})
      .then(res => {
        console.log(Address.PRODUCTS_COMMENT, res);
        return res.data.data;
      })
      .catch(error => {
        console.log(Address.PRODUCTS_COMMENT, error.response);
      });
  }
}
export default new CommentDataService();
