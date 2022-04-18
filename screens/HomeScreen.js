import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../colors";
import { notes } from "../dummy";
import Notes from "../components/Notes";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="bell-outline"
            size={30}
            style={{ color: colors.white }}
          />
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="user" size={30} style={{ color: colors.white }} />
          </View>
        </View>

        {/* Name Area */}
        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.white, fontSize: 30 }}>
            {"Hello,\nNnaemeka"}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{ color: colors.white }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{ color: colors.white }}
              />
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Notes Area */}
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>Notes</Text>
        <MaterialCommunityIcons
          name="plus"
          size={40}
          style={{
            color: colors.themeColor,
            marginHorizontal: 8,
          }}
        />
      </View>

      <View style={{ height: "60%" }}>
        <ScrollView
          style={{
            backgroundColor: colors.background,
            flex: 1,
          }}
        >
          {notes.map((note, index) => (
            <Notes
              key={index}
              noteTitle={note.noteTitle}
              icon={note.icon}
              timeStamp={note.timeStamp}
              theme={note.theme}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 16 : null,
    backgroundColor: colors.themeColor,
  },
});
