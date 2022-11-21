// MapboxGL.setAccessToken(
//   'pk.eyJ1IjoiaGFtaWRyZGV2ZWxvcGVyIiwiYSI6ImNrOHp3eW4ybTBmamEzZnBydmtybmRrZnAifQ.neIu6a_sJjQycKnNxEdxkA',
// );
import React, {useContext, useEffect, useState} from 'react';
import {View, Image} from 'react-native';
// import MapboxGL from '@react-native-mapbox-gl/maps';
import exampleIcon from '../../assets/image/arrow.png';
import {MapContext} from '../../service/map/Map.context';
import {MapData} from '../../service/map/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../infrastructuer/theme/colors.style';
const styles = {
  mapPinLayer: {
    iconAllowOverlap: true,
    iconAnchor: 'bottom',
    iconSize: 20,
    iconImage: exampleIcon,
  },
  customCalloutText: {
    color: 'black',
    fontSize: 16,
  },
  calloutContainerStyle: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 50,
  },
};
const CustomCalloutView = ({message}) => {
  return (
    <View style={styles.calloutContainerStyle}>
      <Icon size={50} name={'location-history'} color={Color.brand.blue} />
    </View>
  );
};
interface Type {
  onChange: (value: MapData) => void;
}
function ShowClick({onChange}: Type) {
  const [latitude, setLatitude] = useState(40.73581);
  const [longitude, setLongitude] = useState(40.73581);
  const {map, MapFn} = useContext(MapContext);
  useEffect(() => {
    return onChange(map);
  }, [map]);
  function onPress(event) {
    const {geometry} = event;
    setLatitude(geometry.coordinates[1]);
    setLongitude(geometry.coordinates[0]);
    MapFn({
      longitude: geometry.coordinates[0],
      latitude: geometry.coordinates[1],
    });
  }

  return (
    <>
      {/* <MapboxGL.MapView
        style={{width: '100%', height: 310, overflow: 'hidden'}}
        onPress={onPress}>
        <MapboxGL.Camera
          zoomLevel={16}
          centerCoordinate={[-73.99155, 40.73581]}
        />
        <MapboxGL.MarkerView
          id="selectedFeatureMarkerView"
          coordinate={[longitude, latitude]}>
          <CustomCalloutView message="test" />
        </MapboxGL.MarkerView>
      </MapboxGL.MapView> */}
    </>
  );
}

export default ShowClick;
