import http from '../../utils/http-common';
import * as Url from '../../utils/adress.api';
import {TOKEN} from '../../utils/main';

class PartnerDataService {
  async partner(countryId?: number) {
    try {
      const res = await http.get(Url.Partner_ADDRESS, {
        params: {countryId: countryId},
      });
      console.log(Url.Partner_ADDRESS, res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(Url.Partner_ADDRESS, error.response);

      throw new Error(error);
    }
  }
  async partnerId(id: number) {
    try {
      const res = await http.get(Url.Partner_ADDRESS_ID + '/' + id);
      console.log(Url.Partner_ADDRESS_ID, res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(Url.Partner_ADDRESS_ID, error.response);

      throw new Error(error);
    }
  }
}

export default new PartnerDataService();
