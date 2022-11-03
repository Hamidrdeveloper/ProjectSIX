import React from 'react';
import PropTypes from 'prop-types';
import * as Type from './types';
import http from '../../utils/http-common';
import {TOKEN} from '../../utils/main';
import * as Url from '../../utils/adress.api';
import Storage from '../../utils/storeData';

class ProfileDataService {
  profile() {
    return http
      .get(Url.PROFILE_ADDRESS)
      .then(res => {
        console.log(Url.PROFILE_ADDRESS, res.data.data);

        return res.data.data;
      })
      .catch(error => {
        console.log(Url.PROFILE_ADDRESS, error.response);

        throw new Error(error);
      });
  }
  async updateUserProfile(values: Type.UserProfile): Promise<Type.User> {
    return await http
      .put(Url.PROFILE_EDIT_ADDRESS, values)
      .then(res => {
        console.log(Url.PROFILE_ADDRESS, res.data.data);

        return res.data.data;
      })
      .catch(error => {
        console.log(Url.PROFILE_ADDRESS, error.response);

        throw new Error(error);
      });
  }

  //ContactGroups Type as any
  async userInvoiceAddress(invoice_contact_group_id: number): Promise<any> {
    await http
      .put(Url.CHANGE_INVOICE_CONTACT_GROUP, {
        invoice_contact_group_id,
      })
      .then(res => {
        console.log(Url.PROFILE_ADDRESS, res.data.data);

        return res.data.data;
      })
      .catch(error => {
        console.log(Url.PROFILE_ADDRESS, error.response);

        throw new Error(error);
      });
  }
}

export default new ProfileDataService();
