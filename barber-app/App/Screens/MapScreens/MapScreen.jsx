import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

const LocationExample = () => {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState({
    latitude: 42.3967,
    longitude: 20.6531,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        // Handle the case where location access is denied
        // You can show a message to the user or take other actions
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  const region = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
    : null;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={
          region || {
            latitude: destination.latitude,
            longitude: destination.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }
        }
      >
        {location && <Marker coordinate={location} title="Your Location" />}
        <Marker
          coordinate={destination}
          title="Rahovec, Kosovo"
          pinColor="green"
        />
        {location && (
          <Polyline
            coordinates={[
              { latitude: location.latitude, longitude: location.longitude },
              {
                latitude: destination.latitude,
                longitude: destination.longitude,
              },
            ]}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        )}
      </MapView>
    </View>
  );
};

export default LocationExample;
