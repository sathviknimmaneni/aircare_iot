import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

const Settings = () => {
  const [isNEnabled, setIsNEnabled] = useState(false);
  const toggleSwitchN = () => setIsNEnabled((previousState) => !previousState);

  const [isDEnabled, setIsDEnabled] = useState(false);
  const toggleSwitchD = () => setIsDEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingTitle}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#00F260" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchN}
          value={isNEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingTitle}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#00F260" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchD}
          value={isDEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "#bdc3c7",
  },
  setting: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  settingTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Settings;
