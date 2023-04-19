import React from "react";
import { View, FlatList, Text } from "react-native";

export default function Map() {
  return (
    <View>
      <Text>Mapping List of Cars</Text>
      <FlatList
        data={[
          { name: "Abel Dustin" },
          { name: "Ilham Fathullah" },
          { name: "Cintara Surya" },
        ]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
