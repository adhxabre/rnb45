import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import State from "./src/screens/state";

export default function App() {
  return (
    <View style={{ paddingTop: 100 }}>
      <StatusBar style="auto" />
      <State />
    </View>
  );
}
