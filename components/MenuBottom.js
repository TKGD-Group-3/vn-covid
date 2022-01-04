import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function MenuBottom({ navigation }) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.center}
        onPress={() => navigation.push("Index")}
      >
        <Icon
          style={styles.icons}
          raised
          name="home"
          type="font-awesome"
          color="gray"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.center}
        onPress={() => navigation.push("NotificationScreen")}
      >
        <Icon
          raised
          style={styles.icons}
          name="bell"
          type="font-awesome"
          color="gray"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.center}
        onPress={() => navigation.push("QRScanner")}
      >
        <Icon
          raised
          style={styles.icons}
          name="qrcode"
          type="font-awesome"
          color="gray"
        />
        {/* <Text style={styles.textQr}>Quét QR</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.center}
        onPress={() => navigation.push("MenuScreen")}
      >
        <Icon
          raised
          style={styles.icons}
          name="ellipsis-v"
          type="font-awesome"
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 25,
    height: 25,
    marginBottom: 15,
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  textQr: {
    color: "#30B55C",
    fontWeight: "bold",
    fontSize: 20,
  },
});
