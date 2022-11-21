import React, {createContext, ReactElement, useState} from 'react';
import {MapAc} from './Map.action';
import {Map, MapData} from './types';

interface IMapContext {
  map: MapData;
  MapFn: (data: Map) => void;
  isLoading: boolean;
}
export const MapContext = createContext<IMapContext>({} as IMapContext);
export default function MapContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [isLoading, setLoading] = useState(false);

  const [map, setMap] = useState<MapData>();

  async function MapFn(data: Map) {
    const res = await MapAc(data);
    console.log(res);
    setMap(res);
    setLoading(true);
  }

  return (
    <MapContext.Provider
      value={{
        MapFn,
        map,
        isLoading,
      }}>
      {children}
    </MapContext.Provider>
  );
}
