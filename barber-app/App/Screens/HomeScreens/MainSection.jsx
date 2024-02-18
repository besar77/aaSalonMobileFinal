import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MainSectionImg from "../../../assets/Images/Photos/header1.jpg";
// import MainSectionImg from "../../../assets/Images/Photos/headerPhoto.jpg";

import Colors from "../../Utils/Colors";

export default function MainSection() {
  return (
    <View style={style.View}>
      <Image
        source={MainSectionImg}
        style={{
          width: "100%",
          height: 250,
          borderWidth: 0.1,
          borderColor: "white",
          borderRadius: 30,
          position: "relative", // Added this line
        }}
      />
      <Text style={style.text}>GET CUTE TODAY</Text>
      <TouchableOpacity style={style.book}>
        <Text style={{ color: Colors.WHITE, fontFamily: "outfit-md" }}>
          {/* <Text style={{ color: Colors.GOLD, fontFamily: "outfit-md" }}> */}
          Book
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  View: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    top: "30%", // Adjust this value as needed
    right: "10%",
    fontSize: 22,
    color: "white",
    fontFamily: "outfit-b",
  },
  book: {
    position: "absolute",
    bottom: 20, // Adjust this value as needed
    right: 40,
    backgroundColor: Colors.BLACK,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    // borderColor: Colors.GOLD,
    paddingHorizontal: 40,
    paddingVertical: 13,
    borderRadius: 10,
  },
});
