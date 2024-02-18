import { View, ScrollView } from "react-native";
import React from "react";
import Header from "./Header";
import Colors from "../../Utils/Colors";
import MainSection from "./MainSection";
import Services from "./Services";
import Workers from "./Workers";

export default function HomeScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.BLACK, paddingHorizontal: 10 }}
    >
      <Header />
      <MainSection />
      <Services />
      <Workers />
    </ScrollView>
  );
}
