import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Register from "./App/Screens/LoginScreens/Register";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Screens/Navigations/TabNavigation";
import { useFonts } from "expo-font";
import Login from "./App/Screens/LoginScreens/Login";

export default function App() {
  const [fontsLoaded] = useFonts({
    "outfit-b": require("./assets/Fonts/Outfit-Bold.ttf"),
    "outfit-md": require("./assets/Fonts/Outfit-Medium.ttf"),
    "outfit-r": require("./assets/Fonts/Outfit-Regular.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <NavigationContainer>
          <TabNavigation />
        </NavigationContainer> */}
        <Register />
        {/* <Login /> */}
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Set background color if needed
  },
  content: {
    flex: 1,
  },
});
