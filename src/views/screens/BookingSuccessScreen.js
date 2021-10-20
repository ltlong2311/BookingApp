import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

const {width, height} = Dimensions.get('screen');
const BookingSuccessScreen = ({navigation, route}) => {
  const QRcodeBooking = route.params;
  // console.log(QRcodeBooking);
  return (
    <SafeAreaView>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#41DA', '#22a7f0']}
          style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{paddingLeft: 0, paddingVertical: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                Hoàn tất đặt phòng
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.section}>
          <ImageBackground
            style={{width: 80, height: 80}}
            source={require('../../assets/icon/success-cop.jpg')}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              paddingBottom: 20,
              color: COLORS.blueChambray,
            }}>
            Đặt phòng thành công
          </Text>
          {/* <QRCode
            value= 'abc'
            logo={{uri: QRcodeBooking}}
            logoSize={30}
            style={{width: 80, height: 80}}
            logoBackgroundColor="transparent"
          /> */}
          <ImageBackground
            style={{width: 180, height: 200}}
            source={{uri: QRcodeBooking}}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('User')}>
          <View
            style={[styles.btn, {backgroundColor: COLORS.blueLight}]}
            elevation={1}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: COLORS.white,
              }}>
              Xem danh sách đặt phòng
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.pop(3)}>
          <View
            style={[styles.btn, {backgroundColor: COLORS.white}]}
            elevation={1}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: COLORS.blueChambray,
              }}>
              Trở lại
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  textBtn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default BookingSuccessScreen;
