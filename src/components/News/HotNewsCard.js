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

const {width} = Dimensions.get('screen');

function reformatDate(dateStr) {
  const dArr = dateStr.split('-');
  return dArr[2] + '/' + dArr[1] + '/' + dArr[0];
}

const HotNewsCard = ({news, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('NewsDetails', news)}>
      <View style={{marginBottom: 20}}>
        <ImageBackground style={styles.cardImage} source={{uri: news.image}}>
          <View style={styles.imageOverlay}></View>
        </ImageBackground>
        <View elevation={1} style={[styles.infoCard]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                {
                  color: COLORS.darkBlue,
                  fontWeight: 'bold',
                  fontSize: 20,
                  overflow: 'hidden',
                },
              ]}>
              {news.name}
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
              {reformatDate(news.createDate.slice(0, -9))}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: width,
    height: 230,
  },
  infoCard: {
    width: width,
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
});

export default HotNewsCard;
