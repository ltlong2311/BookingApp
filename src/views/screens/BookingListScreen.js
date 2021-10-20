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
import { FlatList } from 'react-native-gesture-handler';
import RoomBookingCard from '../../components/Room/RoomBookingCard';

const {width, height} = Dimensions.get('screen');

const BookingListScreen = ({navigation, route}) => {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    const getOrderInfo = async () => {
      try {
        const userToken = route.params;
        const res = await roomAPI.getListBooking(userToken);
        setBookingList(res.data);
      } catch (error) {
        console.log('Error API User', error);
      }
    };
    getOrderInfo();
  }, []);

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
                Danh sách đặt phòng
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.section}>
        <View>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 10,
            }}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={3}
            scrollEnabled
            data={bookingList}
            keyExtractor={() => Math.random().toString(36).substr(2, 9)}
            renderItem={({item}) => (
              <RoomBookingCard order={item} navigation={navigation} />
            )}
          />
          </View>
        </View>
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
    marginTop: 5,
    padding: 10,
  },
});

export default BookingListScreen;
