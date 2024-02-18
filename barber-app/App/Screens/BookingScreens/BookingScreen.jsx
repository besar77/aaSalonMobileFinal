import { View, Text, Image } from "react-native";
import React from "react";
import img from "../../../assets/Images/Photos/headerPhoto.jpg";

export default function BookingScreen() {
  return (
    <View>
      <Image source={img} />
      <Text>BookingScreen</Text>
    </View>
  );
}
