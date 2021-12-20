import React from "react";
import { View, StyleSheet } from "react-native";

import QRScanner from "./screens/QRScanner";
import Popup from "./components/Popup";

export default function App() {
  return (
    <View style={styles.container}>
      <Popup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
