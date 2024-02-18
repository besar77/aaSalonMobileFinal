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

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        backgroundColor: Colors.GOLD,
      }}
    >
      <Image source={Logo} style={textStyles.image} />
      <Text style={textStyles.headerTitle}>Login</Text>
      <View style={textStyles.view}>
        <Text style={{ fontWeight: "500" }}>Phone</Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPhone(text)}
        />
        <Text style={{ fontWeight: "500" }}>Password</Text>
        <TextInput
          style={textStyles.inputsDefault}
          secureTextEntry={true}
          value={password_confirmed}
          onChangeText={(text) => setPasswordConfirm(text)}
        />
        <TouchableOpacity
          style={textStyles.buttons}
          onPress={() => console.log("Btn Clicked")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
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
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: 30,
  },
  inputsDefault: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    borderRadius: 13,
  },
  buttons: {
    padding: 10,
    textAlign: "center",
    paddingHorizontal: 50,
    marginTop: 20,
    backgroundColor: "black",
    borderRadius: 15,
  },
});

export default Login;
