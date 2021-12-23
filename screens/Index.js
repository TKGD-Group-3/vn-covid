import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const Index = ({ navigation }) => {
  return (
    <View>
      <View style={styles.covidCard}>
        <Text style={styles.covidCardText}>THẺ THÔNG TIN COVID</Text>
        <Text style={styles.covidCardText}>P4, Q5, TP.HCM</Text>
        <Image
          style={styles.covidCardImage}
          source={require("../assets/QRCode.png")}
        />
        <Text style={styles.covidCardText}>Nguyễn Văn A</Text>
        <Text style={styles.covidCardText}>Nam - 199x</Text>
        <View style={styles.flexCenter}>
          <Image source={require("../assets/Verified_Icon.png")} />
          <Text style={styles.covidCardTextSmall}>Đã tiêm 2 mũi vaccine</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.subHeader}>Thông tin ca nhiễm Covid - 19</Text>
        <View style={styles.table}>
          <Text style={styles.tableHeaderText}></Text>
          <Text style={styles.tableHeaderText}>Hôm qua</Text>
          <Text style={styles.tableHeaderText}>Hôm nay</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.tableContentText}>Phường 4</Text>
          <Text style={styles.tableContentText}>123</Text>
          <Text style={styles.tableContentText}>456</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.tableContentText}>Quận 5</Text>
          <Text style={styles.tableContentText}>456</Text>
          <Text style={styles.tableContentText}>789</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.tableContentText}>TP.HCM</Text>
          <Text style={styles.tableContentText}>741</Text>
          <Text style={styles.tableContentText}>852</Text>
        </View>
      </ScrollView>
      <View style={styles.center}>
        <Text style={styles.notification}>
          Nơi bạn đang sống đang là vùng dịch cấp độ 4. Yêu cầu người dân chỉ ra
          khỏi nhà trong trường hợp thật sự cần thiết.
        </Text>
      </View>
      <View style={styles.menu}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/Bell_Icon.png")}
        />
        <TouchableOpacity
          style={styles.center}
          onPress={() => navigation.push("QRScanner")}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/QR_Icon.png")}
          />
          <Text style={styles.tableHeaderText}>Quét QR</Text>
        </TouchableOpacity>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/Menu_Icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
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
    paddingTop: 20,
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
  flexCenter: {
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
