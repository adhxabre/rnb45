import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "native-base";

import FormNativeBase from "./src/screens/form";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";

const Stack = createStackNavigator();

export default function Container() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: theme.colors.muted["800"] },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{
            title: "Hello Screen",
          }}
        />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            title: "Increment Decrement",
          }}
        />
        <Stack.Screen
          name="Form"
          component={FormNativeBase}
          options={{
            title: "Sign In",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
