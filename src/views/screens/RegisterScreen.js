import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../consts/colors';
import userAPI from '../../API/userAPI';

const {width, height} = Dimensions.get('screen');

const RegisterScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{
            flex: 1.5,
            marginBottom: -30,
          }}
          source={require('../../assets/hotel15.jpg')}>
          <View style={styles.overlay}>
            <View style={styles.headerIcon}>
              <MaterialIcons
                name="arrow-back-ios"
                size={28}
                color={COLORS.white}
                onPress={navigation.goBack}
              />
            </View>
            <Text style={styles.textHeader}>Đăng ký</Text>
          </View>
        </ImageBackground>
        <View style={styles.footer}>
          <View style={styles.action}>
            <TextInput
              placeholder="Nhập tài khoản"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Họ tên"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Mật khẩu"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            actionOpacity={0.8}
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.button}>
              <LinearGradient
                colors={['#2F8CCA', '#3BA5F1']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.signUp}>
                <Text style={styles.textSign}>Đăng ký</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>
        {isLoading && (
          <View style={styles.backgroundNotify}>
            <ActivityIndicator size="large" color={COLORS.whiteG} />
            <View style={styles.loadingPopup}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <ActivityIndicator size="large" color={COLORS.airForceBlue} />
                <Text style={{paddingLeft: 20}}>Đăng ký tài khoản</Text>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerIcon: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textHeader: {
    bottom: 42,
    position: 'absolute',
    paddingHorizontal: 25,
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  textFooter: {
    color: '#05375a',
    fontSize: 18,
  },
  tittle: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',

    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBBBB',
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    color: '#05375a',
    fontSize: 18,
    marginTop: -3,
    paddingBottom: 0,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textSign: {
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
  loadingPopup: {
    width: 200,
    height: 100,
    backgroundColor: COLORS.white,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
