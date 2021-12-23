import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

// import QRScanner from "./screens/QRScanner";
import Index from "./screens/Index";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Index />
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
