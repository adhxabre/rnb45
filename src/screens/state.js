import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function State() {
  const [count, setCount] = useState(0);

  function Add() {
    if (count === 1) return;
    return setCount(count + 1);
  }

  function Less() {
    if (count === 0) return;
    return setCount(count - 1);
  }

  return (
    <View>
      <Text>State</Text>
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={Add}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Less}>
        <Text>Less</Text>
      </TouchableOpacity>
    </View>
  );
}
