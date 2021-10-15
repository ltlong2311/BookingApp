import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  Alert,
  BackHandler,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';
import AsyncStore from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import userAPI from '../../API/userAPI';

const {width, height} = Dimensions.get('screen');

const UserProfileScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState();
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    let token = await AsyncStore.getItem('userToken');
    if (token) setUserInfo(jwt_decode(token));
    setUserToken(token);
    // console.log(token);
  };

  async function removeDataStore(key) {
    await AsyncStore.removeItem(key);
  }

  const logOut = () => {
    removeDataStore('userToken');
    removeDataStore('userID');
    navigation.push('Login');
  };

  const backPressed = () => {
    Alert.alert(
      'Thoát ứng dụng',
      'Xác nhận muốn thoát?',
      [
        {
          text: 'Không',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Có', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
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
                      borderColor: COLORS.blueLight,
                      borderWidth: 2,
                      borderRadius: 60 / 2,
                    }}
                    source={{
                      uri: 'https://i.imgur.com/An3S07z.jpg',
                    }}
                  />
                  <Text style={styles.textHeader}>{userInfo.username}</Text>
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
                    <View style={styles.buttonLogin}>
                      <Text style={styles.textSign}>Đăng nhập</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </ImageBackground>
          <View style={{flex: 2, paddingHorizontal: 30}}>
            {userInfo && (
              <>
                <Text style={styles.sectionTittle}>Cá nhân </Text>
                <View>
                  <TouchableOpacity
                    actionOpacity={0.8}
                    onPress={() =>
                      navigation.push('UserProfileEdit', {
                        token: userToken,
                        userProfile: userInfo,
                      })
                    }>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingBottom: 20,
                      }}>
                      <MaterialCommunityIcons
                        size={25}
                        name="account-outline"
                      />
                      <Text style={styles.content}>Quản lý tài khoản</Text>
                    </View>
                  </TouchableOpacity>
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
              </>
            )}
            <Text style={styles.sectionTittle}>Khám phá </Text>
            <View>
              <TouchableOpacity
                actionOpacity={0.8}
                onPress={() => navigation.navigate('Location')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 20,
                  }}>
                  <Ionicons size={25} name="md-map-outline" />
                  <Text style={styles.content}>Địa điểm nổi bật</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                actionOpacity={0.8}
                onPress={() => navigation.navigate('Forum')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 20,
                  }}>
                  <Ionicons size={25} name="earth-sharp" />
                  <Text style={styles.content}>Diễn đàn</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                actionOpacity={0.8}
                onPress={() => navigation.navigate('Active')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 20,
                  }}>
                  <MaterialCommunityIcons size={25} name="airballoon-outline" />
                  <Text style={styles.content}>Thông tin du lịch</Text>
                </View>
              </TouchableOpacity>
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
                {userInfo ? (
                  <TouchableOpacity actionOpacity={0.8} onPress={logOut}>
                    <Text style={styles.content}>Đăng xuất</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity actionOpacity={0.8} onPress={backPressed}>
                    <Text style={styles.content}>Thoát</Text>
                  </TouchableOpacity>
                )}
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
