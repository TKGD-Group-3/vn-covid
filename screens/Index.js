import React, { useState, useContext } from "react";
import { QRCodeScannedContext } from "../context/QRCodeContext";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import UserPopup from "../components/UserPopup";
import MenuBottom from "../components/MenuBottom";
import Popup from "../components/Popup";

const Index = ({ navigation }) => {
  const { hasScanned, setHasScanned } = useContext(QRCodeScannedContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.covidCard}>
        <UserPopup
          visible={modalVisible}
          handleClose={() => setModalVisible(false)}
        />
        <Text style={styles.covidCardText}>THẺ THÔNG TIN COVID</Text>
        <Text style={styles.covidCardText}>P4, Q5, TP.HCM</Text>
        <Pressable onPress={() => setModalVisible(true)}>
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 45 }}
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
      <View style={{ flex: 1 }}>
        <Text style={styles.subHeader}>Thông tin ca nhiễm Covid - 19</Text>
        <View style={{ display: "flex", marginHorizontal: 30 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <Text style={styles.tableContentText_1}></Text>
            <Text style={styles.tableHeaderText}>Hôm qua</Text>
            <Text style={styles.tableHeaderText}>Hôm nay</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <Text style={styles.tableContentText_1}>Phường 4</Text>
            <Text style={styles.tableContentText}>123</Text>
            <Text style={styles.tableContentText}>456</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <Text style={styles.tableContentText_1}>Quận 5</Text>
            <Text style={styles.tableContentText}>456</Text>
            <Text style={styles.tableContentText}>741</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <Text style={styles.tableContentText_1}>TP.HCM</Text>
            <Text style={styles.tableContentText}>789</Text>
            <Text style={styles.tableContentText}>582</Text>
          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.notification}>
            Nơi bạn đang sống đang là vùng dịch cấp độ 4. Yêu cầu người dân chỉ
            ra khỏi nhà trong trường hợp thật sự cần thiết.
          </Text>
        </View>
      </View>
      <Popup
        visible={hasScanned}
        handleClose={() => {
          navigation.goBack();
        }}
        navigateToHome={() => setHasScanned(false)}
      />
      <MenuBottom navigation={navigation} />
    </>
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
    paddingBottom: 15,
  },
  covidCard: {
    paddingTop: 5,
    paddingBottom: 20,
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

export default Index;
