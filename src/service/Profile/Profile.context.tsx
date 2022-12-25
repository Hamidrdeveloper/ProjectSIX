import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {AddressContext} from '../Address/Address.context';
import {PartnerContext} from '../Partner/Partner.context';
import {
  documentAc,
  profileAc,
  updateUserProfileAc,
  userInvoiceAddressAC,
} from './Profile.action';
import {User, UserProfile} from './types';

interface IProfileContext {
  isLodUser: string;
  isUpdate: boolean;
  isLoading: boolean;
  user: any;
  profileFn: () => void;
  profileUpdateFn: (value: UserProfile) => void;
  userUpdate: any;
  showInvoiceAddress: any;
  setShowInvoiceAddress: any;
  userInvoiceAddressFn: (invoice_contact_group_id: unknown) => void;
  rolesUser: string;
  walletBalance: string;
  listDocument: any ;
  documentFn: any ;

}
export const ProfileContext = createContext<IProfileContext>(
  {} as IProfileContext,
);
export default function ProfileContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [isLodUser, setLodUser] = useState('0');
  const [isUpdate, setUpdate] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {partnerMeFn, PartnerFn} = useContext(PartnerContext);
  const {addresses} = useContext(AddressContext);
  const [rolesUser, setRolesUser] = useState("");
  const [listDocument, setListDocument] = useState([]);

  const [walletBalance, setWalletBalance] = useState('0');

  const [showInvoiceAddress, setShowInvoiceAddress] = useState();

  const [user, setUser] = useState<User>();
  const [userUpdate, setUserUpdate] = useState<UserProfile>();

  const {getAddressFn} = useContext(AddressContext);

  useEffect(() => {
    return () => {
      addresses.forEach(e => {
        if (user?.invoice_contact_group_id == e.id) {
          setShowInvoiceAddress(e);
        }
      });
    };
  }, [addresses]);
  function setDataUser(value: User) {
    let formUser = {
      email: value?.email,
      birth_date: value?.birth_date,
      people: {
        first_name: value?.person?.first_name,
        last_name: value?.person?.last_name,
      },
    };
    setUser(value);
    setLodUser('1');
    setUserUpdate(formUser);
  }
  function profileFn() {
    profileAc()
      .then(is => {
        console.log('partnerIdFn', is?.sponsor_id);
        setWalletBalance(is?.walletBalance);
        if (is.roles?.length > 0) setRolesUser(is.roles[0]?.slug);
        getAddressFn();
        setDataUser(is);
        PartnerFn(is?.sponsor);
        partnerMeFn(is?.sponsor);
      })
      .catch(() => {
        setLodUser('2');
      });
  }
  function documentFn() {
    documentAc()
      .then(is => {
       setListDocument(is)
      })
      .catch(() => {
        
      });
  }
  function profileUpdateFn(value: UserProfile) {
    console.log('profileUpdateFn', value);

    setLoading(true);
    setUpdate(0);
    updateUserProfileAc(value)
      .then(is => {
        setDataUser(is);
        setUpdate(1);
        setTimeout(() => {
          setUpdate(0);
        }, 2000);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setUpdate(2);
      });
  }
  function userInvoiceAddressFn(invoice_contact_group_id: unknown) {
    userInvoiceAddressAC(invoice_contact_group_id?.id).then(() => {
      setShowInvoiceAddress(invoice_contact_group_id);
    });
  }

  return (
    <ProfileContext.Provider
      value={{
        profileFn,
        user,
        isLodUser,
        userUpdate,
        profileUpdateFn,
        isUpdate,
        isLoading,
        userInvoiceAddressFn,
        setShowInvoiceAddress,
        showInvoiceAddress,
        rolesUser,
        walletBalance,
        listDocument,
        documentFn
      }}>
      {children}
    </ProfileContext.Provider>
  );
}
