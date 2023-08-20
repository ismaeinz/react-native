import { StyleSheet, Text, View, Pressable } from "react-native";

export const GoalItem = (props) => {
  return (
    <Pressable onPress={props.delateGoalHandler}>
      <View style={styles.getItem} key={Math.random()}>
        <Text key={Math.random()}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  getItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "green",
    color: "white",
  },
});
