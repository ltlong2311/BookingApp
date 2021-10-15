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
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import userAPI from '../../API/userAPI';

const {width, height} = Dimensions.get('screen');

const UserProfileEditScreen = ({navigation, route}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isChangeInfoSuccess, setIsChangeInfoSuccess] = React.useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [userInfoChange, setUserInfoChange] = useState({
    email: userInfo.email,
    hoTen: userInfo.hoTen,
    SDT: userInfo.SDT,
  });
  const token = route.params.token;
  const userProfile = route.params.userProfile;

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await userAPI.getOne(userProfile.ID);
        setUserInfo(res.data);
      } catch (error) {
        console.log('Error API User', error);
      }
    };
    getUserInfo();
  }, [isLoading]);

  const changeUserInfo = async () => {
    setIsLoading(true);
    const data = {
      email: userInfoChange.email,
      hoTen: userInfoChange.hoTen,
      SDT: userInfoChange.SDT,
    };
    try {
      const res = await userAPI.changeOne(data, token);
      setUserInfo(res.data);
      setIsLoading(false);
      setIsChangeInfoSuccess(true);
    } catch (error) {
      console.log('Error API Change User Info', error);
      setIsLoading(false);
    }
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
            <View style={styles.iconHeader}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons
                  name="arrow-back-ios"
                  size={23}
                  color={COLORS.white}
                  onPress={navigation.goBack}
                />
              </View>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Chỉnh sửa thông tin
              </Text>
              <TouchableOpacity actionOpacity={0.8} onPress={changeUserInfo}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                  }}>
                  Lưu
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageDetails}>
              <Text
                style={[
                  styles.textShadow,
                  {
                    width: '70%',
                    fontSize: 23,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  },
                ]}></Text>
            </View>
            {userInfo && (
              <View style={styles.userProfile}>
                <ImageBackground
                  style={{
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
                <Text style={styles.textHeader}>{userInfo.hoTen}</Text>
              </View>
            )}
          </ImageBackground>
          <View style={{flex: 2, paddingHorizontal: 25, paddingTop: 25}}>
            {userInfo && (
              <>
                <Text style={styles.label}>Username</Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput}
                    autoCapitalize="none"
                    editable={false}
                    defaultValue={userInfo.username}
                  />
                </View>
                <Text style={styles.label}>Họ tên</Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={text =>
                      setUserInfoChange({...userInfoChange, hoTen: text})
                    }
                    defaultValue={userInfo.hoTen}
                  />
                </View>
                <Text style={styles.label}>Email</Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={text =>
                      setUserInfoChange({...userInfoChange, email: text})
                    }
                    defaultValue={userInfo.email}
                  />
                </View>
                <Text style={styles.label}>Điện thoại</Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={text =>
                      setUserInfoChange({...userInfoChange, SDT: text})
                    }
                    defaultValue={userInfo.SDT}
                  />
                </View>
              </>
            )}
          </View>
        </ScrollView>
        {isLoading && (
          <View style={styles.backgroundNotify}>
            <ActivityIndicator size="large" color={COLORS.whiteG} />
          </View>
        )}
        {isChangeInfoSuccess && <View style={styles.successNotify}></View>}
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
    height: height / 3.5,
  },
  userProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    paddingTop: 10,
    color: COLORS.white,
    fontSize: 23,
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBBBB',
  },
  label: {
    fontSize: 18,
    color: COLORS.grayG,
    fontWeight: '500',
  },
  textInput: {
    flex: 1,
    color: '#05375a',
    fontSize: 18,
    fontWeight: '700',
    marginTop: -3,
    paddingTop: 10,
    padding: 0,
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
  iconHeader: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    position: 'absolute',
    bottom: -10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
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

export default UserProfileEditScreen;
