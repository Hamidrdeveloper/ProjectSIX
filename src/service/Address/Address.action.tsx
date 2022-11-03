import * as Type from './types';
import React from 'react';
import AddressDataService from './Address.service';
export function addAddressAc(address: Type.ContactGroupsContext) {
  return AddressDataService.addAddress(address);
}
export function editAddressAc(address: Type.ContactGroupsContext, id: number) {
  return AddressDataService.editAddress(address, id);
}
export function removeAddressAc(address: Type.ContactGroupsContext) {
  return AddressDataService.removeAddress(address);
}
export function getAddressAc() {
  return AddressDataService.getAddress();
}
