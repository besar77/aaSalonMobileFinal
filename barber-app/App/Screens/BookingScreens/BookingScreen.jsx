import React, { useState } from "react";
import { View, ScrollView, Button, Text } from "react-native";
import BarberInformation from "./BarberInformation";
import ServiceSelection from "./ServiceSelection";
import DateTimeSelection from "./DateTimeSelection";
import Colors from "../../Utils/Colors";

const AppointmentBookingScreen = () => {
  const barber = {
    name: "Albison Vuqiterna",
    photo:
      "https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708646400&semt=ais",
  };

  const services = [
    { id: 1, name: "Haircut", duration: "30 minutes" },
    { id: 2, name: "Beard Trim", duration: "15 minutes" },
    // Add more services as needed
  ];

  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleConfirmAppointment = () => {
    // Implement logic to confirm the appointment
    console.log(
      "Appointment Confirmed:",
      selectedService,
      selectedDate,
      selectedTime
    );
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: Colors.BLACK }}>
      <BarberInformation barber={barber} />
      <ServiceSelection
        services={services}
        onSelectService={handleSelectService}
      />
      <DateTimeSelection
        onDateSelect={setSelectedDate}
        onTimeSelect={setSelectedTime}
      />
      {/* <Button title="Confirm Appointment" onPress={handleConfirmAppointment} /> */}
    </View>
  );
};

export default AppointmentBookingScreen;
