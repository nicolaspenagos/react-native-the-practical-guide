import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import { fetchPlaceDetails } from "../../util/database";

const PlaceDetails = ({ route, navigation }) => {
  const [fetchedPlace, setFetchedPlace] = useState();
  const selectedPlaceId = route.params.placeId;
  useEffect(() => {
    const loadPlaceData = async () => {
      
      const place = await fetchPlaceDetails(selectedPlaceId);
      navigation.setOptions({
        title: place.title,
      });
      setFetchedPlace(place);
    };
    loadPlaceData();
  }, [selectedPlaceId]);
  const showOnMapHandler = () => {};

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
      </View>
      <OutlinedButton icon="map" onPress={showOnMapHandler}>
        View on mAP
      </OutlinedButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PlaceDetails;
