import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

import UserPopup from "../components/UserPopup";

const NotificationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.covidCard}>
        <UserPopup
          visible={modalVisible}
          handleClose={() => setModalVisible(false)}
        />
        <Text style={styles.covidCardText}>THẺ THÔNG TIN COVID</Text>
        <Text style={styles.covidCardText}>P4, Q5, TP.HCM</Text>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image
            style={styles.covidCardImage}
            source={require("../assets/QRCode.png")}
          />
        </Pressable>
        <Text style={styles.covidCardText}>Nguyễn Văn A</Text>
        <Text style={styles.covidCardText}>Nam - 199x</Text>
        <View style={styles.vaccine}>
          <Image source={require("../assets/Verified_Icon.png")} />
          <Text style={styles.covidCardTextSmall}>Đã tiêm 2 mũi vaccine</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <View style={{ alignItems: "center", margin: 5 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Icon
                style={{ width: 25, height: 25 }}
                name="circle"
                type="font-awesome"
                color="gray"
              />
              <Text>14:07 26/11/2021</Text>
            </View>
          </View>
          <View style={styles.center}>
            <Text style={styles.notification}>
              Agribank chi nhánh Phước Bình - Bình Phước có ghi nhận F0 vào thời
              gian gần đây. Vui lòng liên hệ y tế địa phương sớm nhất.
            </Text>
          </View>
        </View>
        <View>
          <View style={{ alignItems: "center", margin: 5 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Icon
                style={{ width: 25, height: 25 }}
                name="circle"
                type="font-awesome"
                color="gray"
              />
              <Text>14:07 26/11/2021</Text>
            </View>
          </View>
          <View style={styles.center}>
            <Text style={styles.notification}>
              Agribank chi nhánh Phước Bình - Bình Phước có ghi nhận F0 vào thời
              gian gần đây. Vui lòng liên hệ y tế địa phương sớm nhất.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.center}
          onPress={() => navigation.push("Index")}
        >
          <Icon
            style={{ width: 25, height: 25 }}
            name="home"
            type="font-awesome"
            color="gray"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.center}
          onPress={() => navigation.push("QRScanner")}
        >
          <Icon
            style={{ width: 25, height: 25 }}
            raised
            name="qrcode"
            type="font-awesome"
            color="gray"
          />
          <Text style={styles.tableHeaderText}>Quét QR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.center}
          onPress={() => navigation.push("MenuScreen")}
        >
          <Icon
            style={{ width: 25, height: 25 }}
            name="ellipsis-v"
            type="font-awesome"
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tableContentText: {
    color: "#929292",
    fontWeight: "bold",
    fontSize: 20,
  },
  tableHeaderText: {
    color: "#30B55C",
    fontWeight: "bold",
    fontSize: 20,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  notification: {
    color: "#FF0000",
    fontSize: 18,
    fontWeight: "bold",
    width: "80%",
    paddingBottom: 15,
  },
  covidCard: {
    flex: 2,
    paddingTop: 5,
    paddingBottom: 30,
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

export default NotificationScreen;
