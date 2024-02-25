import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "../../Utils/Colors";
import Logo from "../../../assets/Images/Logo/logoNavbar.png";
import LogoGold from "../../../assets/Images/Logo/logo2Gold.png";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        backgroundColor: Colors.BLACK,
      }}
    >
      <Image source={LogoGold} style={textStyles.image} />
      <Text style={textStyles.headerTitle}>Login</Text>
      <View style={textStyles.view}>
        <Text style={textStyles.labels}>Phone</Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={phone}
          secureTextEntry={true}
          onChangeText={(text) => setPhone(text)}
        />
        <Text style={textStyles.labels}>Password</Text>
        <TextInput
          style={textStyles.inputsDefault}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={textStyles.buttons}
          onPress={() => console.log("Btn Clicked")}
        >
          <Text
            style={{
              color: Colors.BLACK,
              textAlign: "center",
              fontFamily: "outfit-md",
              fontSize: 16,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const textStyles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginTop: 70,
  },
  view: {
    marginTop: 15,
    display: "flex",
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "outfit-md",
    textAlign: "center",
    marginTop: 30,
    color: Colors.GOLD,
  },
  inputsDefault: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: Colors.GOLD,
    borderRadius: 10,
  },
  buttons: {
    padding: 10,
    textAlign: "center",
    paddingHorizontal: 50,
    marginTop: 20,
    backgroundColor: Colors.GOLD,
    borderRadius: 13,
  },
  labels: {
    color: Colors.GOLD,
    fontFamily: "outfit-md",
    fontSize: 14,
    marginBottom: 5,
  },
});

export default Login;
