import React from "react";
import { View, Text } from "react-native";

export default function List(props) {
  return (
    <View>
      <Text>{props.listData}</Text>
    </View>
  );
}
