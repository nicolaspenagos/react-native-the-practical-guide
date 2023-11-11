import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import COLORS from "./constants/colors";
import IconButton from "./components/IconButton";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ExpenseForm from "./screens/ExpenseForm";
import { formTypes } from "./screens/ExpenseForm";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const newItem = (navigation) => (
  <IconButton
    color={COLORS.purpleGray}
    onPress={() =>
      navigation.navigate("ExpenseForm", {
        title: "",
        price: "",
        date: Date.now(),
        type: formTypes.NEW,
      })
    }
    icon="add"
  />
);

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: COLORS.secondaryPurple }}
      /*
       */
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
          headerRight: newItem.bind(null, navigation),
        })}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),

          headerRight: newItem.bind(null, navigation),
        })}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
              name="Expenses"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ExpenseForm" component={ExpenseForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const screenOptions = {
  headerStyle: {
    backgroundColor: COLORS.primaryPurple,
  },
  headerTintColor: COLORS.white,
  contentStyle: {
    backgroundColor: COLORS.secondaryPurple,
  },
  tabBarStyle: {
    backgroundColor: COLORS.primaryPurple,
  },
  tabBarActiveTintColor: COLORS.accentOrange,
};
