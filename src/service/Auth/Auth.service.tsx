import React from 'react';
import PropTypes from 'prop-types';
import {Email, LinkForgetPassword, SignIn, SignUp} from './types';
import http from '../../utils/http-common';
import {TOKEN} from '../../utils/main';
import {
  COUNTRIES_ADDRESS,
  EMAIL_ADDRESS,
  LANGUAGE_ADDRESS,
  LEGALS,
  LINK_FORGET_PASSWORD,
  SIGNIN_ADDRESS,
  SIGNUP_ADDRESS,
} from '../../utils/adress.api';
import Storage from '../../utils/storeData';

class AuthDataService {
  signUp(data: SignUp) {
    console.log(data);

    return http
      .post(SIGNUP_ADDRESS, data)
      .then(res => {
        
        return true;
      })
      .catch(error => {
        console.log(SIGNUP_ADDRESS, error.response);

        return false;
      });
  }
  legals() {
  

    return http
      .get(LEGALS)
      .then(res => {
        console.log("legals",res);
        
        return res?.data?.data;
      })
      .catch(error => {
        console.log(LEGALS, error.response);

        return false;
      });
  }
  signIn(data: SignIn) {
    console.log(data);
    http.defaults.headers.common.Authorization = '';
    return http
      .post(SIGNIN_ADDRESS, data)
      .then(res => {
        console.log(SIGNIN_ADDRESS, res.data.data);
        TOKEN.token = res.data.data.token;
        Storage.storeData('TOKEN', res.data.data.token);
      
        return {message: res.data.data.user, status: true};
      })
      .catch(error => {
        console.log(SIGNIN_ADDRESS + 'Error', error.response.data);

        if (error.response) {
          return {message: error.response?.data?.data?.message, status: false};
        } else if (error.request) {
          // client never received a response, or request never left
        } else {
          // anything else
        }
        return {message: '', status: false};
      });
  }

  forgetPassword(data: Email) {
    console.log(data);

    return http
      .post(EMAIL_ADDRESS, data)
      .then(res => {
        console.log(EMAIL_ADDRESS, res.data.data.message);

        return res.data.data.message;
      })
      .catch(error => {
        console.log(EMAIL_ADDRESS, error.response);
        return 'Error';
      });
  }
  linkForgetPassword(data: LinkForgetPassword) {
    console.log(data);

    return http
      .post(LINK_FORGET_PASSWORD, data)
      .then(res => {
        console.log(LINK_FORGET_PASSWORD, res.data.data.message);

        return true;
      })
      .catch(error => {
        console.log(LINK_FORGET_PASSWORD, error.response);
        return false;
      });
  }

  countries() {
    return http
      .get(COUNTRIES_ADDRESS, {params: {isActive: true, per_page: 200}})
      .then(res => {
        console.log(COUNTRIES_ADDRESS, res.data.data);
        return res.data.data;
      })
      .catch(error => {
        console.log(COUNTRIES_ADDRESS, error.response);

        return false;
      });
  }
  language() {
    return http
      .get(LANGUAGE_ADDRESS, {params: {isActive: true, per_page: 200}})
      .then(res => {
        console.log(LANGUAGE_ADDRESS, res.data.data);
        return res.data.data;
      })
      .catch(error => {
        console.log(LANGUAGE_ADDRESS, error.response);

        return error;
      });
  }
}
export default new AuthDataService();
