import React from "react";
import { View, Text } from "react-native";

function getMajor() {
  return "Fullstack";
}

const companyName = "DumbWays.ID";

export default function EmbedExpressions() {
  return (
    <View>
      <Text>
        {" "}
        Welcome to {companyName} class {getMajor()}
      </Text>
    </View>
  );
}
