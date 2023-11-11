import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../constants/colors";
import Card from "./Card";

function Input({ value, onChange, type, placeholder }) {
  return (
    <Card style={style.card}>
      {type === "price" && (
        <View style={style.textContainer}>
          <Text style={style.text}>$</Text>
        </View>
      )}
      <TextInput
        style={style.input}
        value={value}
        onChangeText={onChange}
        keyboardType={type === "price" ? "numeric" : "default"}
        returnKeyType={"done"}
        placeholder={placeholder}
        placeholderTextColor="gray"
      />
      <Ionicons name="pencil" color={COLORS.white} size={24} />
    </Card>
  );
}

const style = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 4,
    color: COLORS.white,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  card: {
    paddingVertical: 14,
    paddingRight: 48,
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
    marginVertical: "auto",
    lineHeight: 25,
  },
  textContainer: {
    height: "100%",
    marginRight: -10,
    height: 25,
  },
});

export default Input;
