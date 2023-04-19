import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import EmbedExpressions from "./src/screens/embedExpressions";

export default function App() {
  return (
    <View style={{ paddingTop: 100 }}>
      <StatusBar style="auto" />
      <EmbedExpressions />
    </View>
  );
}
