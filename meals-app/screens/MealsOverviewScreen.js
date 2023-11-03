import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealItem from "../components/MealsList/MealItem";
// import { useRoute } from "@react-navigation/native"; For non-screen componets
import MealsList from "../components/MealsList/MealsList";
function MealsOverviewScreen({ route, navigation }) {
  // const route = route.params.categoryId;
  const catId = route.params.categoryId; // For screen components
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  // To exceute a side effect simultanously with the componente execution. Not after!
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);



  return (
    <MealsList items={displayedMeals} />
  );
}

export default MealsOverviewScreen;


