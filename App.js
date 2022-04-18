import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const colors = {
  themeColor: "#dd2476",
  white: "#fff",
  background: "#f4f6fc",
  greyColor: "#a4a4a4",
  tint: "#a1215b",
};

const notes = [
  {
    noteTitle: "Morning Walk",
    icon: "hiking",
    theme: "#008b8b",
    timeStamp: "Today . 8pm",
  },
  {
    noteTitle: "Meeting with CEO",
    icon: "account-tie",
    theme: "#37003c",
    timeStamp: "Monday . 9pm",
  },
  {
    noteTitle: "Shopping with fam",
    icon: "cart",
    theme: "#fed123",
    timeStamp: "Saturday . 8pm",
  },
  {
    noteTitle: "Gym time",
    icon: "weight",
    theme: "#008b8b",
    timeStamp: "Saturday . 9am",
  },
];

const Allnotes = ({ noteTitle, icon, theme, timeStamp }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme, marginRight: 5 }}
        />
        <View>
          <Text style={{ fontSize: 16 }}>{noteTitle}</Text>
          <Text style={{ color: colors.greyColor }}>{timeStamp}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{ color: theme }}
        />
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{ color: theme, marginLeft: 5 }}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor={colors.themeColor} /> */}
      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: colors.white }}
          />
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: colors.white }}
            />
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
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>

      <ScrollView style={{ backgroundColor: colors.background }}>
        {notes.map((note) => (
          <Allnotes
            noteTitle={note.noteTitle}
            icon={note.icon}
            timeStamp={note.timeStamp}
            theme={note.theme}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 16 : null,
    backgroundColor: colors.themeColor,
  },
});
