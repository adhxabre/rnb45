import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/header";
import Content from "./src/components/content";

export default function App() {
  return (
    <View style={{ paddingTop: 100 }}>
      <StatusBar style="auto" />
      <Header />
      <Content />
    </View>
  );
}
