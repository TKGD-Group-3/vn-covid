import React from "react";
import { Text, View, StyleSheet, Pressable, Modal } from "react-native";
import { FontAwesome5, MaterialIcons } from "react-native-vector-icons";

export default function Popup({ visible, handleClose }) {
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
            <Pressable>
              <View style={styles.option}>
                <FontAwesome5 name="notes-medical" size={30} color="#30B55C" />
                <View style={styles.optionInformation}>
                  <Text style={styles.optionName}>
                    Xem lại và gửi tờ khai y tế
                  </Text>
                </View>
                <MaterialIcons name="navigate-next" size={20} color="#b3b3b3" />
              </View>
            </Pressable>
            <View style={styles.buttonView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleClose}
              >
                <Text style={styles.textStyle}>Đóng</Text>
              </Pressable>
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
  optionInformation: {
  },
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
  },
  city: {
    fontSize: 16,
    fontWeight: "bold",
  },
  welcome: {
    fontSize: 16,
    color: "#ededed",
    paddingVertical: 10,
  },
  location: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
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
