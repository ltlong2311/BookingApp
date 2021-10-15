import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  // StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {WebView} from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CardInMap from '../../components/Hotel/CardInMap';

const {width, height} = Dimensions.get('screen');

const ViewHotelLocationScreen = ({navigation, route}) => {
  const hotel = route.params;
  const [isShowHotel, setIsShowHotel] = useState(true);

  const changeShowHotel = () => {
    setIsShowHotel(!isShowHotel);
  };
  return (
    <SafeAreaView style={styles.background}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#41DA', '#22a7f0']}
        style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={23}
          color={COLORS.white}
          onPress={navigation.goBack}
        />
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
          {hotel.tenKS}
        </Text>
      </LinearGradient>
      <View style={styles.slider}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{height: '100%'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            width: width - 40,
            marginHorizontal: 20,
          }}>
          <View style={{alignItems: 'center', elevation: 10, top: 15}}>
            {isShowHotel ? (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={35}
                color={COLORS.blueN}
                onPress={changeShowHotel}
              />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-up"
                size={35}
                color={COLORS.blueN}
                onPress={changeShowHotel}
              />
            )}
          </View>
          {isShowHotel && <CardInMap hotel={hotel} navigation={navigation} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  slider: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default ViewHotelLocationScreen;
