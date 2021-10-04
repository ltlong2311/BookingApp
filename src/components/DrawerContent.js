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

async function deleteToken(key) {
  await AsyncStore.removeItem(key);
}

export const DrawerContent = props => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    getValue();
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const logOut = () => {
    deleteToken('userToken');
    props.navigation.navigate('Login');
  };

  const getValue = async () => {
    let token = await AsyncStore.getItem('userToken');
    if (token) setUserInfo(jwt_decode(token));
    // console.log(token);
    // console.log(userInfo);
  };

  return (
    <View style={{flex: 1}}>
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
                  source={{
                    uri: 'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/119057866_1444322012423771_248923324908347500_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=f3tuwZA1nMkAX_EWwY5&tn=kJ4eP7UckXSzkNsm&_nc_ht=scontent.fhan3-4.fna&oh=e8a6ffbc4202dbc37807a2f1ab4ad6ff&oe=615B611E',
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
                    onPress={() => props.navigation.navigate('Login')}
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
              props.navigation.navigate('Test');
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
