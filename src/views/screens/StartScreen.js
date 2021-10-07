import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import COLORS from '../../consts/colors';
import {DrawerNavigator} from '../../navigation/DrawerNavigator';

const StartScreen = ({navigation}) => {
  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../../assets/hotel2.jpg')}>
          <View style={styles.content}>
            <Text
              style={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>
              Du lịch khách sạn
            </Text>
            <Text
              style={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>
              tận hưởng chuyến đi
            </Text>
            <Text
              style={{
                color: COLORS.white,
                lineHeight: 25,
                marginTop: 15,
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10,
              }}>
              Bạn muốn tránh xa những bộn bề trong cuộc sống thường ngày với một
              chuyến đi lu lịch phương xa, hay đơn giản là thư giãn cuối tuần
              qua kỳ nghỉ ngắn, trong không gian sang trọng và tinh tế hoặc mộc
              mạc gần gũi thiên nhiên mà đầy đủ tiện nghi, KMA Hotel sẵn sàng hỗ
              trợ bạn.
            </Text>
            <TouchableOpacity
              actionOpacity={0.8}
              onPress={() => navigation.navigate('Login')}>
              <View style={styles.buttonLogin}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  Đăng nhập
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.skip}>
            <TouchableOpacity
              actionOpacity={0.8}
              onPress={() => navigation.navigate('Home')}>
              <View style={styles.buttonDismiss}>
                <Text
                  style={{
                    color: COLORS.dark,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  Bỏ qua
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  skip: {
    height: '30%',
    top: 40,
    right: 40,
    position: 'absolute',
  },
  buttonLogin: {
    height: 45,
    width: 120,
    backgroundColor: COLORS.primary,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDismiss: {
    height: 40,
    width: 80,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartScreen;
