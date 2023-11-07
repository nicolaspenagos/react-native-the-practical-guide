import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "./screens/FavoritesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
//import FavoriteContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: "#3f2f25" }}
    >
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorities"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/*<FavoriteContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
              name="BottomTab"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
              }}
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
              options={{
                title: "About the meal",
              }}
              // The value of the header element should be a JSX compomey
              /*
            options={{
              headerRight: () => <Button title="Tap me!" />,
            }}*/
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoriteContextProvider>*/}
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
  tabBarStyle: {
    backgroundColor: "#351401",
  },
  tabBarActiveTintColor: "white",
};
