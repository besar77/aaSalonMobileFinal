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
  const [password_confirmed, setPassword_confirmed] = useState("");

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent:'center',
        height: "100%",
        backgroundColor: Colors.BLACK,
      }}
    >
      <Image source={LogoGold} style={textStyles.image} />
      <Text style={textStyles.headerTitle}>Login</Text>
      <View style={textStyles.view}>
        <Text style={{ fontFamily:'outfit-md',color: Colors.GOLD, marginBottom:4, fontSize:14 }}>Phone</Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPhone(text)}
        />
        <Text style={{ fontFamily:'outfit-md',color: Colors.GOLD, marginBottom:4, fontSize:14 }}>Password</Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPhone(text)}
        />
        <TouchableOpacity
          style={textStyles.buttons}
          onPress={() => console.log("Btn Clicked")}
        >
          <Text style={{ color:Colors.BLACK,textAlign:'center',fontFamily:'outfit-md',fontSize:16 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const textStyles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  view: {
    marginTop: 15,
    display: "flex",
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily:'outfit-md',
    color:Colors.GOLD,
    textAlign: "center",
    marginTop: 30,
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
});

export default Login;
