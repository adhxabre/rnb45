import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Map from "./src/screens/map";

export default function App() {
  return (
    <View style={{ paddingTop: 100 }}>
      <StatusBar style="auto" />
      <Map />
    </View>
  );
}
