import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../consts/colors';
import AsyncStore from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import userAPI from '../../API/userAPI';

const {width, height} = Dimensions.get('screen');

const UserProfileScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    let token = await AsyncStore.getItem('userToken');
    if (token) setUserInfo(jwt_decode(token));
    // console.log(token);
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={{
              uri: 'https://i.imgur.com/i4yhDbu.jpg',
            }}
            style={styles.header}>
            {userInfo ? (
              <View style={styles.overlay}>
                <View style={styles.userProfile}>
                  <ImageBackground
                    style={{
                      marginTop: 20,
                      width: 60,
                      height: 60,
                      overflow: 'hidden',
                      borderRadius: 60 / 2,
                    }}
                    source={{
                      uri: 'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/119057866_1444322012423771_248923324908347500_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=f3tuwZA1nMkAX_EWwY5&tn=kJ4eP7UckXSzkNsm&_nc_ht=scontent.fhan3-4.fna&oh=e8a6ffbc4202dbc37807a2f1ab4ad6ff&oe=615B611E',
                    }}
                  />
                  <Text style={styles.textHeader}>{userInfo.hoTen}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.overlay}>
                <View style={styles.userProfile}>
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={40}
                    style={{color: COLORS.white}}
                  />
                  <Text style={{paddingVertical: 10, color: COLORS.yellowT}}>
                    Đăng nhập để sử dụng đầy đủ chức năng của ứng dụng
                  </Text>
                  <TouchableOpacity
                    actionOpacity={0.8}
                    onPress={() => navigation.push('Login')}>
                    <View
                      colors={['#08c4ed', '#41BEDA']}
                      style={styles.buttonLogin}>
                      <Text style={styles.textSign}>Đăng nhập</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </ImageBackground>
          <View style={{flex: 2, paddingHorizontal: 30}}>
            <Text style={styles.sectionTittle}>Cá nhân </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}>
                <MaterialCommunityIcons size={25} name="account-outline" />
                <Text style={styles.content}>Quản lý tài khoản</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}>
                <MaterialCommunityIcons
                  size={25}
                  name="bookmark-multiple-outline"
                />
                <Text style={styles.content}>Đã lưu</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons size={25} name="account-outline" />
                <Text style={styles.content}>Danh sách đặt trước</Text>
              </View>
            </View>
            <Text style={styles.sectionTittle}>Khám phá </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}>
                <Ionicons size={25} name="md-map-outline" />
                <Text style={styles.content}>Địa điểm nổi bật</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}>
                <Ionicons size={25} name="earth-sharp" />
                <Text style={styles.content}>Diễn đàn</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}>
                <MaterialCommunityIcons size={25} name="airballoon-outline" />
                <Text style={styles.content}>Thông tin du lịch</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons size={25} name="apps-outline" />
                <Text style={styles.content}>Về ứng dụng</Text>
              </View>
            </View>

            <Text style={styles.sectionTittle}>Cài đặt và chức năng</Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}>
                <Ionicons size={25} name="settings-outline" />
                <Text style={styles.content}>Cài đặt</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}>
                <Ionicons size={25} name="log-out-outline" />
                <Text style={styles.content}>Đăng xuất</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: height / 3.8,
  },
  userProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    paddingTop: 15,
    color: COLORS.white,
    fontSize: 23,
    fontWeight: 'bold',
  },
  sectionTittle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  content: {
    paddingLeft: 20,
    fontSize: 16,
    color: COLORS.dark,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  tittle: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonLogin: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.blueLight,
  },
  textSign: {
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
