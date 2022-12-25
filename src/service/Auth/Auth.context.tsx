import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import Toast from '../../components/toast';
import {PartnerContext} from '../Partner/Partner.context';
import {
  singUpAc,
  singInAc,
  forgetPasswordAc,
  languageAc,
  countriesAc,
  linkForgetPasswordAc,
} from './Auth.action';
import {SignUpModel} from './model';
import {LinkForgetPassword} from './types';

interface IAuthContext {
  isLoginOpen: boolean;
  isRegister: boolean;
  isForgotPasswordOpen: boolean;
  linkForgetPasswordFn: (value: LinkForgetPassword) => void;
  setLoginOpen: (toggle: boolean) => void;
  setRegisterOpen: (toggle: boolean) => void;
  setForgotPasswordOpen: (toggle: boolean) => void;
  singUpFn: () => void;
  singInFn: () => void;
  forgetPasswordFn: () => void;
  countriesFn: () => void;
  languageFn: () => void;
  activeForm: (value: boolean) => void;
  language: any;
  countries: any;
  isForm: boolean;
  isLoginApi: boolean;
  isRegisterOpen: boolean;
  isShowError: boolean;
  messageError: string;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export default function AuthContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const [isRegister, setRegister] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [language, setLanguage] = useState([]);
  const [isForm, setForm] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const [messageError, setMessageError] = useState(null);
  const {partnerIdFn} = useContext(PartnerContext);
  const [isLoginApi, setLoginApi] = useState(false);
  function activeForm(value: boolean) {
    setForm(value);
  }

  function singUpFn() {
    setRegister(true);
    setRegisterOpen(false);
    singUpAc().then(is => {
      setRegister(false);
      if (is?.sponsor) {
        partnerIdFn(is?.sponsor);
      }
        
   

      setRegisterOpen(is);
    });
  }
  function singInFn() {
    setLoginApi(true);
    setLoginOpen(false);
    setIsShowError(false);
    singInAc()
      .then(is => {
        if (!is.status) {
          setMessageError(is.message);
          setIsShowError(!is.status);
          
        } else {
          if (is?.sponsor) {
            partnerIdFn(is?.sponsor);
          }

          setLoginOpen(is.status);
        }
        setLoginApi(false);
      })
      .catch(() => {
        
      });
    setIsShowError(false);
  }
  function linkForgetPasswordFn(value: LinkForgetPassword) {
    linkForgetPasswordAc(value).then(is => {
      // setLoginOpen(is);
    });
  }
  function forgetPasswordFn() {
    forgetPasswordAc().then(is => {});
  }
  function countriesFn() {
    countriesAc().then(is => {
      let data = is.map(value => {
        console.log('====================================');
        console.log("countriesFn", value.id+""+ value.name);
        console.log('====================================');
        return {label: value.name, value: value.id};
      });
      setCountries(data);
    });
  }
  function languageFn() {
    languageAc().then(is => {
      let data = is.map(value => {
        return {label: value.title, value: value.id};
      });
      setLanguage(data);
    });
  }
  return (
    <AuthContext.Provider
      value={{
        isLoginOpen,
        isRegisterOpen,
        isForgotPasswordOpen,
        setLoginOpen,
        isRegister,
        setRegisterOpen,
        setForgotPasswordOpen,
        singUpFn,
        singInFn,
        forgetPasswordFn,
        countriesFn,
        languageFn,
        countries,
        language,
        linkForgetPasswordFn,
        isForm,
        activeForm,
        messageError,
        isShowError,
        isLoginApi,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
