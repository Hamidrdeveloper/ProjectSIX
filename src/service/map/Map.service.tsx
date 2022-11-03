import http from '../../utils/http-common';
import * as Url from '../../utils/adress.api';
import {TOKEN} from '../../utils/main';
import {Map} from './types';
import axios from 'axios';

class MapDataService {
  async mapService({longitude, latitude}: Map) {

    try {
      const res = await axios.get(
        `${Url.MAP_ADDRESS}${longitude},${latitude}.json?access_token=${TOKEN.map}`,
      );

      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new MapDataService();
