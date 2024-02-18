import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../HomeScreens/HomeScreen";
import ProfileScreen from "../ProfileScreens/ProfileScreen";
import MapScreen from "../MapScreens/MapScreen";
import ProductScreen from "../ProductScreens/ProductScreen";
import BookingScreen from "../BookingScreens/BookingScreen";
import { Feather } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.GOLD,
          tabBarStyle: { backgroundColor: Colors.BLACK },
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Home
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="booking"
          component={BookingScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Booking
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="book" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Map
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Feather name="map" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="products"
          component={ProductScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Products
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="laptop" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                Profile
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
