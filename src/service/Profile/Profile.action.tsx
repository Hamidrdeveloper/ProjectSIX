import * as Type from './types';
import React from 'react';
import ProfileDataService from './Profile.service';
export function profileAc() {
  return ProfileDataService.profile();
}
export function updateUserProfileAc(values: Type.UserProfile) {
  return ProfileDataService.updateUserProfile(values);
}
export function userInvoiceAddressAC(id: number) {
  return ProfileDataService.userInvoiceAddress(id);
}
