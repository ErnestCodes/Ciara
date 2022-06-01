import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import AppPicker from "../components/AppPicker";

const CreateScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[tailwind("h-full"), { backgroundColor: "#2A2ABB" }]}>
      <View style={tailwind("flex-row items-center justify-between px-3")}>
        <EvilIcons
          name="close"
          size={28}
          color="white"
          onPress={() => navigation.goBack()}
        />
        {/* selector */}
        <AppPicker />
        <Pressable
          style={tailwind(
            "pt-12 items-center bg-blue-200 px-5 py-1 rounded-full  font-semibold"
          )}
        >
          <Text style={[tailwind("text-sm"), { color: "#2A2ABB" }]}>Add</Text>
        </Pressable>
      </View>

      {/* Notes Section */}
      <View
        style={[
          tailwind("bg-slate-100"),
          {
            padding: 20,
            alignItems: "left",
            marginTop: 15,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        ]}
      >
        <TextInput
          style={{ fontSize: 24, fontWeight: "500" }}
          placeholder="Title"
          multiline={true}
          numberOfLines={3}
          placeholderTextColor="#B2BEB5"
        />
      </View>
      <View style={{ height: "100%" }}>
        <ScrollView style={tailwind("bg-slate-100")}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder="Start typing..."
            placeholderTextColor="#B2BEB5"
            style={{ height: "100%", textAlignVertical: "top", padding: 20 }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
});
