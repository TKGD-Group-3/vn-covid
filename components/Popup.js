import React, { useContext } from "react";
import { QRCodeScannedContext } from "../context/QRCodeContext";

import { Text, View, StyleSheet, Pressable, Modal } from "react-native";

export default function Popup({ visible, handleClose, navigateToHome }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          handleClose();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.welcomeView}>
              <Text style={styles.city}>Bình phước</Text>
              <Text style={styles.welcome}>Chào mừng bạn đã đến!</Text>
              <Text style={styles.location}>FPT Shop Bình Phước</Text>
            </View>
            <View
              style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}
            >
              <View style={styles.buttonView}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleClose}
                >
                  <Text style={styles.textStyle}>Quay lại</Text>
                </Pressable>
              </View>
              <View style={{ flex: 2 }}></View>
              <View style={styles.buttonView}>
                <Pressable
                  style={[styles.button, styles.buttonSubmit]}
                  onPress={navigateToHome}
                // onPress={navigateToHome}
                >
                  <Text style={styles.textStyle}>Gửi KBYT</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#b3b3b3",
    marginBottom: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  icon: {},
  optionInformation: {},
  optionName: {
    marginVertical: 10,
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
    marginBottom: 20,
    flex: 10,
  },
  city: {
    fontSize: 16,
    fontWeight: "bold",
  },
  welcome: {
    fontSize: 18,
    color: "#ededed",
    paddingVertical: 10,
  },
  location: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    width: "100%",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#b3b3b3",
  },
  buttonSubmit: {
    backgroundColor: "#30B55C",
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
