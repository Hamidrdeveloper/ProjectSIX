import React, {createContext, ReactElement, useEffect, useState} from 'react';
import {PartnerAc, PartnerIdAc} from './Partner.action';
import {PartnerId, Partners} from './type';

interface IPartnerContext {
  partner: Partners;
  partnerId: PartnerId;
  partnerSelectId: PartnerId;
  PartnerFn: (countryId?: number) => void;
  partnerIdFn: (id: number) => void;
  isLoading: boolean;
  partnerMeFn: (id: number) => void;
}
export const PartnerContext = createContext<IPartnerContext>(
  {} as IPartnerContext,
);
export default function PartnerContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [isLoading, setLoading] = useState(false);

  const [partner, setPartner] = useState<Partners>();
  const [partnerId, setPartnerId] = useState<PartnerId>();
  const [partnerSelectId, setPartnerSelectId] = useState<PartnerId>();
  const partnerCheck = {data: []};

  async function partnerMeFn(id: number) {
    partnerCheck.data?.forEach(element => {
      if (element.id == id) {
        setPartnerSelectId(element);
      }
    });
    console.log('partnerMeFn', partnerCheck.data);
    console.log('partnerMeFn', id);
  }
  function PartnerFn(countryId: number) {
    PartnerAc(countryId)
      .then(is => {
        partnerCheck.data = is;
        setPartner(
          is?.map(data => {
            return {...data, select: false};
          }),
        );
        setLoading(true);
      })
      .catch(() => {});
  }
  async function partnerIdFn(id: number) {
    const res = await PartnerIdAc(id);
    setPartnerId(res);
    setPartnerSelectId(res);
    setLoading(true);
  }

  return (
    <PartnerContext.Provider
      value={{
        PartnerFn,
        partner,
        isLoading,
        partnerId,
        partnerIdFn,
        partnerSelectId,
        partnerMeFn,
      }}>
      {children}
    </PartnerContext.Provider>
  );
}
