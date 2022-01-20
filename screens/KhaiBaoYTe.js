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
    ScrollView
} from 'react-native';
function goBack() { }
export default function KhaiBaoYTe({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
                        <View style={styles.circle}>
                            <Icon
                                name="circle"
                                type="font-awnsome"
                                size={15}
                                color="#30B55C"
                            />
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
                        <View style={styles.circle}></View>
                        <Text
                            style={{
                                color: '#30B55C',
                                marginLeft: 5,
                                fontWeight: 'bold',
                                fontSize: 14,
                            }}>
                            Có
                        </Text>
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
                        <View style={styles.circle}>
                            <Icon
                                name="circle"
                                type="font-awnsome"
                                size={15}
                                color="#30B55C"
                            />
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
                        <View style={styles.circle}></View>
                        <Text
                            style={{
                                color: '#30B55C',
                                marginLeft: 5,
                                fontWeight: 'bold',
                                fontSize: 14,
                            }}>
                            Có
                        </Text>
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
                            Có
                        </Text>
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            Không
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
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            <View style={styles.circle}></View>
                        </Text>
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            <View style={styles.circle}>
                                <Icon
                                    name="circle"
                                    type="font-awnsome"
                                    size={15}
                                    color="#30B55C"
                                />
                            </View>
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
                            Người từ nước có bệnh Covid-19
                        </Text>
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            <View style={styles.circle}></View>
                        </Text>
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            <View style={styles.circle}>
                                <Icon
                                    name="circle"
                                    type="font-awnsome"
                                    size={15}
                                    color="#30B55C"
                                />
                            </View>
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
                        style={{
                            flexDirection: 'row',
                            marginHorizontal: 10,
                            marginTop: 15,
                            marginBottom: 15,
                        }}>
                        <Text style={{ width: '70%', fontSize: 11 }}>
                            Người bệnh có biểu hiện sốt, ho, khó thở, viêm phổi
                        </Text>
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            <View style={styles.circle}></View>
                        </Text>
                        <Text
                            style={{
                                width: '15%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#30B55C',
                            }}>
                            <View style={styles.circle}>
                                <Icon
                                    name="circle"
                                    type="font-awnsome"
                                    size={15}
                                    color="#30B55C"
                                />
                            </View>
                        </Text>
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
                        }}>
                        <Text
                            style={{
                                color: '#ffffff',
                                padding: 15,
                                fontSize: FONT_SIZE,
                                paddingHorizontal: 25,
                            }}>
                            Gửi tờ khai
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
});
