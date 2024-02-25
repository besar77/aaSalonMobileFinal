import React from "react";
import { View, Text, Image } from "react-native";
import Colors from "../../Utils/Colors";

const BarberInformation = ({ barber }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{ uri: barber.photo }}
        style={{ width: 150, height: 150, borderRadius: 100 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-md",
          marginVertical: 10,
          color: Colors.WHITE,
        }}
      >
        {barber.name}
      </Text>
    </View>
  );
};

export default BarberInformation;
