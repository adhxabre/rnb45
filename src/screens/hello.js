import * as React from "react";
import { Text, Box, Pressable } from "native-base";

export default function Hello({ navigation }) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      <Pressable
        onPress={() => navigation.navigate("IncDec")}
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text>Screen Increment and Decrement</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Form")}
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text>Sign In</Text>
      </Pressable>
    </Box>
  );
}
