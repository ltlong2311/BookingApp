import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import FastImage from 'react-native-fast-image';
import hotelAPI from '../../API/hotelAPI';

const {width} = Dimensions.get('screen');

const SaveCard = ({hotel, navigation}) => {
  const [dataHotel, setDataHotel] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await hotelAPI.getOne(hotel.MaKS);
        setDataHotel(res.data);
      } catch (error) {
        console.log('Error API Hotel', error);
      }
    };
    getData();
    // route.params && getUserInfo();
  }, []);

  return (
    <TouchableHighlight
      style={{
        marginTop: 20,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 5,
      }}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailsScreen', dataHotel)}>
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
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <View
              style={{
                backgroundColor: COLORS.orange,
                width: 30,
                height: 30,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.white,
                }}>
                {hotel.rating}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingRight: 10,
                marginRight: 0,
              }}>
              <MaterialIcons
                name="place"
                style={{paddingLeft: -5}}
                size={15}
                color={COLORS.darkSub}
              />
              <Text
                style={{marginLeft: 5, fontSize: 13, color: COLORS.darkSub}}>
                {hotel.diaDiem}
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
    height: 130,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
});

export default SaveCard;
