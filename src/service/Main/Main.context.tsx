import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {TOKEN} from '../../utils/main';
import Storage from '../../utils/storeData';
import {AuthContext} from '../Auth/Auth.context';
import {ProductsModel} from '../Products/model';
import {ProductContext} from '../Products/Product.context';
import http from '../../utils/http-common';
import {ProfileContext} from '../Profile/Profile.context';
import {BasketContext} from '../Basket/Basket.context';
import {PartnerContext} from '../Partner/Partner.context';
import {FavoriteContext} from '../Favorite/Favorite.context';
import RNRestart from 'react-native-restart'; // Import package from node modules
interface IMainContext {
  token: string;
  onRunAllApi: (navigation) => void;
  onGetUser: () => void;
  onDeleteUser: () => void;
  catchMessage: string;
  catchMessageShow: boolean;
}
export const MainContext = createContext<IMainContext>({} as IMainContext);
export default function MainContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [token, setToken] = useState('');
  const {setLoginOpen, countriesFn, languageFn, isRegisterOpen, isLoginApi} =
    useContext(AuthContext);
  const {profileFn} = useContext(ProfileContext);
  const {orderSale, shopConfigFn, dataConfigFn} = useContext(BasketContext);
  const {PartnerFn} = useContext(PartnerContext);
  const {getAllFavoritesFn} = useContext(FavoriteContext);

  const {
    productsFn,
    newProductsFn,
    categoriesFn,
    arrivalFn,
    cardBottomArrivalFn,
    bestSellingFn,
    categoriesTreeFn,
    widgetsFn,
  } = useContext(ProductContext);

  function onDeleteUser() {
    setLoginOpen(false);
    Storage.removeDataAll();
    Storage.removeData('TOKEN');
    RNRestart.Restart();
  }
  function onGetUser() {
    Storage.retrieveData('TOKEN').then(res => {
      console.log('MainContext', res);
      TOKEN.token = res;
      http.defaults.headers.common.Authorization = `Bearer ${res}`;
      setToken(res);

      PartnerFn();
      profileFn();

      cardBottomArrivalFn();
      if (res.length > 15) {
        orderSale();
      }
    });
  }
  useEffect(() => {
    onRunAllApi();
  }, []);
  useEffect(() => {
    onRunAllApi();
  }, [isRegisterOpen, isLoginApi]);
  function onRunAllApi(navigation) {
    Storage.retrieveData('TOKEN').then(res => {
      console.log('MainContext', navigation);

      TOKEN.token = res;
      setToken(`res`);
      http.defaults.headers.common.Authorization = `Bearer ${res}`;
 
      // setTimeout(() => {
      //   PartnerFn();
      // }, 1000);
      // // getAllFavoritesFn();
      // setTimeout(() => {
      //   widgetsFn();
      // }, 1000);
      setTimeout(() => {
        countriesFn();
      }, 1000);
      // setTimeout(() => {
      //   languageFn();
      // }, 1000);
      setTimeout(() => {
        productsFn();
      }, 1000);
     
      // setTimeout(() => {
      //   categoriesFn();
      // }, 1000);
      
      // setTimeout(() => {
      //   arrivalFn();
      // }, 1000);
      // setTimeout(() => {
      //   cardBottomArrivalFn()
      // }, 1000);
      // setTimeout(() => {
      //   bestSellingFn();
      // }, 1000);
      // setTimeout(() => {
      //   newProductsFn();
      // }, 1000);
      // setTimeout(() => {
      //   categoriesTreeFn();
      // }, 1000);
     
    
      if (res.length > 15) {
        setLoginOpen(true);
      }
      if (res.length > 15) {
        orderSale();
      }
      ProductsModel.pagination = {
        page: 1,
        per_page: 12,
      };
      setTimeout(() => {
        profileFn();
      }, 1000);
      setTimeout(() => {
        shopConfigFn();
      }, 1000);
      setTimeout(() => {
        dataConfigFn();
      }, 1000);
     
    });
  }
  return (
    <MainContext.Provider value={{token, onRunAllApi, onGetUser, onDeleteUser}}>
      {children}
    </MainContext.Provider>
  );
}
