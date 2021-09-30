import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet, Image, Text, StatusBar} from 'react-native';
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
// import * as SecureStore from 'expo-secure-store';

// async function deleteToken(key) {
//   await SecureStore.deleteItemAsync(key);
// }

export const DrawerContent = props => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const logOut = () => {
    // deleteToken('userToken');
    props.navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Avatar.Image
                source={{
                  uri: 'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/119057866_1444322012423771_248923324908347500_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=f3tuwZA1nMkAX_EWwY5&tn=kJ4eP7UckXSzkNsm&_nc_ht=scontent.fhan3-4.fna&oh=e8a6ffbc4202dbc37807a2f1ab4ad6ff&oe=615B611E',
                }}
                size={50}
              />
              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <Text style={styles.tittle}>LTL</Text>
                <Text style={styles.caption}>ltl2311</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={styles.paragraph}>23</Paragraph>
                <Caption style={styles.caption}>Bài viết</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={styles.paragraph}>11</Paragraph>
                <Caption style={styles.caption}>Đánh giá</Caption>
              </View>
            </View>
          </View>
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
      </DrawerContentScrollView>
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
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  tittle: {
    fontSize: 16,
    marginTop: 0,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
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
    marginTop: 15,
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
