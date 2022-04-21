import React from "react";
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <StackNavigator />
      </TailwindProvider>
    </NavigationContainer>
  );
}
