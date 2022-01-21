import React, { useState } from 'react';
import { Switch } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    Pressable
} from 'react-native';
function goBack() { }
export default function KhaiBaoYTe({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const [showPopUp, setshowPopUp] = useState(false);
    const [isOK, setIsOK] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    return (
        <ScrollView>


            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 15,
                        marginTop: 20,
                        justifyContent: 'space-between',
                    }}>
                    <Icon
                        name="chevron-left"
                        color="#30B55C"
                        style={{ marginTop: 5 }}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />

                    <View style={{ textAlign: 'center' }}>
                        <Text style={styles.textHeader}> Khai báo y tế </Text>
                    </View>
                    <Icon
                        name="ellipsis-v"
                        type="font-awesome"
                        color="#30B55C"
                        style={{ marginTop: 8 }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000000' }}>
                        Nguồn:{' '}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#30B55C',
                            textDecorationLine: 'underline',
                        }}>
                        Hướng dẫn tờ khai y tế; Mẫu tờ khai y tế
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        textAlign: 'center',
                        marginHorizontal: 15,
                    }}>
                    <Text style={{ fontSize: 14, color: '#FF1C1C', textAlign: 'center' }}>
                        Khuyến cáo: Khai báo thông tin sai là vi phạm pháp luật Việt Nam và có
                        thể xử lý hình sự.
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 15,
                        marginHorizontal: 25,
                    }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000000' }}>
                        Nguyễn Văn A
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#30B55C',
                            fontWeight: 'bold',
                        }}>
                        Chi tiết{' '}
                        <Icon
                            name="chevron-down"
                            type="font-awesome"
                            color="#30B55C"
                            size={13}
                        />
                    </Text>
                </View>


                <View
                    style={{
                        backgroundColor: '#EAF8EE',
                        marginHorizontal: 15,
                        borderRadius: 10,
                        marginTop: 15,
                    }}>
                    <Text style={{ padding: 12, fontSize: 12, fontWeight: 'bold' }}>
                        Trong vòng 14 ngày qua Anh/Chị có đến khu vực, tỉnh, thành phố, quốc
                        gia/ vùng lãnh thổ nào (Có thể đi qua nhiều nơi){' '}
                        <Text style={{ color: 'red' }}>*</Text>
                    </Text>
                    <View
                        style={{
                            marginHorizontal: 15,
                            // borderBottomColor: '#737373',
                            borderBottomWidth: 0.5,
                            borderBottomColor: '#30B55C',
                        }}></View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                            marginLeft: 15,
                            alignItems: 'center',
                        }}>
                        <Pressable style={{ flexDirection: "row" }} onPress={() => setCheck1(false)}>
                            <View style={styles.circle}>
                                {
                                    !check1 &&
                                    <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />
                                }

                            </View>
                            <Text
                                style={{
                                    color: '#30B55C',
                                    marginLeft: 5,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    marginRight: 15,
                                }}>
                                Không
                            </Text>
                        </Pressable>
                        <Pressable style={{ flexDirection: "row" }} onPress={() => setCheck1(true)}>
                            <View style={styles.circle}>
                                {
                                    check1 &&
                                    <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />
                                }

                            </View>
                            <Text
                                style={{
                                    color: '#30B55C',
                                    marginLeft: 5,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                }}>
                                Có
                            </Text>
                        </Pressable>

                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: '#EAF8EE',
                        marginHorizontal: 15,
                        borderRadius: 10,
                        marginTop: 15,
                    }}>
                    <Text style={{ padding: 12, fontSize: 12, fontWeight: 'bold' }}>
                        Trong vòng 14 ngày qua Anh/Chị có thấy xuất hiện ít nhất 1 trong các
                        dấu hiệu: sốt, ho, khó thở, viêm phổi, đau họng, mệt mỏi, thay đổi vị
                        giác không? <Text style={{ color: 'red' }}>*</Text>
                    </Text>
                    <View
                        style={{
                            marginHorizontal: 15,
                            borderBottomColor: '#737373',
                            borderBottomWidth: 0.5,
                            borderBottomColor: '#30B55C',
                        }}></View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                            marginLeft: 15,
                            alignItems: 'center',
                        }}>
                        <Pressable style={{ flexDirection: "row" }} onPress={() => setCheck2(false)}>
                            <View style={styles.circle}>
                                {
                                    !check2 &&
                                    <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />
                                }

                            </View>
                            <Text
                                style={{
                                    color: '#30B55C',
                                    marginLeft: 5,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    marginRight: 15,
                                }}>
                                Không
                            </Text>
                        </Pressable>
                        <Pressable style={{ flexDirection: "row" }} onPress={() => setCheck2(true)}>
                            <View style={styles.circle}>
                                {
                                    check2 &&
                                    <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />
                                }

                            </View>
                            <Text
                                style={{
                                    color: '#30B55C',
                                    marginLeft: 5,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                }}>
                                Có
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: '#EAF8EE',
                        marginHorizontal: 15,
                        borderRadius: 10,
                        marginTop: 15,
                    }}>
                    <Text style={{ padding: 12, fontSize: 12, fontWeight: 'bold' }}>
                        Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với:
                        <Text style={{ color: 'red' }}>*</Text>
                    </Text>

                    <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text style={{ width: '70%' }}></Text>
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            Không
                        </Text>
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            Có
                        </Text>
                    </View>

                    <View
                        style={{
                            marginHorizontal: 15,
                            borderBottomColor: '#737373',
                            borderBottomWidth: 0.5,
                            borderBottomColor: '#30B55C',
                            marginTop: 10,
                        }}></View>

                    <View
                        style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 15 }}>
                        <Text style={{ width: '70%', fontSize: 11 }}>
                            Người bệnh hoặc nghi ngờ mắc bệnh Covid-19
                        </Text>
                        <View style={{ width: '15%', flexDirection: "row", justifyContent: "center" }}>
                            <Pressable onPress={() => setCheck3(false)}>
                                <View style={styles.circle}>
                                    {!check3 && <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />}
                                </View>
                            </Pressable>
                        </View>

                        <View style={{ width: '15%', flexDirection: "row", justifyContent: "center" }}>
                            <Pressable onPress={() => setCheck3(true)}>
                                <View style={styles.circle}>
                                    {check3 && <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />}
                                </View>
                            </Pressable>
                        </View>
                    </View>

                    <View
                        style={{
                            marginHorizontal: 15,
                            borderBottomColor: '#737373',
                            borderBottomWidth: 0.5,
                            borderBottomColor: '#30B55C',
                            marginTop: 10,
                        }}></View>

                    <View
                        style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 15 }}>
                        <Text style={{ width: '70%', fontSize: 11 }}>
                            Người từ nước có bệnh Covid-19
                        </Text>
                        <View style={{ width: '15%', flexDirection: "row", justifyContent: "center" }}>
                            <Pressable onPress={() => setCheck4(false)}>
                                <View style={styles.circle}>
                                    {!check4 && <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />}
                                </View>
                            </Pressable>
                        </View>

                        <View style={{ width: '15%', flexDirection: "row", justifyContent: "center" }}>
                            <Pressable onPress={() => setCheck4(true)}>
                                <View style={styles.circle}>
                                    {check4 && <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />}
                                </View>
                            </Pressable>
                        </View>
                    </View>

                    <View
                        style={{
                            marginHorizontal: 15,
                            borderBottomColor: '#737373',
                            borderBottomWidth: 0.5,
                            borderBottomColor: '#30B55C',
                            marginTop: 10,
                        }}></View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginHorizontal: 10,
                            marginTop: 15,
                            marginBottom: 15,
                        }}>
                        <Text style={{ width: '70%', fontSize: 11 }}>
                            Người bệnh có biểu hiện sốt, ho, khó thở, viêm phổi
                        </Text>
                        <View style={{ width: '15%', flexDirection: "row", justifyContent: "center" }}>
                            <Pressable onPress={() => setCheck5(false)}>
                                <View style={styles.circle}>
                                    {!check5 && <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />}
                                </View>
                            </Pressable>
                        </View>

                        <View style={{ width: '15%', flexDirection: "row", justifyContent: "center" }}>
                            <Pressable onPress={() => setCheck5(true)}>
                                <View style={styles.circle}>
                                    {check5 && <Icon
                                        name="circle"
                                        type="font-awnsome"
                                        size={15}
                                        color="#30B55C"
                                    />}
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        textAlign: 'left',
                        marginHorizontal: 15,
                    }}>
                    <Text style={{ fontSize: 14, color: '#FF1C1C' }}>
                        Dữ liệu bạn cung cấp hoàn toàn bảo mật vào chỉ phục vụ cho việc phòng
                        chống dịch, thuộc quản lý của ban chỉ đạo quốc gia về Phòng, chống
                        dịch Covid-19. Khi bạn ấn nút “Gửi” là bạn đã hiểu và đồng ý.
                    </Text>
                </View>

                <View
                    style={{
                        marginTop: 20,
                        marginBottom: 30,
                        marginHorizontal: 20,
                        alignItems: 'center',
                    }}>
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
                        onPress={() => { setshowPopUp(true); setIsOK(true) }}
                    >
                        <Text
                            style={{
                                color: '#ffffff',
                                padding: 15,
                                fontSize: FONT_SIZE,
                                paddingHorizontal: 25,
                            }}
                        >
                            Gửi tờ khai
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

                                    <Text style={[styles.location, { color: isOK ? "white" : "black" }]}> {isOK ? "Khai báo y tế thành công!" : "Vui lòng không để trống thông tin!"}</Text>
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
            </View >

        </ScrollView >
    );
}
const circleSize = 22;
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
        borderRadius: circleSize / 2,
        width: circleSize,
        height: circleSize,
        borderWidth: 1,
        borderColor: '#30B55C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    verticalLine: {
        width: 1,
        height: 90,
        borderColor: '#9F9F9F',
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
