import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BookingSuccessScreen = ({navigation}) => {
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
        <View style={styles.section}></View>
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
});
export default BookingSuccessScreen;
