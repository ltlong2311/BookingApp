import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import userAPI from '../../API/userAPI';
import roomAPI from '../../API/roomAPI';

const {width, height} = Dimensions.get('screen');

const BookingConfirmScreen = ({navigation, route}) => {
  // console.log(route.params);
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState('Không');

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userID = route.params.userID;
        const res = await userAPI.getOne(userID);
        setUserInfo(res.data);
      } catch (error) {
        console.log('Error API User', error);
      }
    };
    getUserInfo();
  }, []);

  const completeBooking = async () => {
    setIsLoading(true);
    var formData = new FormData();
    formData.append('MaPhong', route.params.roomInfo.roomID);
    formData.append('tenPhong', route.params.roomInfo.roomName);
    formData.append('startDate', route.params.startDate);
    formData.append('endDate', route.params.endDate);
    formData.append('gia', route.params.cost);
    formData.append('request', request);
    formData.append('SDT', userInfo.SDT);
    console.log(formData);
    try {
      const res = await roomAPI.bookRoom(formData, route.params.token);
      if (res.status === 'success') {
        // console.log("Success", res.data);
        const QRcodeBooking = res.data.qrcode;
        navigation.navigate('BookingSuccessScreen', QRcodeBooking);
        setIsLoading(false);
      }
      console.log(res);
      setIsLoading(false);
    } catch (error) {
      console.log([Error, error]);
      setIsLoading(false);
    }
  };
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
            <View style={{paddingLeft: 10, paddingVertical: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                Xác nhận đặt phòng
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.section}>
          <Text style={{paddingVertical: 10, color: COLORS.redM}}>
            Điền đẩy đủ và chính xác thông tin để xác nhận đặt phòng
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Họ và tên"
              defaultValue={userInfo.hoTen}
              style={styles.textInput}
              editable={false}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              defaultValue={userInfo.email}
              editable={false}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Số điện thoại"
              style={styles.textInput}
              defaultValue={userInfo.SDT}
              editable={false}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Yêu cầu thêm về phòng"
              onChangeText={text => setRequest(text)}
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={styles.submitSection}>
          <TouchableOpacity actionOpacity={0.8} onPress={completeBooking}>
            <View style={styles.booking}>
              <Text style={styles.textBtn}>Hoàn thành</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading && (
        <View style={styles.backgroundNotify}>
          <ActivityIndicator size="large" color={COLORS.whiteG} />
        </View>
      )}
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
  section: {
    backgroundColor: COLORS.white,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  action: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.greyLynch,
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    color: COLORS.dark,
    fontSize: 18,
    paddingBottom: 5,
  },
  textTittle: {
    color: COLORS.darkMinus,
    fontSize: 15,
  },
  submitSection: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  booking: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.blueDam,
  },
  textBtn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backgroundNotify: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BookingConfirmScreen;
