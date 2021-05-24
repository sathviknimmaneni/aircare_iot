import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";

import DATA from "../db/data";

const Chart = ({ route }) => {
  const { itemId } = route.params;
  const d = DATA.find((item) => item.id === itemId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Plot between Time (mins) and {d.title} ({d.units})
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: 25,
          width: "70%",
        }}
      >
        <VictoryChart theme={VictoryTheme.material} domain={d.domain}>
          <VictoryAxis
            // dependentAxis
            tickFormat={(tick) => `${tick} mins`}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(tick) => `${Math.round(tick)} ${d.units}`}
          />

          <VictoryLine x="hour" y="value" data={d.data} />
        </VictoryChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
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
