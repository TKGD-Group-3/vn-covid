import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import UserPopup from "./UserPopup";

export default function CovidCard() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.covidCard}>
      <UserPopup
        visible={modalVisible}
        handleClose={() => setModalVisible(false)}
      />
      <Text style={[styles.covidCardText, { marginTop: -5 }]}>
        THẺ THÔNG TIN COVID
      </Text>
      <Text style={styles.covidCardText}>P4, Q5, TP.HCM</Text>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{ marginVertical: 8 }}
      >
        <View
          style={{ backgroundColor: "white", padding: 20, borderRadius: 45 }}
        >
          <QRCode value="hello world" size={200} />
        </View>
      </Pressable>
      <View style={{ marginTop: -5, marginBottom: 5 }}>
        <Text style={{ color: "white", fontStyle: "italic" }}>
          (Click vào mã QR để xem thông tin chi tiết)
        </Text>
      </View>
      <Text style={styles.covidCardText}>Nguyễn Văn A</Text>
      {/* <Text style={styles.covidCardText}>Nam - 199x</Text> */}
      <View style={styles.vaccine}>
        <Icon
          style={{ width: 25, height: 25 }}
          name="check"
          type="font-awesome"
          color="white"
        />
        <Text style={styles.covidCardTextSmall}>Đã tiêm 2 mũi vaccine</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  tableContentText_1: {
    width: "33%",
    color: "#929292",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    marginBottom: 10,
    textAlign: "center",
  },
  tableContentText: {
    width: "33%",
    color: "#929292",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  tableHeaderText: {
    width: "33%",
    color: "#30B55C",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },

  notification: {
    color: "#FF0000",
    fontSize: 18,
    fontWeight: "bold",
    width: "80%",
    marginTop: 10,
    marginBottom: -10,
  },
  covidCard: {
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: "#30B55C",
    alignItems: "center",
  },
  covidCardText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  covidCardTextSmall: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  covidCardImage: {
    marginTop: 5,
  },
  vaccine: {
    flexDirection: "row",
    alignItems: "center",
  },
  table: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});
