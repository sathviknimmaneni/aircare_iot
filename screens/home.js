import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import SensorItem from "../components/sensor_item";
import DATA from "../db/data";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
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
    </View>
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
});
