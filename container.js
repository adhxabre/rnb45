import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "native-base";

import FormNativeBase from "./src/screens/form";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";
import ListSoc from "./src/screens/listSoc";
import DetailSoc from "./src/screens/detailSoc";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.muted["800"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Form") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Social Media") {
            iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: theme.colors.muted["800"],
      })}
    >
      <Tab.Screen name="Home" component={Hello} />
      <Tab.Screen name="Form" component={FormNativeBase} />
      <Tab.Screen name="Social Media" component={ListSoc} />
    </Tab.Navigator>
  );
}

export default function Container() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            title: "Increment Decrement",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.muted["800"] },
          }}
        />
        <Stack.Screen
          name="Detail Social"
          component={DetailSoc}
          options={{
            title: "Detail Social",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.muted["800"] },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
