import React, { useCallback, useLayoutEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useState } from "react";
import IconButton from "../components/UI/IconButton";
const Map = ({ navigation }) => {
  const [seletedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const selectLocationHandler = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  };
  const savePickedLocationHandler = useCallback(() => {
    if (!seletedLocation) {
      Alert.alert("No location picked!", "Pick a location first");
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: seletedLocation.lat,
      pickedLng: seletedLocation.lng,
    });
  }, [navigation, seletedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          color={tintColor}
          size={24}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);
  
  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {seletedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: seletedLocation.lat,
            longitude: seletedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
