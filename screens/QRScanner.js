import React, { useState, useEffect, useContext } from "react";
import { QRCodeScannedContext } from "../context/QRCodeContext";

import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import Popup from "../components/Popup";

export default function QRScanner({ navigation }) {
  const { setHasScanned } = useContext(QRCodeScannedContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
    <View style={styles.container}>
      <Text style={{ fontSize: 20, paddingVertical: 20 }}>
        Đưa QR vào khu vực camera để quét
      </Text>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: "100%", width: "100%" }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Button
          title="Quay lại"
          style={{ borderRadius: 10 }}
          color="#b3b3b3"
          onPress={() => {
            navigation.goBack();
          }}
        />
        {scanned && (
          <Button
            title={"Quét lại"}
            style={{ marginTop: 10, borderRadius: 10 }}
            onPress={() => setScanned(false)}
          />
        )}
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
    height: "80%",
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "tomato",
  },
  maintext: {
    fontSize: 20,
    margin: 20,
  },
});
