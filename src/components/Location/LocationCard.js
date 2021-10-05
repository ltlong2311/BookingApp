import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../../config';
import COLORS from '../../consts/colors';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('screen');

const LocationCard = ({navigation, location, aspectRatio}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('LocationDetails', location)}>
      <FastImage
        style={[styles.cardImage, {height: aspectRatio}]}
        source={{uri: config.IMAGE_URL + location.image}}>
        <View style={styles.overlay}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                {location.tenDD}
              </Text>
              <Text style={{color: COLORS.white}}>
                {location.total} lựa chọn
              </Text>
            </View>
          </View>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  cardImage: {
    width: (width - 60) / 2,
    height: 100,
    marginRight: 20,
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  imageOverlay: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .15)',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
