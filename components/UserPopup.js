import React from "react";
import { Text, View, StyleSheet, Pressable, Modal } from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

export default function UserPopup({ visible, handleClose }) {
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
              <View style={{ width: "100%" }}>
                <View style={styles.userInfo}>
                  <Text style={styles.city}>Thành phố Hồ Chí Minh</Text>
                  <Text style={styles.location}>Nguyễn Văn A</Text>
                  <Text style={styles.welcome}>Nam - 199x</Text>
                </View>
                <View style={styles.detailInfo}>
                  <Text style={{ color: "white", fontSize: 18, marginBottom: 5}}>
                    CMND: <Text style={{ fontWeight: "bold" }}>0791 0000 2426</Text>
                  </Text>
                  <Text style={{ color: "white", fontSize: 18 }}>
                    Nơi ở:{" "}
                    <Text style={{ fontWeight: "bold" }}>300/92 Lê Dũng</Text>
                  </Text>
                </View>
              </View>
            </View>
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
                    <Text style={styles.optionName}>
                      Xem lại và gửi tờ khai y tế
                    </Text>
                    <Text style={styles.optionDetail}>
                      (Hôm qua, 04/12/2021 07:30)
                    </Text>
                  </View>
                </View>
                <MaterialIcons name="navigate-next" size={20} color="#b3b3b3" />
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="car-side"
                    size={30}
                    color="#30B55C"
                    style={{ marginTop: 7, paddingRight: 30 }}
                  />
                  <View
                    style={[
                      styles.optionInformation,
                      { marginTop: 5, marginLeft: -14 },
                    ]}
                  >
                    <Text style={styles.optionName}>Di chuyển trong nước</Text>
                  </View>
                </View>
                <MaterialIcons name="navigate-next" size={20} color="#b3b3b3" />
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="needle"
                    size={30}
                    color="#b3b3b3"
                    style={{ marginTop: 7, paddingRight: 25 }}
                  />
                  <View style={styles.optionInformation}>
                    <Text style={styles.optionName}>
                      Vaccine: Chưa có thông tin {'\n'} từ Nền tảng tiêm chủng
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.option}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <FontAwesome5
                    name="microscope"
                    size={30}
                    color="#b3b3b3"
                    style={{ marginTop: 7, paddingRight: 25 }}
                  />
                  <View style={styles.optionInformation}>
                    <Text style={styles.optionName}>
                      Xét nghiệm: Chưa có thông {'\n'} tin từ cơ sở xét nghiệm
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable>
              <View style={[styles.option, { borderBottomWidth: 1 }]}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="newspaper-variant-outline"
                    size={30}
                    color="#b3b3b3"
                    style={{ marginTop: 7, paddingRight: 25 }}
                  />
                  <View style={styles.optionInformation}>
                    <Text style={styles.optionName}>Giấy đi đường</Text>
                    <Text style={styles.optionDetail}>
                      Chưa có giấy đi đường
                    </Text>
                  </View>
                </View>
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
    borderColor: "#30B55C",
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
  optionInformation: {},
  optionName: {
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 18,
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
    fontSize: 20,
    color: "#ededed",
    paddingVertical: 2,
  },
  location: {
    fontWeight: "bold",
    fontSize: 22,
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
