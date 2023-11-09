import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import COLORS from "./constants/colors";
import ExpensesList from "./components/ExpensesList";
import { EXPENSES } from "./constants/testData";
import { filterRecentsWithinDays } from "./utils/date";
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const expenses = EXPENSES.map((expense) => {
  expense.date = new Date(expense.date);
  return expense;
});

const sortedExpenses = expenses.sort((a, b) => b.date - a.date);
const recentExpenses = filterRecentsWithinDays(7, sortedExpenses);

const BottomTabNavigator = () => {
 
  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: COLORS.secondaryPurple }}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
        }}
      >
        {() => <ExpensesList label="Total" expenses={recentExpenses} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="AllExpenses"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      >
        {() => <ExpensesList label="Total" expenses={sortedExpenses} />}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
