import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  if (favoriteMeals.length == 0) {
    return (
      <View style={style.rootContainer}>
        <Text style={style.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}
const style = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
});

export default FavoritesScreen;
