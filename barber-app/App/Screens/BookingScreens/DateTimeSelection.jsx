import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../Utils/Colors";
import { format, addMonths } from "date-fns";

const DateTimeSelection = ({ onDateSelect, onTimeSelect }) => {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const toggleDatePicker = () => {
    setShow(!show);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setText(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIosDate = () => {
    setDate(date);
    setText(date.toDateString());
    toggleDatePicker();
  };

  return (
    <ScrollView>
      <Text style={style.text}>Data</Text>
      {show && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
          style={style.datePicker}
          minimumDate={new Date()}
          maximumDate={addMonths(new Date(), 1)}
        />
      )}

      {show && Platform.OS === "ios" && (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={confirmIosDate}
            style={{
              padding: 10,
              paddingHorizontal: 30,
              marginTop: 10,
              borderRadius: 10,
              // backgroundColor: Colors.GOLD,
              borderWidth: 1,
              borderColor: Colors.GOLD,
            }}
          >
            <Text
              style={{
                // color: Colors.BLACK,
                color: Colors.GOLD,
                fontSize: 14,
                fontFamily: "outfit-md",
              }}
            >
              Confirm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShow(false)}
            style={{
              padding: 10,
              paddingHorizontal: 30,
              marginTop: 10,
              borderRadius: 10,
              // backgroundColor: Colors.GOLD,
              borderWidth: 1,
              borderColor: Colors.GOLD,
            }}
          >
            <Text
              style={{
                // color: Colors.BLACK,
                color: Colors.GOLD,
                fontSize: 14,
                fontFamily: "outfit-md",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {!show && (
        <View style={style.buttonStyle}>
          <Pressable onPress={toggleDatePicker}>
            <Text style={style.textInput} onPressIn={toggleDatePicker}>
              {text}
            </Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
};

export default DateTimeSelection;

const style = StyleSheet.create({
  buttonStyle: {
    borderWidth: 1,
    borderColor: Colors.GOLD,
    color: Colors.GOLD,
    padding: 15,
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: "outfit-b",
    color: Colors.GOLD,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 14,
    fontFamily: "outfit-md",
    color: Colors.GOLD,
  },
  datePicker: {
    backgroundColor: Colors.GOLD,
    color: "red",
    height: 120,
    marginTop: -20,
  },
});
