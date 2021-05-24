import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    title: "Air Quality",
    icon: <FontAwesome5 name="wind" size={50} color="white" />,
    units: "ppm",
    data: [
      { hour: 5, value: 64 },
      { hour: 10, value: 65 },
      { hour: 15, value: 65 },
      { hour: 20, value: 66 },
      { hour: 25, value: 64 },
      { hour: 30, value: 65 },
      { hour: 35, value: 65 },
    ],
    reading: 65,
    domain: { x: [0, 40], y: [60, 67] },
  },
  {
    id: "2",
    reading: 50,
    title: "Humidity",
    icon: <Entypo name="water" size={50} color="white" />,
    units: "%",
    data: [
      { hour: 1, value: 65 },
      { hour: 2, value: 60 },
      { hour: 3, value: 62 },
      { hour: 4, value: 58 },
      { hour: 5, value: 55 },
      { hour: 6, value: 50 },
    ],
    domain: { x: [0, 8], y: [45, 70] },
  },
  {
    id: "3",
    reading: 1050,
    title: "Pressure",
    icon: <MaterialCommunityIcons name="speedometer" size={50} color="white" />,
    units: "hpa",
    data: [
      { hour: 1, value: 1045.78 },
      { hour: 2, value: 1046.7 },
      { hour: 3, value: 1048.55 },
      { hour: 4, value: 1049.5 },
      { hour: 5, value: 1049.89 },
      { hour: 6, value: 1050.02 },
    ],
    domain: { x: [0, 8], y: [1040, 1055] },
  },
  {
    id: "4",
    reading: 34,
    title: "Temperature",
    icon: <Ionicons name="thermometer-outline" size={50} color="white" />,
    units: "c",
    data: [
      { hour: 1, value: 28 },
      { hour: 2, value: 27 },
      { hour: 3, value: 29 },
      { hour: 4, value: 29 },
      { hour: 5, value: 32 },
      { hour: 6, value: 34 },
    ],
    domain: { x: [0, 8], y: [22, 37] },
  },
];

export default DATA;
