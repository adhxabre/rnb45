import React from "react";
import { Text, Box } from "native-base";

export default function DetailSoc({ route }) {
  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        {route.params.value || "Not Found"}
      </Text>
    </Box>
  );
}
