import React from "react";
import { View, StyleSheet } from "react-native";

import QRScanner from "./screens/QRScanner";

export default function App() {
  return (
    <View style={styles.container}>
      <QRScanner />
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
