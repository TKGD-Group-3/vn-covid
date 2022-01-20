import React, { useState } from 'react';
import { Switch } from 'react-native-elements';
import { Icon } from "react-native-elements";
import { Picker } from '@react-native-picker/picker';

import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
    Modal,
    Pressable
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

function goBack() { }
function onGuiPhanAnh() { }
const tinhThanh = ["Hà Nội", "TPHCM"];
const quanHuyen = ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6",];
const phuongXa = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6",];
export default function PhanAnh({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const [location, setlocation] = useState("");
    const [content, setcontent] = useState("");
    const [selectedValueTinhThanh, setSelectedValueTinhThanh] = useState("");
    const [selectedValueQuanHuyen, setSelectedValueQuanHuyen] = useState("");
    const [selectedValuePhuongXa, setSelectedValuePhuongXa] = useState("");
    const [showPopUp, setshowPopUp] = useState(false);
    const [isOK, setIsOK] = useState(false);

    const handleClickGuiPhanAnh = () => {
        setshowPopUp(true);
        if (location === "" || content === "" || selectedValueTinhThanh === "" || selectedValueQuanHuyen === "" || selectedValuePhuongXa === "")
            setIsOK(false);
        else
            setIsOK(true);
    }

    return (

        <View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                <Icon
                    name={'chevron-left'}
                    color="#30B55C"
                    style={styles.backIcon}
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <View style={{ width: '100%', textAlign: 'center', paddingRight: 50 }}>
                    <Text style={styles.textHeader}> Phản ánh </Text>
                </View>
            </View>

            <View style={{ marginTop: 8 }}>
                <TextInput
                    style={{
                        margin: 12,
                        marginBottom: 20,
                        width: '80%',
                        borderWidth: 1,
                        padding: 10,
                        marginHorizontal: 30,
                        borderWidth: 0,
                        fontSize: FONT_SIZE,
                    }}
                    onChangeText={setcontent}
                    value={content}
                    multiline={true}
                    placeholder="Nhập nội dung phản ánh..."
                    keyboardType="default"
                />
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: 20,
                }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.circle}>
                        <Icon
                            style={{ marginTop: 16 }}
                            size={36}
                            name="camera"
                            type="font-awesome"
                            color="#30B55C"
                        />
                    </View>
                    <Text style={{ fontSize: FONT_SIZE }}>Chụp ảnh</Text>
                </View>

                <View style={styles.verticalLine}></View>

                <View style={{ alignItems: 'center' }}>
                    <View style={styles.circle}>
                        <Icon
                            style={{ marginTop: 16 }}
                            size={36}
                            name="video-camera"
                            type="font-awesome"
                            color="#30B55C"
                        />
                    </View>
                    <Text style={{ fontSize: FONT_SIZE }}>Quay Video</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.circle}>
                        <Icon
                            style={{ marginTop: 16 }}
                            size={36}
                            name="photo"
                            type="font-awesome"
                            color="#30B55C"
                        />
                    </View>
                    <Text style={{ fontSize: FONT_SIZE }}>Thư viện</Text>
                </View>
            </View>
            <View
                style={{
                    width: '100%',
                    height: 10,
                    backgroundColor: '#F5F5F5',
                    marginTop: 10,
                }}>

            </View>
            <Text
                style={{
                    marginTop: 30,
                    marginLeft: 20,
                    fontWeight: 'bold',
                    fontSize: FONT_SIZE,
                }}>
                {' '}
                Địa điểm
            </Text>
            <View
                style={{
                    border: 'solid',
                    borderColor: '#9F9F9F',
                    marginHorizontal: 25,
                    borderRadius: 15,
                    marginTop: 15,
                    borderWidth: 0.5,
                }}>
                {/* <Text style={{ padding: 15, fontSize: FONT_SIZE, color: "#9F9F9F" }}>
                    Địa điểm phản ánh
                </Text> */}
                <TextInput
                    style={{
                        padding: 15,
                        fontSize: FONT_SIZE,
                        color: "#9F9F9F",
                        borderWidth: 0,
                    }}
                    multiline={true}
                    placeholder="Địa điểm phản ánh..."
                    keyboardType="default"
                    onChangeText={setlocation}
                    value={location}
                />
            </View>
            <View
                style={{
                    border: 'solid',
                    borderColor: '#9F9F9F',
                    marginHorizontal: 25,
                    borderRadius: 15,
                    marginTop: 15,
                    borderWidth: 0.5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Picker
                    selectedValue={selectedValueTinhThanh}
                    style={{
                        height: "100%", width: "90%", padding: 15, fontSize: FONT_SIZE, color: "#9F9F9F", backgroundColor: "#f2f2f2", borderRadius: 20, borderWidth: 0
                    }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValueTinhThanh(itemValue)}
                >
                    <Picker.Item label="Chọn Tỉnh / Thành" value="" />
                    <Picker.Item label="Hà Nội" value="1" />
                    <Picker.Item label="TP.HCM" value="2" />
                    {/* const tinhThanh = ["Hà Nội", "TPHCM"];
                    const quanHuyen = ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6",];
                    const phuongXa = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6",]; */}
                </Picker>
                {/* <View style={{ marginRight: 15 }}>
                    <Icon
                        name="chevron-down"
                        type="font-awesome"
                        color="#000000"
                        size={17}
                        style={{ marginTop: 16 }}
                    />
                </View> */}
            </View>
            <View
                style={{
                    border: 'solid',
                    borderColor: '#9F9F9F',
                    marginHorizontal: 25,
                    borderRadius: 15,
                    marginTop: 15,
                    borderWidth: 0.5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Picker
                    selectedValue={selectedValueQuanHuyen}
                    style={{
                        height: "100%", width: "90%", padding: 15, fontSize: FONT_SIZE, color: "#9F9F9F", backgroundColor: "#f2f2f2", borderRadius: 20, borderWidth: 0
                    }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValueQuanHuyen(itemValue)}
                >
                    <Picker.Item label="Chọn Quận / Huyện" value="" />
                    <Picker.Item label="Quận 1" value="1" />
                    <Picker.Item label="Quận 2" value="2" />
                    <Picker.Item label="Quận 3" value="3" />
                    <Picker.Item label="Quận 4" value="4" />
                    <Picker.Item label="Quận 5" value="5" />
                    <Picker.Item label="Quận 6" value="6" />
                    {/* const tinhThanh = ["Hà Nội", "TPHCM"];
                    const quanHuyen = ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6",];
                    const phuongXa = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6",]; */}
                </Picker>
                {/* <Text style={{ padding: 15, fontSize: FONT_SIZE, color: "#9F9F9F" }}>
                    Quận / Huyện <Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ marginRight: 15 }}>
                    <Icon
                        name="chevron-down"
                        type="font-awesome"
                        color="#000000"
                        size={17}
                        style={{ marginTop: 16 }}
                    />
                </View> */}
            </View>
            <View
                style={{
                    border: 'solid',
                    borderColor: '#9F9F9F',
                    marginHorizontal: 25,
                    borderRadius: 15,
                    marginTop: 15,
                    borderWidth: 0.5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Picker
                    selectedValue={selectedValuePhuongXa}
                    style={{
                        height: "100%", width: "90%", padding: 15, fontSize: FONT_SIZE, color: "#9F9F9F", backgroundColor: "#f2f2f2", borderRadius: 20, borderWidth: 0
                    }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValuePhuongXa(itemValue)}
                >
                    <Picker.Item label="Chọn Phường / Xã" value="" />
                    <Picker.Item label="Phường 1" value="1" />
                    <Picker.Item label="Phường 2" value="2" />
                    <Picker.Item label="Phường 3" value="3" />
                    <Picker.Item label="Phường 4" value="4" />
                    <Picker.Item label="Phường 5" value="5" />
                    <Picker.Item label="Phường 6" value="6" />
                    {/* const tinhThanh = ["Hà Nội", "TPHCM"];
                    const quanHuyen = ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6",];
                    const phuongXa = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6",]; */}
                </Picker>
                {/* <Text style={{ padding: 15, fontSize: FONT_SIZE, color: "#9F9F9F" }}>
                    Phường / Xã <Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ marginRight: 15 }}>
                    <Icon
                        name="chevron-down"
                        type="font-awesome"
                        color="#000000"
                        size={17}
                        style={{ marginTop: 16 }}
                    />
                </View> */}
            </View>

            <View
                style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems: 'center',
                    marginBottom: 30,
                }}>
                <TouchableOpacity
                    style={{
                        // width: 'fit-content',
                        borderColor: '#30B55C',
                        backgroundColor: '#30B55C',
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                    onPress={handleClickGuiPhanAnh}
                >
                    <Text
                        style={{
                            color: '#ffffff',
                            padding: 15,
                            fontSize: FONT_SIZE,
                            paddingHorizontal: 25,
                        }}>
                        Gửi phản ánh
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showPopUp}
                    onRequestClose={() => {
                        setshowPopUp(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.welcomeView}>

                                <Text style={[styles.location, { color: isOK ? "white" : "black" }]}> {isOK ? "Gửi phản ánh thành công" : "Vui lòng không để trống thông tin!"}</Text>
                                <TouchableOpacity
                                    style={{
                                        // width: 'fit-content',
                                        borderColor: '#30B55C',
                                        backgroundColor: '#b3b3b3',
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        marginTop: 40
                                    }}
                                    onPress={() => { setshowPopUp(false); if (isOK) navigation.goBack() }}
                                >
                                    <Text
                                        style={{
                                            color: '#ffffff',
                                            padding: 10,
                                            fontSize: FONT_SIZE,
                                            paddingHorizontal: 20,
                                        }}>
                                        Xác nhận
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>



    );
}
const circleSize = 70;
const FONT_SIZE = 20;
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20,
    },
    textHeader: {
        color: '#30B55C',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    myCardView: {
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#F5F5F5',
        textAlign: 'left',
        padding: 10,
    },
    backIcon: {},
    circle: {
        alignItems: 'center',
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: '#EAF8EE',
    },
    verticalLine: {
        width: 1,
        height: 90,
        borderRightColor: '#9F9F9F',
        borderWidth: 0.5,
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
        padding: 25,
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
        textAlign: "center"
    },
    button: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
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
