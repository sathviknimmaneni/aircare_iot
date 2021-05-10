import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SensorItem = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.text}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.time}>last updated 1 hr ago</Text>
        </View>
        {data.icon}
      </View>
      <Text style={styles.value}>{data.reading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: 25,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  top: {
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
    color: "white",
  },
  text: {
    flexDirection: "column",
    marginLeft: 5,
    flexGrow: 1,
  },
  time: {
    color: "white",
  },
  value: {
    fontSize: 48,
    color: "white",
    marginTop: 15,
  },
});

export default SensorItem;
