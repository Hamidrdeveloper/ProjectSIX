import React from 'react';
import PropTypes from 'prop-types';
import * as Type from './types';
import http from '../../utils/http-common';
import {TOKEN} from '../../utils/main';
import * as Url from '../../utils/adress.api';
import Storage from '../../utils/storeData';
import axios from 'axios';

class AddressDataService {
  async addAddress(address: Type.ContactGroupsContext) {
    try {
      const res = await http.post(Url.Contact_Groups_ADDRESS, address);
      console.log(Url.Contact_Groups_ADDRESS, res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(Url.Contact_Groups_ADDRESS, error.response);

      return null;
    }
  }
  async editAddress(address: Type.ContactGroupsContext, id: number) {
    try {
      const res = await http.put(
        Url.Contact_Groups_ADDRESS + `/${id}`,
        address,
      );
      console.log(Url.Contact_Groups_ADDRESS, res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(Url.Contact_Groups_ADDRESS, error.response);

      return null;
    }
  }
  async removeAddress(address: Type.ContactGroupsContext) {
    try {
      const res = await http.delete(
        Url.Contact_Groups_ADDRESS + '/' + address?.id,
      );
      console.log(Url.Contact_Groups_ADDRESS, res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(Url.Contact_Groups_ADDRESS, error.response);

      throw new Error(error);
    }
  }
  async getAddress() {
    try {
      const res = await http.get(Url.Contact_Groups_ADDRESS + '?per_page=100');
      console.log(Url.Contact_Groups_ADDRESS, res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(Url.Contact_Groups_ADDRESS, error.response);

      throw new Error(error);
    }
  }
}

export default new AddressDataService();
