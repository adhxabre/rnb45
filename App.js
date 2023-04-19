import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Props from "./src/screens/props";

export default function App() {
  return (
    <View style={{ paddingTop: 100 }}>
      <StatusBar style="auto" />
      <Props />
    </View>
  );
}
