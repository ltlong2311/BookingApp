import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/colors';
const LocationCard = ({navigation, location, aspectRatio}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('LocationDetails', location)}>
      <ImageBackground
        style={[styles.cardImage, {height: aspectRatio}]}
        source={location.image}>
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
                {location.name}
              </Text>
              <Text style={{color: COLORS.white}}>
                {location.choice} lựa chọn
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
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
