import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import SensorItem from "../components/sensor_item";
import DATA from "../db/data";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        name="settings"
        size={32}
        color="black"
        onPress={() => navigation.navigate("Settings")}
        style={styles.icon}
      />

      <View style={styles.logo}>
        <Feather name="cloud-snow" size={48} color="white" />
        <Text style={styles.title}>AirCare</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Device", { itemId: item.id })}
          >
            <SensorItem data={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#bdc3c7",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    marginTop: 5,
    marginLeft: 10,
    // marginHorizontal: "auto",
    // alignSelf: "center",
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
  },
  icon: {
    marginTop: 20,
    marginRight: 20,
    color: "#2c3e50",
    alignSelf: "flex-end",
  },
  logo: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
