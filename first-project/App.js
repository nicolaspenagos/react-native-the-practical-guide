import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem itemData={itemData} />}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}
// Using StyleSheet object provides validation and auto-completion
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 8,
    backgroundColor: "#521CC3",
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  goalText: {
    color: "#ffffff",
  },
  numberText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  numberContainer: {
    backgroundColor: "#7437F4",
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
