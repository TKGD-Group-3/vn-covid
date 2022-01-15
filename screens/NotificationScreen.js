import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import UserPopup from "../components/UserPopup";
import MenuBottom from "../components/MenuBottom";

const NotificationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View style={{ display: "flex", flexDirection: "column" }}>
        <View style={styles.covidCard}>
          <UserPopup
            visible={modalVisible}
            handleClose={() => setModalVisible(false)}
          />
          <Text style={styles.covidCardText}>THẺ THÔNG TIN COVID</Text>
          <Text style={styles.covidCardText}>P4, Q5, TP.HCM</Text>
          <Pressable onPress={() => setModalVisible(true)} style={{ marginVertical: 8 }}>
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 45,
              }}
            >
              <QRCode value="hello world" size={200} />
            </View>
          </Pressable>
          <Text style={styles.covidCardText}>Nguyễn Văn A</Text>
          <Text style={styles.covidCardText}>Nam - 199x</Text>
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
        <View
          style={{
            margin: 5,
            backgroundColor: "white",
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "#b3b3b3",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View style={{ marginTop: 10 }}>
            <View style={{ alignItems: "center", margin: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Icon
                  style={{ width: 25, height: 25, marginRight: 10 }}
                  name="circle"
                  type="font-awesome"
                  color="#00ff22"
                />
                <Text>14:07 26/11/2021</Text>
              </View>
            </View>
            <View style={styles.center}>
              <Text style={styles.notification}>
                Agribank chi nhánh Phước Bình - Bình Phước có ghi nhận F0 vào
                thời gian gần đây. Vui lòng liên hệ y tế địa phương sớm nhất.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            margin: 5,
            marginTop: 0,
            backgroundColor: "white",
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "#b3b3b3",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View style={{ marginTop: 10 }}>
            <View style={{ alignItems: "center", margin: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Icon
                  style={{ width: 25, height: 25, marginRight: 10 }}
                  name="circle"
                  type="font-awesome"
                  color="gray"
                />
                <Text>14:07 26/11/2021</Text>
              </View>
            </View>
            <View style={styles.center}>
              <Text style={styles.notification}>
                Agribank chi nhánh Phước Bình - Bình Phước có ghi nhận F0 vào
                thời gian gần đây. Vui lòng liên hệ y tế địa phương sớm nhất.
              </Text>
            </View>
          </View>
        </View>
      </View>
      

      {/* <View style={{ flex: -1 }}> */}
      <MenuBottom navigation={navigation} />
      {/* </View> */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  textQr: {
    color: "#30B55C",
    fontWeight: "bold",
    fontSize: 20,
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
    display: "flex",
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
