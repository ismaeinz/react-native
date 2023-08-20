import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }
  //
  const delateGoalHandler = () => {
    console.log("Delete");
  };
  return (
    <View style={styles.appContainer}>
      {/* GoalInput */}
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        style={styles.goalsContainer}
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            // GoalItem
            <GoalItem
              text={itemData.item.text}
              onDelateItem={delateGoalHandler}
            />
          );
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 3,
    borderColor: "#cccc",
    width: "80%",
  },
  goalsContainer: {
    color: "white",
  },
  getItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "green",
    color: "white",
  },
});
// n9e07505
