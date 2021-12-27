import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Index from "./screens/Index";
import NotificationScreen from "./screens/NotificationScreen";
import QRScanner from "./screens/QRScanner";
import MenuScreen from "./screens/MenuScreen";
import PhanAnh from "./screens/PhanAnh";
import NoiDaDen from "./screens/NoiDaDen";
import KhaiBaoYTe from "./screens/KhaiBaoYTe";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="MenuScreen" component={MenuScreen} />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
          />
          <Stack.Screen name="QRScanner" component={QRScanner} />
          <Stack.Screen name="PhanAnh" component={PhanAnh} />
          <Stack.Screen name="NoiDaDen" component={NoiDaDen} />
          <Stack.Screen name="KhaiBaoYTe" component={KhaiBaoYTe} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
