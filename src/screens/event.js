import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function greetings() {
  return alert("Good Evening!");
}

export default function Event() {
  return (
    <View>
      <Text>Click this button!</Text>
      <TouchableOpacity onPress={() => alert("Good Morning!")}>
        <Text>Click Here!</Text>
      </TouchableOpacity>

      <Text>Click this button!</Text>
      <TouchableOpacity onPress={greetings}>
        <Text>Click Here!</Text>
      </TouchableOpacity>
    </View>
  );
}
