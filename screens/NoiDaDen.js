import React, { useState } from 'react';
import { Icon, Switch } from 'react-native-elements';

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

function goBack() {}

export default function NoiDaDen() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ marginLeft: 10, marginTop: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name={'chevron-left'}
          color="#30B55C"
          style={styles.backIcon}
          onPress={() => {
            goBack();
          }}
        />
        <View style={{ width: '100%', textAlign: 'center', paddingRight: 50 }}>
          <Text style={styles.textHeader}> Nơi đã đến </Text>
        </View>
      </View>
      <View style={styles.header}>
        <Switch
          trackColor={{ false: '#767577', true: '#30B55C' }}
          thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
          ios_backgroundColor="#ffffff"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {isEnabled ? (
          <Text style={{ marginLeft: 30,fontSize:18 }}>
            Gạt để tắt tính năng nơi đã đến
          </Text>
        ) : (
          <Text style={{ marginLeft: 30,fontSize:18 }}>
            Gạt để bật tính năng nơi đã đến
          </Text>
        )}
      </View>
      <View style={styles.header}>
        <View style={{ alignItems: 'center', marginTop: 4 }}>
          <View style={styles.circle}></View>
          <View style={styles.verticalLine}></View>
          <View style={styles.circle}></View>
          <View style={styles.verticalLine}></View>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ textAlign: 'left',fontSize:18 }}>26/11/2021</Text>
          <View style={styles.myCardView}>
            <Text style={{fontSize:18}}>14:07 </Text>
            <Text style={{fontSize:14}}>Argibank chi nhánh Phước Bình - Bình Phước</Text>
          </View>
          <Text style={{ textAlign: 'left', marginTop: 28, fontSize:18 }}>17/11/2021</Text>
          <View style={styles.myCardView}>
            <Text style={{fontSize:18}}>07:08 </Text>
            <Text style={{fontSize:14}}>Trạm y tế xã Long Hưng</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const circleSize = 14;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  textHeader: {
    color: '#30B55C',
    fontWeight: 'bold',
    fontSize: 24,
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
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    border: 'solid',
    borderWidth: '0.5px',
    borderTopWidth: '0.5px',
    borderBottomWidth: '0.5px',
    borderLeftWidth: '0.5px',
    borderRightWidth: '0.5px',
  },
  verticalLine: {
    width: 1,
    height: 110,
    borderRight: 'solid',
    borderLeft:"none",
    borderBottom:"none",
    borderTop:"none",
    borderWidth: '0.5px',
    borderTopWidth: '0.5px',
    borderBottomWidth: '0.5px',
    borderLeftWidth: '0.5px',
    borderRightWidth: '0.5px',
  },
});
