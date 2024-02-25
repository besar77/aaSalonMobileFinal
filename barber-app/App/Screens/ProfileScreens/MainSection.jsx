import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Feather } from "@expo/vector-icons";

const window = Dimensions.get("window");

export default function MainSection() {
  return (
    <View style={styles.mainSection}>
      <Text style={styles.text}>Profile</Text>
      <View style={styles.borderBottom}></View>
      <View style={styles.profili}>
        <View style={styles.userDiv}>
          <Text style={styles.userText}>B</Text>
        </View>
        <Text style={styles.userInfo}>Besar Durguti</Text>
        <Text style={styles.userInfoG}>
          <Feather name="smartphone" size={18} color="white" /> 049582279
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "outfit-md",
    paddingBottom: 10,
  },
  borderBottom: {
    borderBottomColor: "white",
    borderBottomWidth: 0.2,
  },
  mainSection: {
    height: window.height * 0.35,
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profili: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  userDiv: {
    backgroundColor: Colors.WHITE,
    width: "30%",
    height: "40%",
    borderRadius: window.height * 0.2, // Numeric value for borderRadius
    justifyContent: "center",
    alignItems: "center",
  },

  userText: {
    fontSize: 48,
    color: "black",
    fontFamily: "outfit-md",
  },
  userInfo: {
    fontFamily: "outfit-md",
    fontSize: 24,
    marginTop: 15,
    color: Colors.WHITE,
  },
  userInfoG: {
    fontFamily: "outfit-r",
    fontSize: 16,
    marginTop: 5,
    color: Colors.WHITE,
    alignItems: "center",
  },
});
