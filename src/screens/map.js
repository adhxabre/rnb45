import React from "react";
import { View, Text } from "react-native";

export default function Map() {
  const cars = ["BMW", "Mercedez", "Ferarri", "Lexus"];

  return (
    <View>
      <Text>Mapping List of Cars</Text>
      {cars.map((car) => (
        <Text key={car}>{car}</Text>
      ))}
    </View>
  );
}
