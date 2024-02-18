import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Shave from "../../../assets/Images/Photos/shave.jpg";
import Fades from "../../../assets/Images/Photos/fades.jpg";
import Colors from "../../Utils/Colors";
export default function Services() {
  const data = [
    {
      id: 1,
      image: Fades,
      title: "Cuts and fades",
      price: "80$",
    },
    {
      id: 2,
      image: Shave,
      title: "Facials",
      price: "40$",
    },
  ];

  return (
    <View style={{ marginTop: 30 }}>
      <Text
        style={{
          color: "white",
          // color: Colors.GOLD,
          fontFamily: "outfit-md",
          fontSize: 26,
          textAlign: "center",
        }}
      >
        Services
      </Text>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={item.image}
              style={{
                aspectRatio: 1.55,
                height: 220,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                marginTop: 10,
                marginRight: 20,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "white",
                marginRight: 20,
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "left",
                  fontFamily: "outfit-md",
                }}
              >
                {item.title} - {item.price}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "black",
                  padding: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white", fontFamily: "outfit-md" }}>
                  Book
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
