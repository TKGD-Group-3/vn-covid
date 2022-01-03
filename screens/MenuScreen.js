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
    <>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginHorizontal: 25 }}>
            <Pressable style={styles.pressable}>
              <FontAwesome5 style={styles.iconMenu}
                name="qrcode"
                size={40}
                color="#30B55C"
              />
              <Text style={styles.textMenu}>Quản lý QR</Text>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginHorizontal: 25 }}>
            <Pressable style={styles.pressable} onPress={() => navigation.push("KhaiBaoYTe")} >
              <FontAwesome5 style={styles.iconMenu}
                name="notes-medical"
                size={40}
                color="#30B55C"
              />
              <Text style={styles.textMenu}>Khai báo y tế</Text>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginHorizontal: 25 }}>
            <Pressable style={styles.pressable} onPress={() => navigation.push("PhanAnh")}>
              <FontAwesome5 style={styles.iconMenu}
                name="comment-alt"
                size={40}
                color="#30B55C"
              />
              <Text style={styles.textMenu}>Gửi phản ánh</Text>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginHorizontal: 25 }}>
            <Pressable style={styles.pressable} onPress={() => navigation.push("NoiDaDen")}>
              <FontAwesome5 style={styles.iconMenu}
                name="map-pin"
                size={40}
                color="#FFBC01"
              />
              <Text style={styles.textMenu}>Nơi đã đến</Text>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginHorizontal: 25 }}>
            <Pressable style={styles.pressable}>
              <FontAwesome5 style={styles.iconMenu}
                name="cog"
                size={40}
                color="gray"
              />
              <Text style={styles.textMenu}>Cài đặt</Text>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginHorizontal: 25 }}>
            <Pressable style={styles.pressable}>
              <FontAwesome5 style={styles.iconMenu}
                name="book"
                size={40}
                color="#30B55C"
              />
              <Text style={styles.textMenu}>Hướng dẫn</Text>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginHorizontal: 25 }}>
            <Pressable style={styles.pressable}>
              <FontAwesome5 style={styles.iconMenu}
                name="info-circle"
                size={40}
                color="#F59CE1"
              />
              <Text style={styles.textMenu}>Giới thiệu</Text>
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
            style={{ width: 25, height: 25, marginBottom: 15 }}
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
          <Text style={styles.textQr}>Quét QR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.center}
          onPress={() => navigation.push("Index")}
        >
          <Icon
            style={{ width: 25, height: 25, marginBottom: 15 }}
            name="home"
            type="font-awesome"
            color="gray"
          />
        </TouchableOpacity>
      </View>
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
  textQr: {
    color: "#30B55C",
    fontWeight: "bold",
    fontSize: 20,
  },
  textMenu: {
    textAlign: "center",
    fontWeight: "bold",
    width: "60%",
    paddingLeft: 40,
  },
  iconMenu: {
    display: "flex",
    width: "40%",
    justifyContent: "center",
    alignContent: "center"
  }
  ,
  pressable: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
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
