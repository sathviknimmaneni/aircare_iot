import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, Button } from "react-native";

const Device = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.thingspeak.com/channels/1235452/fields/1.json?results=1")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  return (
    <View>
      <Text>Device</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>{data.channel.field1}</Text>
          <Text>{data.channel.name}</Text>
        </View>
      )}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Device;
