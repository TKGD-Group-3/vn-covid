import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { Icon } from "react-native-elements";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="qrcode"
                    size={30}
                    color="#30B55C"
                    style={{ marginTop: 7, paddingRight: 30 }}
                  />
                  <View style={styles.optionInformation}>
                    <Text style={styles.optionName}>Quản lý QR</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="notes-medical"
                    size={30}
                    color="#30B55C"
                    style={{ marginTop: 7, paddingRight: 30 }}
                  />
                  <View style={styles.optionInformation}>
                    <Text style={styles.optionName}>Khai báo y tế</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="comment-alt"
                    size={30}
                    color="#33B35D"
                    style={{ marginTop: 7, paddingRight: 30 }}
                  />
                  <View
                    style={[
                      styles.optionInformation,
                      { marginTop: 5, marginLeft: -14 },
                    ]}
                  >
                    <Text style={styles.optionName}>Gửi phản ánh</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="map-pin"
                    size={30}
                    color="#FFBC01"
                    style={{ marginTop: 7, paddingRight: 30 }}
                  />
                  <View
                    style={[
                      styles.optionInformation,
                      { marginTop: 5, marginLeft: -14 },
                    ]}
                  >
                    <Text style={styles.optionName}>Nơi đã đến</Text>
                  </View>
                </View>
              </View>
            </Pressable>

            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="cog"
                    size={30}
                    color="gray"
                    style={{ marginTop: 7, paddingRight: 30 }}
                  />
                  <View
                    style={[
                      styles.optionInformation,
                      { marginTop: 5, marginLeft: -14 },
                    ]}
                  >
                    <Text style={styles.optionName}>Cài đặt</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="book"
                    size={30}
                    color="#1EBA9A"
                    style={{ marginTop: 7, paddingRight: 30 }}
                  />
                  <View
                    style={[
                      styles.optionInformation,
                      { marginTop: 5, marginLeft: -14 },
                    ]}
                  >
                    <Text style={styles.optionName}>Hướng dẫn</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="info-circle"
                    size={30}
                    color="#F59CE1"
                    style={{ marginTop: 7, paddingRight: 30 }}
                  />
                  <View
                    style={[
                      styles.optionInformation,
                      { marginTop: 5, marginLeft: -14 },
                    ]}
                  >
                    <Text style={styles.optionName}>Giới thiệu</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.center}
          onPress={() => navigation.push("NotificationScreen")}
        >
          <Icon
            style={{ width: 25, height: 25 }}
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
          onPress={() => navigation.push("Index")}
        >
          <Icon
            style={{ width: 25, height: 25 }}
            name="home"
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
  tableHeaderText: {
    color: "#30B55C",
    fontWeight: "bold",
    fontSize: 20,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  option: {
    alignItems: "center",
    justifyContent: "space-between",
    // borderTopWidth: 1,
    // borderColor: "#30B55C",
    paddingVertical: 8,
    flexDirection: "row",
  },
  userInfo: {
    borderBottomWidth: 1,
    borderColor: "white",
    margin: 5,
    alignItems: "center",
    paddingBottom: 15,
  },
  detailInfo: {
    marginTop: 5,
    marginLeft: 5,
  },
  icon: {},
  optionInformation: {
    justifyContent: "center",
  },
  optionName: {
    marginVertical: 5,
    fontWeight: "bold",
  },
  welcomeView: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#30B55C",
    borderRadius: 10,
  },
  buttonView: {
    alignItems: "center",
    marginTop: 20,
  },
  city: {
    fontSize: 16,
    fontWeight: "bold",
  },
  welcome: {
    fontSize: 16,
    color: "#ededed",
    paddingVertical: 2,
  },
  location: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    paddingTop: 10,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MenuScreen;
