import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../Utils/Colors";
import Logo from "../../../assets/Images/Logo/logoNavbar.png";
import LogoGold from "../../../assets/Images/Logo/logo2Gold.png";
import DropDownPicker from "react-native-dropdown-picker";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmed, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

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
      <Text style={textStyles.headerTitle}>Create Account</Text>
      <View style={textStyles.view}>
        <Text
          style={{ fontWeight: "500", color: Colors.GOLD, marginBottom: 5 }}
        >
          Full Name
        </Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text
          style={{ fontWeight: "500", color: Colors.GOLD, marginBottom: 5 }}
        >
          Phone
        </Text>
        <TextInput
          style={textStyles.inputsDefault}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <Text
          style={{ fontWeight: "500", color: Colors.GOLD, marginBottom: 5 }}
        >
          Password
        </Text>
        <TextInput
          style={textStyles.inputsDefault}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text
          style={{ fontWeight: "500", color: Colors.GOLD, marginBottom: 5 }}
        >
          Gender
        </Text>
        <DropDownPicker
          placeholder=""
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={textStyles.dropdown}
          textStyle={textStyles.textStyle}
          dropDownContainerStyle={textStyles.dropdownDrop}
        />

        <TouchableOpacity
          style={textStyles.buttons}
          onPress={() => console.log("Btn Clicked")}
        >
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontFamily: "outfit-b",
            }}
          >
            Register
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
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: 30,
    color: Colors.GOLD,
  },
  inputsDefault: {
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: Colors.GOLD,
    color: Colors.GOLD,
    borderRadius: 10,
  },
  buttons: {
    padding: 10,
    textAlign: "center",
    paddingHorizontal: 50,
    marginTop: 20,
    backgroundColor: Colors.GOLD,
    borderRadius: 10,
  },
  dropdown: {
    width: 300,
    borderColor: Colors.GOLD,
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    borderWidth: 2,
    borderRadius: 10,
  },
  textStyle: {
    color: Colors.GOLD,
    fontFamily: "outfit-md",
    fontSize: 14,
    backgroundColor: Colors.BLACK,
  },
  dropdownDrop: {
    borderColor: Colors.GOLD,
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    zIndex: 1,
    width: 300,
  },
});

export default Register;
