import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStore from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import {set} from 'react-native-reanimated';
import COLORS from '../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import userAPI from '../API/userAPI';

async function removeDataStore(key) {
  await AsyncStore.removeItem(key);
}

export const DrawerContent = props => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [idUser, setIDUser] = useState();

  useEffect(() => {
    getValue();
    // idUser && getUserInfo();
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const logOut = () => {
    removeDataStore('userToken');
    removeDataStore('userID');
    removeDataStore('hotelSaveList');
    props.navigation.push('Login');
  };

  // const getUserInfo = async () => {
  //   try {
  //     const res = await userAPI.getOne(idUser);
  //     setUserInfo(res.data);
  //   } catch (error) {
  //     console.log('Error API User', error);
  //   }
  // };

  const getValue = async () => {
    let token = await AsyncStore.getItem('userToken');
    // const userProfile = jwt_decode(token);
    setUserInfo(jwt_decode(token));
    // console.log(token);
    // console.log(userProfile);
  };

  return (
    <View style={isDarkTheme ? styles.drawerDark : styles.drawer}>
      <View style={styles.drawerContent}>
        {userInfo ? (
          <ImageBackground
            style={styles.userInfoSectionLogin}
            source={require('../assets/hotel32.jpg')}>
            <View style={styles.overlay}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Avatar.Image
                  style={{
                    borderColor: COLORS.greyLynch,
                    borderWidth: 1,
                    overflow: 'hidden',
                  }}
                  source={{
                    uri: 'https://i.imgur.com/An3S07z.jpg',
                  }}
                  size={50}
                />
                <View style={{flexDirection: 'column', marginLeft: 15}}>
                  <Text style={styles.tittle}>{userInfo.hoTen}</Text>
                  <Text style={styles.caption}>{userInfo.email}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        ) : (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#244ed4', '#22a7f0']}
            style={styles.userInfoSection}>
            <View style={{paddingLeft: 5, paddingTop: 60}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'column', marginLeft: 15}}>
                  <Text style={styles.tittle}>Welcome to KMAHotel!</Text>
                  <Text
                    onPress={() => props.navigation.push('Login')}
                    style={styles.caption}>
                    Đăng nhập ngay
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        )}

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('HomeScreen');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="bookmark-multiple-outline"
                color={color}
                size={size}
              />
            )}
            label="Đã lưu"
            onPress={() => {
              props.navigation.navigate('User', {screen: 'SaveList'});
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="compass-outline"
                color={color}
                size={size}
              />
            )}
            label="Điếm đến"
            onPress={() => {
              props.navigation.navigate('Location');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="forum-outline"
                color={color}
                size={size}
              />
            )}
            label="Diễn đàn"
            onPress={() => {
              props.navigation.navigate('Forum');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="airballoon-outline"
                color={color}
                size={size}
              />
            )}
            label="Hoạt động"
            onPress={() => {
              props.navigation.navigate('Active');
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Khác">
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Tài khoản"
            onPress={() => {
              props.navigation.navigate('User', {screen: 'UserProfile'});
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="account-check-outline"
                color={color}
                size={size}
              />
            )}
            label="Trợ giúp"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Thiết lập">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}>
            <View style={styles.preference}>
              <Text>Giao diện tối</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Thoát"
          onPress={logOut}
        />
      </Drawer.Section>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  drawerDark: {
    flex: 1,
    backgroundColor: COLORS.darkTile,
  },
  userInfoSection: {
    height: 130,
  },
  userInfoSectionLogin: {
    height: 130,
  },
  tittle: {
    color: COLORS.whiteT,
    fontSize: 16,
    marginTop: -5,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  caption: {
    color: COLORS.whiteT,
    fontSize: 14,
    lineHeight: 14,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    paddingLeft: 15,
    paddingTop: 50,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 0,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
