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

const LocationSearchCard = ({location, navigation}) => {
  return (
    <View
      style={{
        marginTop: 20,
        marginHorizontal: 15,
      }}>
      <TouchableHighlight
        activeOpacity={0.9}
        onPress={() => navigation.navigate('LocationDetails', location)}>
        <View style={styles.locationSearchCard}>
          <FastImage
            style={styles.cardImage}
            source={{
              uri: location.content,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.cardInfo}>
            <Text
              style={{
                color: COLORS.dark,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {location.tenDD}
            </Text>
            <Text style={{fontSize: 13, color: COLORS.darkMinus}}>
              {location.diaChi}
            </Text>
            <Text
              style={{
                color: COLORS.redTorn,
                fontSize: 13,
              }}>
              {location.total} khách sạn
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  locationSearchCard: {
    flexDirection: 'row',
    flex: 1,
  },
  cardInfo: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingLeft: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cardImage: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: 5,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
});

export default LocationSearchCard;
