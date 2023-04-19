import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Event from "./src/screens/event";

export default function App() {
  return (
    <View style={{ paddingTop: 100 }}>
      <StatusBar style="auto" />
      <Event />
    </View>
  );
}
