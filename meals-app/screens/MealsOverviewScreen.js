import React from "react";
import { MEALS } from "../data/dummy-data";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

function MealsOverviewScreen() {
  return (
    <View>
      <Text>MealsOverviewScreen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
