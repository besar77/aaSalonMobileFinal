import { View, Text, Image, FlatList } from "react-native";
import Specialist1 from "../../../assets/Images/Photos/specialist1.jpg";
import React from "react";

export default function Workers() {
  const data = [
    {
      id: 1,
      name: "Albison",
      number: "049582279",
      image: Specialist1,
    },
    {
      id: 2,
      name: "Sula",
      number: "049582279",
      image: Specialist1,
    },
    {
      id: 3,
      name: "Sula",
      number: "049582279",
      image: Specialist1,
    },
  ];

  return (
    <View style={{ marginTop: 30 }}>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 26,
          fontFamily: "outfit-md",
        }}
      >
        Pick a Specialist
      </Text>
      <FlatList
        data={data}
        horizontal={true}
        style={{ marginTop: 20 }}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "outfit-r",
                marginTop: 10,
              }}
            >
              {item.name}
              {"\n"}({item.number})
            </Text>
          </View>
        )}
      />
    </View>
  );
}
