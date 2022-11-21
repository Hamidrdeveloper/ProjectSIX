import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Germany from '../../assets/locales/En.json';
import English from '../../assets/locales/En.json';

export const defaultNS = 'ns1';
export const resources = {en: {ns1: English}, de: {ns1: Germany}} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: [defaultNS],
  resources,
});

export default i18n;
