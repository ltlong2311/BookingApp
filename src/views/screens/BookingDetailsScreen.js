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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';

const {width, height} = Dimensions.get('screen');
const BookingDetailScreen = ({navigation, route}) => {
  const QRcodeBooking = route.params;
  return (
    <SafeAreaView>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#41DA', '#22a7f0']}
          style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              name="arrow-back-ios"
              size={23}
              color={COLORS.white}
              onPress={navigation.goBack}
            />
            <View style={{paddingLeft: 0, paddingVertical: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                Mã
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.section}>
          <ImageBackground
            style={{width: 180, height: 200}}
            source={{uri: QRcodeBooking}}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.pop(1)}>
          <View
            style={[styles.btn, {backgroundColor: COLORS.blueLight}]}
            elevation={1}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: COLORS.white,
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
export default BookingDetailScreen;
