import React, { useState, useEffect, useContext } from "react";
import { QRCodeScannedContext } from "../context/QRCodeContext";
import { Entypo } from "react-native-vector-icons";
import { Text, View, StyleSheet, Button, Dimensions, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import Popup from "../components/Popup";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function QRScanner({ navigation }) {
  const { setHasScanned } = useContext(QRCodeScannedContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const chevron = (deg) => {
    return (
      <View>
        <Entypo
          name="chevron-thin-up"
          size={60}
          color="#30B55C"
          style={{
            transform: [{ rotate: String(deg) + "deg" }]
          }}
        />
      </View>
    );
  }

  const askForCameraPermission = () => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) => {
      setHasPermission(status === "granted");
    });
  };
  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return;
    setScanned(true);
    setHasScanned(true);
    navigation.push("Index");
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: windowHeight, width: windowWidth, justifyContent: "center", alignItems: "center", flexDirection: "column" }}
        >
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: windowWidth, height: windowWidth }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: windowWidth }}>
              {chevron(315)}
              {chevron(45)}
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: windowWidth }}>
              {chevron(225)}
              {chevron(135)}
            </View>
          </View>
        </BarCodeScanner>
      </View>
      <Text style={{ fontSize: 20, paddingVertical: 20, color: "#ffffff" }}>
        Đưa QR vào khu vực camera để quét
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: '#30B55C',
            backgroundColor: '#30B55C',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 30
          }}
          onPress={() => { navigation.goBack() }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              paddingVertical: 15,
              paddingHorizontal: 40,
              fontSize: 20,
            }}>
            Đóng
          </Text>
        </TouchableOpacity>
        {/* <Button
          title="Quay lại"
          style={{
            borderColor: '#30B55C',
            backgroundColor: '#30B55C',
            borderRadius: 30,
          }}
          color="#30B55C"
          onPress={() => {
            navigation.goBack();
          }}
        /> */}
        {scanned &&

          <TouchableOpacity
            style={{
              borderColor: '#30B55C',
              backgroundColor: '#30B55C',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: 30,
            }}
            onPress={() => setScanned(false)}
          >
            <Text
              style={{
                color: '#FFFFFF',
                paddingVertical: 15,
                paddingHorizontal: 40,
                fontSize: 20,
              }}>
              Quét lại
            </Text>
          </TouchableOpacity>
        }
      </View>
      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
    height: windowWidth,
    overflow: "hidden",
    backgroundColor: "tomato",
  },
  maintext: {
    fontSize: 20,
    margin: 20,
  },
});
