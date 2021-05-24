import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import DATA from "../db/data";
import ModalComponent from "../components/modal";

const Sensor = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [state, setState] = useState({});
  const d = DATA.find((item) => item.id === itemId);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    switch (true) {
      case d.reading >= 0 && d.reading < 100:
        return setState({
          color: "lightgreen",
          text: "LOW",
          subtext: "it is safe you can go",
        });
      case d.reading >= 100 && d.reading < 150:
        return setState({
          color: "orange",
          text: "Moderate",
          subtext: "a bit risky take precautions",
        });
      case d.reading >= 150:
        return setState({
          color: "red",
          text: "HIGH",
          subtext: "it is hazardous don't come out",
        });
      default:
        return setState({
          color: "grey",
          text: "invalid value",
          subtext: "",
        });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{d.title}</Text>

      <ModalComponent modal={modal} setModal={setModal} />

      <View
        style={{
          ...styles.circle,
          borderColor:
            d.units === "ppm"
              ? state.color
              : d.units === "c"
              ? "orange"
              : "green",
        }}
      >
        <Text style={styles.centerText}>{d.reading}</Text>
        <Text style={styles.units}>{d.units}</Text>
      </View>

      {d.units === "ppm" ? (
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text style={{ ...styles.text, marginRight: 8 }}>{state.text}</Text>
            <Pressable onPress={() => setModal(true)}>
              <AntDesign name="infocirlceo" size={20} color="#2c3e50" />
            </Pressable>
          </View>
          <Text style={styles.subtext}>{state.subtext}</Text>
        </View>
      ) : null}

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
