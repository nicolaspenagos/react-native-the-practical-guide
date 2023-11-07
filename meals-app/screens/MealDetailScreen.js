import React, { /*useContext,*/ useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
//import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //const mealIsFavoritte = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavoritte = favoriteMealIds.includes(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          title="Tap me!"
          onPress={changeFavoriteStatusHandler}
          icon={mealIsFavoritte ? "star" : "star-outline"}
          color="white"
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  function changeFavoriteStatusHandler() {
    if (mealIsFavoritte) {
      //favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      //favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    margin: 4,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 24,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 32,
  },
});

export default MealDetailScreen;
