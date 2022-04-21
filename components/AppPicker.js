import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useTailwind } from "tailwind-rn";

const AppPicker = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex-row items-center")}>
      <Text style={tailwind("text-base text-white")}>Category</Text>
      <MaterialIcons name="expand-more" size={28} color="white" />
    </View>
  );
};

export default AppPicker;
