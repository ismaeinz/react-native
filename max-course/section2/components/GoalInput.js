import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your App"
        style={styles.textInput}
        onChangeText={goalInputHandler} //handle Event
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
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
});
