import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ onPress, icon, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed, styles.rootContainer]}
    >
      <Ionicons name={icon} color={color} size={28} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    marginHorizontal:8
  },
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
