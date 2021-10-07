import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RoomCard from '../../components/Room/RoomCard';
import COLORS from '../../consts/colors';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStore from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

const {width, height} = Dimensions.get('screen');

const convertDateToString = date => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return month + '/' + day + '/' + year;
};

const getTimeStay = (dateStart, dateEnd) => {
  var date1 = new Date(dateStart);
  var date2 = new Date(dateEnd);
  let differenceInTime = date2.getTime() - date1.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays;
};

const convertNumber = e => {
  const cost = parseInt(e);
  return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const now = new Date();
console.log(now);

const BookingScreen = ({navigation, route}) => {
  const hotel = route.params;
  const rooms = hotel.rooms;
  const [timeStay, setTimeStay] = useState(1);
  const [totalPrice, setTotalPrice] = useState();
  const [roomName, setRoomName] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [showDatePicker1, setShowDatePicker1] = useState(false);
  const [showDatePicker2, setShowDatePicker2] = useState(false);
  const [showBookingSubmitBtn, setShowBookingSubmitBtn] = useState(false);

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    let token = await AsyncStore.getItem('userToken');
    token && setUserInfo(jwt_decode(token));
    setIsLogin(true);
    // console.log(token);
    // console.log(userInfo);
  };

  const showDatePicker = () => {
    setShowDatePicker1(true);
  };

  const hideDatePicker = () => {
    setShowDatePicker1(false);
  };

  const handleConfirm = date => {
    const dateStart = convertDateToString(date);
    const dateEnd = convertDateToString(endDate);
    const startDay = new Date(dateStart).getTime();
    const today = new Date(convertDateToString(now)).getTime();

    if (startDay >= today) {
      setStartDate(date);
      const timeBetween = getTimeStay(dateStart, dateEnd);
      setTimeStay(timeBetween);
      hideDatePicker();
    } else {
      hideDatePicker();
      alertDate('Ngày bắt đầu không thể từ trước ngày hiện tại!');
    }
    console.log(date);
  };
  const alertDate = text =>
    Alert.alert('Nhắc nhở', text, [
      {text: 'OK', onPress: () => showDatePicker()},
    ]);

  const showDatePickerEnd = () => {
    setShowDatePicker2(true);
  };

  const hideDatePickerEnd = () => {
    setShowDatePicker2(false);
  };

  const handleConfirmEnd = date => {
    setEndDate(date);
    const dateStart = convertDateToString(startDate);
    const dateEnd = convertDateToString(date);
    const timeBetween = getTimeStay(dateStart, dateEnd);
    setTimeStay(timeBetween);
    hideDatePickerEnd();
  };

  const selectRoom = (totalPriceRoom, roomName) => {
    setShowBookingSubmitBtn(true);
    setTotalPrice(totalPriceRoom);
    setRoomName(roomName);
  };

  const alert = text => Alert.alert('Nhắc nhở', text, [{text: 'OK'}]);

  const bookingSubmit = () => {
    timeStay <= 0
      ? alert('Thời điểm trả phòng phải sau thời điểm nhận phòng')
      : timeStay > 90
      ? alert('Thời gian đặt phòng không quá 90 ngày!')
      : navigation.push('BookingConfirmScreen', userInfo);
  };

  // console.log(typeof startDate, startDate);
  return (
    <SafeAreaView style={{flex: 1}}>
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
            <View style={{paddingLeft: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                Đặt phòng
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: COLORS.white,
                }}>
                {hotel.tenKS}
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 150}}
            style={{height: height - 70}}>
            <View style={styles.datePickerCard}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.textTittle}>Ngày nhận</Text>
                <Text onPress={showDatePicker} style={styles.dateText}>
                  {convertDateToString(startDate)}
                </Text>
              </View>
              <MaterialIcons
                name="east"
                size={23}
                style={{color: COLORS.blueChambray}}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.textTittle}>Ngày trả</Text>
                <Text onPress={showDatePickerEnd} style={styles.dateText}>
                  {convertDateToString(endDate)}
                </Text>
              </View>
            </View>

            {rooms.map((room, index) => (
              <RoomCard
                key={index}
                navigation={navigation}
                room={room}
                isLogin={isLogin}
                timeStay={timeStay}
                selectRoom={selectRoom}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      {showBookingSubmitBtn && (
        <View style={styles.bookingCard}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    marginLeft: 5,
                    color: COLORS.dark,
                    fontSize: 18,
                  }}>
                  Tổng chi phí:
                </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    color: COLORS.redTorn,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {convertNumber(totalPrice * timeStay)} đ
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    marginLeft: 5,
                    color: COLORS.dark,
                    fontSize: 14,
                    paddingTop: 3,
                  }}>
                  cho thời gian nghỉ {timeStay} đêm
                </Text>
              </View>
            </View>
            <TouchableOpacity
              actionOpacity={0.8}
              onPress={bookingSubmit}>
              <View style={styles.btnBookingConfirm}>
                <Text style={styles.textBtn}>Xác nhận</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <DateTimePickerModal
        isVisible={showDatePicker1}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={showDatePicker2}
        mode="date"
        onConfirm={handleConfirmEnd}
        onCancel={hideDatePickerEnd}
      />
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
  datePickerCard: {
    backgroundColor: COLORS.white,
    flex: 1,
    margin: 10,
    padding: 13,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textTittle: {
    color: COLORS.darkMinus,
    fontSize: 15,
  },
  dateText: {
    color: COLORS.blueDam,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookingCard: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    bottom: 0,
    width: width,
    height: 60,
    borderTopWidth: 1,
    borderColor: COLORS.grey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 1,
  },
  btnBookingConfirm: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.blueDam,
  },
  textBtn: {
    paddingHorizontal: 35,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
