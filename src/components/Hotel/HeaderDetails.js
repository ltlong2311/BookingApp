import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import config from '../../../config';
import FastImage from 'react-native-fast-image';

const HeaderDetails = ({url, hotel, navigation}) => {
  const urlImage = config.IMAGE_URL + url;

  return (
    <FastImage style={{flex: 1}} source={{uri: urlImage}}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <MaterialIcons
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <MaterialIcons name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 23,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            {urlImage}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons name="star" size={30} color={COLORS.orange} />
            <Text
              style={{
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 20,
                paddingTop: 4,
                marginRight: -20,
              }}>
              {hotel.rating}
            </Text>
          </View>
        </View>
      </View>
    </FastImage>
  );
};

export default HeaderDetails;

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  imageDetails: {
    position: 'absolute',
    bottom: 30,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
});
