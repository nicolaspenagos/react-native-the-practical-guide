import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

function ListHeader({ label, total }) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Text style={styles.total}>{total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purpleGray,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius:8,
    padding:16,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  total:{
    fontWeight:'bold'
  }
});
export default ListHeader;
