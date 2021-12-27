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
} from 'react-native';

function goBack() {}
function onGuiPhanAnh() {}
export default function PhanAnh() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
        <Icon
          name={'chevron-left'}
          color="#30B55C"
          style={styles.backIcon}
          onPress={() => {
            goBack();
          }}
        />
        <View style={{ width: '100%', textAlign: 'center', paddingRight: 50 }}>
          <Text style={styles.textHeader}> Phản ánh </Text>
        </View>
      </View>
      <View style={{ marginTop: 8 }}>
        <TextInput
          style={{
            height: 'fit-content',
            margin: 12,
            marginBottom: 20,
            width: '100%',
            borderWidth: 1,
            padding: 10,
            marginHorizontal: 30,
            border: 'none',
            fontSize: FONT_SIZE,
          }}
          multiline={true}
          placeholder="Nhập nội dung phản ánh."
          keyboardType="numeric"
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
              name="camera"
              type="font-awesome"
              color="#30B55C"
              size="45px"
              style={{ marginTop: 16 }}
            />
          </View>
          <Text style={{ fontSize: FONT_SIZE }}>Chụp ảnh</Text>
        </View>

        <View style={styles.verticalLine}></View>

        <View style={{ alignItems: 'center' }}>
          <View style={styles.circle}>
            <Icon
              name="video-camera"
              type="font-awesome"
              color="#30B55C"
              size="45px"
              style={{ marginTop: 16 }}
            />
          </View>
          <Text style={{ fontSize: FONT_SIZE }}>Quay Video</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.circle}>
            <Icon
              name="photo"
              type="font-awesome"
              color="#30B55C"
              size="45px"
              style={{ marginTop: 16 }}
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
        }}></View>
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
          borderWidth: '0.5px',
        }}>
        <Text style={{ padding: 15, fontSize: FONT_SIZE }}>
          {' '}
          Địa điểm phản ánh
        </Text>
      </View>
      <View
        style={{
          border: 'solid',
          borderColor: '#9F9F9F',
          marginHorizontal: 25,
          borderRadius: 15,
          marginTop: 15,
          borderWidth: '0.5px',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ padding: 15, fontSize: FONT_SIZE }}>
          Tỉnh / Thành <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <View style={{ marginRight: 15 }}>
          <Icon
            name="chevron-down"
            type="font-awesome"
            color="#000000"
            size="17px"
            style={{ marginTop: 16 }}
          />
        </View>
      </View>
      <View
        style={{
          border: 'solid',
          borderColor: '#9F9F9F',
          marginHorizontal: 25,
          borderRadius: 15,
          marginTop: 15,
          borderWidth: '0.5px',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ padding: 15, fontSize: FONT_SIZE }}>
          Quận / Huyện <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <View style={{ marginRight: 15 }}>
          <Icon
            name="chevron-down"
            type="font-awesome"
            color="#000000"
            size="17px"
            style={{ marginTop: 16 }}
          />
        </View>
      </View>
      <View
        style={{
          border: 'solid',
          borderColor: '#9F9F9F',
          marginHorizontal: 25,
          borderRadius: 15,
          marginTop: 15,
          borderWidth: '0.5px',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ padding: 15, fontSize: FONT_SIZE }}>
          Phường / Xã <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <View style={{ marginRight: 15 }}>
          <Icon
            name="chevron-down"
            type="font-awesome"
            color="#000000"
            size="17px"
            style={{ marginTop: 16 }}
          />
        </View>
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
            width: 'fit-content',
            borderColor: '#30B55C',
            backgroundColor: '#30B55C',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Details')}>
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
    </View>
  );
}
const circleSize = 75;
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
    alignItems: 'center',
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: '#EAF8EE',
  },
  verticalLine: {
    width: 1,
    height: 90,
    borderLeft: 'none',
    borderTop: 'none',
    borderBottom: 'none',
    borderRight: 'solid',
    borderRightColor: '#9F9F9F',
    borderRightWidth: 'thin',
  },
});
