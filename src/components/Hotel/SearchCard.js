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

const SearchCard = ({hotel, navigation}) => {
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
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {hotel.tenKS}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons name="place" size={20} color={COLORS.darkText} />
              <Text style={{marginLeft: 5, color: COLORS.darkText}}>
                {hotel.email}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons name="star" size={20} color={COLORS.darkText} />
              <Text style={{marginLeft: 5, color: COLORS.darkText}}>
                {hotel.rating}
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

export default SearchCard;
