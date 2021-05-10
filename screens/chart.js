import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";

const data = [
  { hour: 1, value: 10 },
  { hour: 2, value: 11 },
  { hour: 3, value: 19 },
  { hour: 4, value: 15 },
  { hour: 5, value: null },
  { hour: 6, value: null },
  { hour: 7, value: 13 },
  { hour: 8, value: 20 },
];

const Chart = ({ route }) => {
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plot between Time and Sensor readings</Text>
      <VictoryChart
        theme={VictoryTheme.material}
        domain={{ x: [1, 10], y: [10, 20] }}
      >
        <VictoryAxis
          // dependentAxis
          tickFormat={(tick) => `${Math.round(tick)} hrs`}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${Math.round(tick)} val`}
        />

        <VictoryLine x="hour" y="value" data={data} />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bdc3c7",
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
  },
});
export default Chart;
