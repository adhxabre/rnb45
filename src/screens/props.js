import React from "react";
import { View, Text } from "react-native";

import List from "../components/list";

export default function Props() {
  return (
    <View>
      <Text>Props, this is a list of car</Text>

      <List listData="BMW" />
      <List listData="Mercedez" />
      <List listData="Toyota" />
    </View>
  );
}
