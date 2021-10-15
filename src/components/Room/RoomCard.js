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

const RoomCard = props => {
  const [showInfoRoom, setShowInfoRoom] = useState(false);
  const [numOfRooms, setNumOfRooms] = useState(1);
  const totalRoomPrice = props.room.gia * numOfRooms;

  const roomName = props.room.tenPhong;
  const roomID = props.room.MaPhong;

  const changeShowInfoRoom = () => {
    setShowInfoRoom(!showInfoRoom);
    console.log(showInfoRoom);
  };

  const convertNumber = e => {
    const cost = parseInt(e);
    // return cost.toLocaleString('da-DK');
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const bookingHotel = () => {
    props.timeStay <= 0
      ? createAlert('Thời điểm trả phòng phải sau thời điểm nhận phòng')
      : props.timeStay > 90
      ? createAlert('Thời gian đặt phòng không quá 90 ngày!')
      : props.selectRoom(totalRoomPrice, roomName, roomID);
  };

  const createAlert = text => Alert.alert('Nhắc nhở', text, [{text: 'OK'}]);

  return (
    <View style={styles.cardHotelSearch}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: config.IMAGE_URL + props.room.image[0],
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardInfo}>
        <Text
          style={{
            color: COLORS.darkText,
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          {props.room.tenPhong}
        </Text>
        {showInfoRoom ? (
          <View>
            <TouchableOpacity onPress={changeShowInfoRoom}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 10,
                  marginRight: 0,
                }}>
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={20}
                  style={{marginLeft: -5}}
                  color={COLORS.blueDam}
                />
                <Text
                  style={{marginLeft: 0, fontSize: 13, color: COLORS.blueDam}}>
                  Ẩn thông tin phòng
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 5,
                paddingTop: 5,
                fontSize: 13,
                color: COLORS.darkMinus,
              }}>
              {props.room.content}
            </Text>
          </View>
        ) : (
          <TouchableOpacity onPress={changeShowInfoRoom}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                marginRight: 0,
              }}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                style={{marginLeft: -5}}
                color={COLORS.blueDam}
              />
              <Text
                style={{marginLeft: 0, fontSize: 13, color: COLORS.blueDam}}>
                Xem thông tin phòng
              </Text>
            </View>
          </TouchableOpacity>
        )}

        <View
          style={{
            flex: 1,
            marginTop: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.darkText, fontSize: 15}}>
                Giá phòng:
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  color: COLORS.redTorn,
                  fontSize: 15,
                  // fontWeight: 'bold',
                }}>
                {convertNumber(props.room.gia)}đ
              </Text>
            </View>
            <Text
              style={{
                marginLeft: 5,
                color: COLORS.darkText,
                fontSize: 13,
                paddingTop: 3,
              }}>
              cho thời gian nghỉ 1 đêm
            </Text>
          </View>

          <TouchableOpacity actionOpacity={0.8} onPress={bookingHotel}>
            <View style={styles.buttonSelectRoom}>
              <Text style={styles.textBtn}>Chọn phòng</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHotelSearch: {
    flex: 1,
    shadowColor: '#000',
    marginHorizontal: 10,
    marginBottom: 20,
    elevation: 10,
  },
  cardInfo: {
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    justifyContent: 'space-between',
  },
  cardImage: {
    width: '100%',
    height: 160,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  buttonSelectRoom: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.blueLight,
  },
  textBtn: {
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoomCard;
