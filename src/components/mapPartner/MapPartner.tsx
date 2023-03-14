import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { Marker, InfoWindow, Callout, CalloutSubview } from "react-native-maps";
import MapView from "react-native-map-clustering";
import HartmannInfo from "./PartnerInfo";

const markers = [
  {
    id: 1,
    name: "John Doe",
    latitude: 37.78825,
    longitude: -122.4324,
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    name: "Jane Doe",
    latitude: 37.7885,
    longitude: -122.433,
    description: "Lorem ipsum dolor sit amet",
  },
  // Add more markers as needed
];
const MapPartner = ({ partnerData, onPress }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [show, isShow] = useState(false);

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 52.7218668,
          longitude: 9.825809,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        zoomEnabled={true}
        scrollEnabled={true}
        rotateEnabled={true}
      >
        {partnerData?.map((marker) => (
          <Marker
          
            key={marker.id}
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            }}
            onPress={()=>{
                setSelectedMarker(marker)
            isShow(true)
        }}
          >
           
          </Marker>
        ))}

      </MapView>
      <Modal visible={show}  transparent>
              <View style={{ width: 300 ,backgroundColor:"#fff",height:360,alignItems:'center',alignSelf:'center',alignContent:'center',borderRadius:15,top:300}}>

                <HartmannInfo data={selectedMarker} onPress={onPress} onClose={()=>{isShow(false)}}/>
              
              </View>
        
            </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: `100%`,
    height: `100%`,
    borderRadius:15
  },
  map: {
    width: `100%`,
    height: `100%`,
    borderRadius:15
  },
});
export default MapPartner;
