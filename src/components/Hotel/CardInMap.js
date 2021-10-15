import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('screen');

const CardInMap = ({hotel, navigation}) => {
  return (
    <TouchableHighlight
      style={{
        marginTop: 20,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 5,
      }}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailsScreen', hotel)}>
      <View style={styles.cardHotelSearch}>
        <FastImage
          style={styles.cardImage}
          source={{
            uri: hotel.tenMien,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.cardInfo}>
          <Text
            style={{
              color: COLORS.darkText,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {hotel.tenKS}
          </Text>
          <View
            style={{backgroundColor: COLORS.orangeGon, width: 45, height: 20, justifyContent: 'center', marginTop: 5}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: 'bold',
                  color: COLORS.white,
                }}>
                {hotel.rating}
              </Text>
              <MaterialIcons name="star" size={15} color={COLORS.white} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: COLORS.jacksonsPurple, fontSize: 13}}>
                Giá:
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  color: COLORS.redTorn,
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                {hotel.email}đ/ đêm
              </Text>
            </View>
            <View style={styles.btnBook}>
              <Text
                onPress={() => navigation.push('BookingScreen', hotel)}
                style={{
                  color: COLORS.white,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Đặt ngay
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardHotelSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    shadowColor: '#000',
    elevation: 10,
  },
  cardInfo: {
    backgroundColor: COLORS.white,
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardImage: {
    width: (width - 30) / 3,
    height: 100,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  btnBook: {
    height: 25,
    width: 80,
    backgroundColor: COLORS.blueDam,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardInMap;
