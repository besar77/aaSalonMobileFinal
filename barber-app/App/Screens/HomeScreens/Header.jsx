import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Images/Logo/logo2Gold.png";
import Colors from "../../Utils/Colors";
import axiosClient from "../../axios";

export default function Header() {
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   const fetchTeksti = async () => {
  //     try {
  //       const response = await axiosClient.get("/api/getSiteTitle");
  //       const message = response.data.headerTitle.value;
  //       setText(message);
  //       // console.log(response.data.headerTitle.value);
  //     } catch (error) {
  //       console.error("Error in fetchTeksti:", error);
  //     }
  //   };

  //   fetchTeksti();
  // }, []);

  return (
    <View style={[style.View, platformSpecificStyles]}>
      <Text
        style={{
          color: Colors.GOLD,
          fontSize: 15,
          fontFamily: "outfit-medium",
        }}
      >
        {/* {text ? text : "Hello, Besar!"} */}
        Hello, Besar!
      </Text>
      <Image source={Logo} style={{ width: 45, height: 45 }} />
      {/* <TouchableOpacity style={style.button}>
        <Text style={{ color: Colors.BLACK, fontSize: 10 }}>BOOK</Text>
      </TouchableOpacity> */}
      {/* <Text>hello</Text> */}
    </View>
  );
}

const style = StyleSheet.create({
  View: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: Colors.GOLD,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
  },
});

const platformSpecificStyles = Platform.select({
  android: {
    marginTop: 30,
  },
  ios: {
    marginTop: 10,
  },
  default: {
    marginTop: 20, // Default value if platform is not explicitly matched
  },
});
