import React from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import locations from '../../consts/locations';
import FastImage from 'react-native-fast-image';
const {width} = Dimensions.get('screen');

const LocationScreen = ({navigation}) => {
  const LocationCard = ({location, aspectRatio}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('LocationDetails', location)}>
        <FastImage
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
        </FastImage>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#41DA', '#22a7f0']}
        style={styles.header}>
        <MaterialIcons
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          name="sort"
          size={28}
          color={COLORS.white}></MaterialIcons>
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
          Địa điểm
        </Text>
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white}></MaterialIcons>
      </LinearGradient>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#41DA', '#22a7f0']}
          style={{
            height: 30,
            paddingHorizontal: 20,
            marginBottom: 40,
          }}>
          <View>
            <View style={styles.inputSearch}>
              <MaterialIcons name="search" size={28} />
              <TextInput
                placeholder="Tìm địa điểm"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>
        </LinearGradient>
        <Text style={styles.sectionTittle}>Địa điểm nổi bật </Text>
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <View>
            {locations
              .filter((_, i) => i % 2 === 0) // lọc số thứ tự chẵn => cột lẻ
              .map((location, index) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  // aspectRatio={200 - (index % 3) * 50}
                  aspectRatio={130 + (index % 2) * 25} // 2 loại tỉ lệ khung hình
                  // aspectRatio={185 - (index % 3) * 20} // 3 loại
                />
              ))}
          </View>
          <View>
            {locations
              .filter((_, i) => i % 2 !== 0)
              .map((location, index) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  // aspectRatio={100 + (index % 3) * 50}
                  aspectRatio={100 + (index % 3) * 50}
                  // aspectRatio={125 + (index % 3) * 40}
                />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backgroundColor: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTittle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: COLORS.whiteT,
  },
  cardImage: {
    width: (width - 60) / 2,
    height: 100,
    marginRight: 20,
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    color: '#05375a',
    fontSize: 15,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .15)',
  },
  inputSearch: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 55,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 12,
  },
  sectionTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 15,
  },
});
export default LocationScreen;
