import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "Alls Categories" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //options={({ route, navigation }) => {
            //  const catId = route.params.categoryId;
            //  return {
            //    title: catId,
            //  };
            //}}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            // The value of the header element should be a JSX compomey
            /*
            options={{
              headerRight: () => <Button title="Tap me!" />,
            }}*/
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});

const screenOptions = {
  headerStyle: {
    backgroundColor: "#351401",
  },
  headerTintColor: "white",
  contentStyle: {
    backgroundColor: "#3f2f25",
  },
};
