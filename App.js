import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/home";
import Device from "./screens/sensor";
import Chart from "./screens/chart.js";
import Settings from "./screens/Settings";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          // get reference to navigation
          headerStyle: {
            backgroundColor: "#bdc3c7",
          },
          headerTitleStyle: {
            fontWeight: "800",
            fontSize: 24,
            color: "#2c3e50",
          },
          headerRight: () => (
            <Ionicons
              name="settings"
              size={24}
              color="black"
              onPress={() => navigation.navigate("Settings")}
              style={{ marginRight: 20, color: "#2c3e50" }}
            />
          ),
        })}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Device" component={Device} />
        <Stack.Screen name="Chart" component={Chart} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
