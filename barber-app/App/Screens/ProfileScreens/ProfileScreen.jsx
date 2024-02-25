import { View, Text, ScrollView } from "react-native";
import React from "react";
import MainSection from "./MainSection";
import Colors from "../../Utils/Colors";
import Sections from "./Sections";

export default function ProfileScreen() {
  return (
    <ScrollView style={{ backgroundColor: Colors.BLACK }}>
      <MainSection />
      <Sections />
    </ScrollView>
  );
}
