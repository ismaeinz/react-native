import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Entypo name="tree" size={24} color="green" />
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#d6dae0",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    height: "90%",
    width: "90%",
    borderRadius: 20,
  },
});
