import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import AsyncStore from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('screen');

const saveData = async (key, value) => {
  await AsyncStore.setItem(key, value);
};

const HotelByLocationCard = ({hotel, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', hotel)}>
      <View style={{marginBottom: 30, paddingHorizontal: 20}}>
        <ImageBackground style={styles.cardImage} source={{uri: hotel.tenMien}}>
          <View style={styles.imageOverlay}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}>
              <TouchableOpacity
                actionOpacity={0.8}
                onPress={() => saveData('ID', hotel.MaKS)}>
                <View style={styles.btnSave}>
                  <MaterialIcons
                    name="bookmark-outline"
                    size={28}
                    color={COLORS.white}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.rating}>
                <Text
                  style={{
                    color: COLORS.whiteT,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {hotel.rating}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View elevation={2} style={[styles.infoCard]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                {
                  color: COLORS.dark,
                  fontWeight: 'bold',
                  fontSize: 16,
                  width: '60%',
                  overflow: 'hidden',
                },
              ]}>
              {hotel.tenKS}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 5,
            }}>
            <Text
              style={[{color: COLORS.greyLynch, fontSize: 12, width: '60%'}]}>
              {hotel.diaChi}
            </Text>
            <Text style={[{color: COLORS.blueChambray, fontSize: 12}]}>
              <Text
                style={[
                  {color: COLORS.monza, fontWeight: 'bold', fontSize: 15},
                ]}>
                {hotel.email} VND / đêm
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelByLocationCard;

const styles = StyleSheet.create({
  cardImage: {
    width: width - 40,
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  infoCard: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  imageOverlay: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, .05)',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  btnSave: {
    height: 45,
    width: 45,
    backgroundColor: 'rgba(30, 30, 30, .6)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    height: 45,
    width: 45,
    backgroundColor: 'rgba(217, 169, 47, .8)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
