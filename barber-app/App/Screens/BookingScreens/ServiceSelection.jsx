import React, { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";
import DropDownPicker from "react-native-dropdown-picker";

const ServiceSelection = ({ services, onSelectService }) => {
  const [open, setOpen] = useState(false);
  const [openBarber, setOpenBarber] = useState(false);

  const [value, setValue] = useState(null);
  const [valueBarber, setValueBarer] = useState(null);

  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [barbers, setBarbers] = useState([
    { label: "Albison", value: "Albison" },
    { label: "Sula", value: "Sula" },
  ]);

  return (
    <View style={{ marginTop: 50 }}>
      <View>
        <Text
          style={{
            color: Colors.WHITE,
            marginBottom: 5,
            fontSize: 14,
            fontFamily: "outfit-b",
          }}
        >
          Choose a barber
        </Text>
        <DropDownPicker
          placeholder=""
          open={openBarber}
          value={valueBarber}
          items={barbers}
          setOpen={setOpenBarber}
          setValue={setValueBarer}
          setItems={setBarbers}
          style={style.dropdown}
          textStyle={style.textStyle}
          dropDownContainerStyle={style.dropdown}
        />
      </View>
      <Text
        style={{
          color: Colors.WHITE,
          marginBottom: 5,
          fontSize: 14,
          fontFamily: "outfit-b",
        }}
      >
        Choose a service
      </Text>
      <DropDownPicker
        placeholder=""
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={style.dropdown}
        textStyle={style.textStyle}
        dropDownContainerStyle={style.dropdownDrop}
      />
    </View>
  );
};

const style = StyleSheet.create({
  dropdown: {
    borderColor: Colors.WHITE,
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    marginBottom: 20,
    zIndex: 0,
  },
  textStyle: {
    color: Colors.WHITE,
    fontFamily: "outfit-md",
    fontSize: 14,
    backgroundColor: Colors.BLACK,
  },
  dropdownDrop: {
    borderColor: Colors.GOLD,
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
  },
});

export default ServiceSelection;
