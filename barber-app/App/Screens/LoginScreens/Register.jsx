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

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmed, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

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
      <Text style={textStyles.headerTitle}>Create Account</Text>
      <View style={textStyles.view}>
        <Text style={{ fontFamily:'outfit-md',color: Colors.GOLD, marginBottom:4, fontSize:14 }}>Name</Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={{ fontFamily:'outfit-md',color: Colors.GOLD, marginBottom:4, fontSize:14 }}>Username</Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={name}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={{ fontFamily:'outfit-md',color: Colors.GOLD, marginBottom:4, fontSize:14 }}>Phone</Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={phone}
          secureTextEntry={true}
          onChangeText={(text) => setPhone(text)}
        />
        <Text style={{ fontFamily:'outfit-md',color: Colors.GOLD, marginBottom:4, fontSize:14 }}>Password</Text>
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
          <Text style={{ color: Colors.BLACK, fontSize:16, fontFamily:'outfit-md',textAlign:'center' }}>Register</Text>
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
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: 30,
    color:Colors.GOLD
  },
  inputsDefault: {
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderWidth: 3,
    borderColor: Colors.GOLD,
    borderRadius: 10,
  },
  buttons: {
    padding: 10,
    textAlign: "center",
    paddingHorizontal: 50,
    marginTop: 20,
    backgroundColor: Colors.GOLD,
    borderRadius: 15,
  },
});

export default Register;
