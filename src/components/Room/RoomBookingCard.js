import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import FastImage from 'react-native-fast-image';
import config from '../../../config';
import AsyncStore from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

const {width} = Dimensions.get('screen');

const RoomBookingCard = ({order, navigation}) => {
  const [showInfoRoom, setShowInfoRoom] = useState(false);
  const [numOfRooms, setNumOfRooms] = useState(1);
  const QRcodeBooking = order.qrcode;
  return (
    <View style={styles.bookingCard}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.cardInfo}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{textAlign: 'right', fontWeight: '500'}}>
              Tên Khách sạn:{' '}
            </Text>
            <Text>{order.tenKS}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{textAlign: 'right', fontWeight: '500'}}>
              Tên phòng:{' '}
            </Text>
            <Text>{order.tenPhong}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{textAlign: 'right', fontWeight: '500'}}>
              Ngày bắt đầu:{' '}
            </Text>
            <Text>{order.startDate}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'right', fontWeight: '500'}}>
                Ngày kết thúc:{' '}
              </Text>
              <Text>{order.endDate}</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: COLORS.redN,
              width: 60,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: COLORS.white,
                padding: 8,
              }}>
              {order.gia}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.blueLight,
              width: 60,
            }}>
            <TouchableOpacity
              onPress={() => navigation.push('BookingDetail', QRcodeBooking)}
              activeOpacity={0.8}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: COLORS.white,
                  padding: 8,
                }}>
                QR Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookingCard: {
    width: width - 10,
    flexDirection: 'row',
    shadowColor: '#000',
    backgroundColor: COLORS.white,
    marginBottom: 10,
    padding: 10,
    elevation: 5,
  },
  cardInfo: {
    width: '82%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default RoomBookingCard;
