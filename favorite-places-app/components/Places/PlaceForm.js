import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const changeTitleHandler = (enteredTitle) => {
    setEnteredTitle(enteredTitle);
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>PlaceForm</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: { flex: 1, padding: 24 },
  label: { fontWeight: "bold", marginBottom: 4, color: Colors.primary500 },
  input: {
    marginVertical: 8,
    padding: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
