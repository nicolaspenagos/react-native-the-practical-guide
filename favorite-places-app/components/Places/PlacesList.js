import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

const PlacesList = ({ places }) => {
  const navigation = useNavigation();

  const selectPlaceHandler = (id) => {
   
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  };
  if (!places || places.lenght === 0)
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet</Text>
      </View>
    );
  return (
    <FlatList
      style={styles.list}
      data={places}
      contentContainerStyle={styles.listContent}
      renderItem={(itemData) => (
        <PlaceItem
          place={itemData.item}
          key={itemData.item.id}
          onSelect={selectPlaceHandler.bind(
            this,
            itemData.item.id ? itemData.item.id : 13123
          )}
        />
      )}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  listContent: {
    gap: 16,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
