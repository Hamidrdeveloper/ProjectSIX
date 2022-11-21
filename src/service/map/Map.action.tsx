import MapDataService from './Map.service';
import {Map} from './types';
export async function MapAc(data: Map) {
  return await MapDataService.mapService(data);
}
