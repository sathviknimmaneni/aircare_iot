import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import DATA from "../db/data";

const Sensor = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [state, setState] = useState({});
  const d = DATA.find((item) => item.id === itemId);

  useEffect(() => {
    navigation.setOptions({ title: `Sensor testing ${itemId}` });
  });

  useEffect(() => {
    switch (true) {
      case d.reading < 25:
        return setState({
          color: "lightgreen",
          text: "LOW",
          subtext: "Some comment",
        });
      case d.reading >= 25 && d.reading < 50:
        return setState({
          color: "green",
          text: "Medium",
          subtext: "Some comment",
        });
      case d.reading >= 50 && d.reading < 75:
        return setState({
          color: "orange",
          text: "HIGH",
          subtext: "Some comment",
        });
      default:
        return setState({
          color: "red",
          text: "Very HIGH",
          subtext: "Some comment",
        });
    }
  }, []);
  // const getBorderColor = (value) => {

  // };

  // console.log(d.reading, getBorderColor(d.reading));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{d.title}</Text>

      <View style={{ ...styles.circle, borderColor: state.color }}>
        <Text style={styles.centerText}>{d.reading}</Text>
        <Text style={styles.units}>AQI</Text>
      </View>

      <Text style={styles.text}>{state.text}</Text>
      <Text style={styles.subtext}>
        {state.subtext} Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Chart", { itemId: itemId })}
      >
        <View style={styles.statsButton}>
          <AntDesign name="linechart" size={32} color="white" />
          <Text
            style={{
              fontSize: 24,
              marginLeft: 15,
              marginRight: 30,
              color: "white",
            }}
          >
            Statistics
          </Text>
          <AntDesign name="arrowright" size={32} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bdc3c7",
  },
  title: {
    fontSize: 48,
    marginBottom: 35,
  },
  centerText: {
    fontSize: 70,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 20,
  },
  units: {
    fontSize: 40,
  },
  statsButton: {
    marginTop: 50,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#2c3e50",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
    backgroundColor: "white",
    borderColor: "lightgreen",
    borderWidth: 25,
    borderRadius: 125,
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    marginBottom: 25,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 20,
    color: "#fff",
  },
});
export default Sensor;
