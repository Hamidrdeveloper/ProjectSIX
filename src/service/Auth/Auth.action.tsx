import {Email, LinkForgetPassword, SignUp} from './types';
import AuthDataService from './Auth.service';
import React from 'react';
import {ForgetPasswordModel, SignInModel, SignUpModel} from './model';

export function singUpAc() {
  return AuthDataService.signUp(SignUpModel);
}
export function singInAc() {
  return AuthDataService.signIn(SignInModel);
}
export function forgetPasswordAc() {
  return AuthDataService.forgetPassword(ForgetPasswordModel);
}
export function linkForgetPasswordAc(value: LinkForgetPassword) {
  return AuthDataService.linkForgetPassword(value);
}
export function countriesAc() {
  return AuthDataService.countries();
}
export function languageAc() {
  return AuthDataService.language();
}
