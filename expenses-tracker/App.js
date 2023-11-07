import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import Colors from "./constants/colors";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: Colors.secondaryPurple }}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
    backgroundColor: Colors.primaryPurple,
  },
  headerTintColor: Colors.white,
  contentStyle: {
    backgroundColor: Colors.secondaryPurple,
  },
  tabBarStyle: {
    backgroundColor: Colors.primaryPurple,
  },
  tabBarActiveTintColor: Colors.accentOrange,
};
