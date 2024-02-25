import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../Utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Sections() {
  const [isPressedButton, setPressedButton] = useState(null);

  const handlePressIn = (index) => {
    setPressedButton(index);
  };

  const handlePressOut = () => {
    setPressedButton(null);
  };

  const isPressed = (index) => {
    return isPressedButton === index;
  };

  return (
    <View style={{ marginTop: 40 }}>
      <TouchableOpacity
        style={[style.divSection, isPressed(0) && style.divSectionPressed]}
        onPressIn={() => handlePressIn(0)}
        onPressOut={() => handlePressOut(0)}
      >
        <Text style={style.settingsText}>Account</Text>
        <MaterialIcons
          style={style.iconStyle}
          name="arrow-forward-ios"
          size={20}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.divSection, isPressed(1) && style.divSectionPressed]}
        onPressIn={() => handlePressIn(1)}
        onPressOut={() => handlePressOut(1)}
      >
        <Text style={style.settingsText}>Cuts</Text>
        <MaterialIcons
          style={style.iconStyle}
          name="arrow-forward-ios"
          size={20}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.divSection, isPressed(2) && style.divSectionPressed]}
        onPressIn={() => handlePressIn(2)}
        onPressOut={() => handlePressOut(2)}
      >
        <Text style={style.settingsText}>Chat</Text>
        <MaterialIcons
          style={style.iconStyle}
          name="arrow-forward-ios"
          size={20}
          color="white"
        />
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginTop: 20,
          fontSize: 20,
          color: Colors.GOLD,
          fontFamily: "outfit-b",
        }}
      >
        Sign out
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  settingsText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: "outfit-r",
    paddingHorizontal: 20,
  },
  iconStyle: {
    paddingHorizontal: 20,
  },
  divSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  divSectionPressed: {
    backgroundColor: Colors.GRAY,
    color: "white",
  },
});
