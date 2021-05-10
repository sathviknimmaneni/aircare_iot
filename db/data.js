import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    title: "Air Quality",
    icon: <FontAwesome5 name="wind" size={50} color="white" />,
    data: [99, 75, 85, 80],
    reading: 24,
  },
  {
    id: "2",
    reading: 50,
    title: "Humidity",
    icon: <Entypo name="water" size={50} color="white" />,
    data: [13, 15, 10, 9],
  },
  {
    id: "3",
    reading: 78,
    title: "Rain Detection",
    icon: <FontAwesome5 name="cloud-sun-rain" size={50} color="white" />,
    data: [1, 5, 35, 19],
  },
];

export default DATA;
