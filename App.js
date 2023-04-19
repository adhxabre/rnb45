import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Form from "./src/screens/form";

export default function App() {
  return (
    <View style={{ paddingTop: 100 }}>
      <StatusBar style="auto" />
      <Form />
    </View>
  );
}
