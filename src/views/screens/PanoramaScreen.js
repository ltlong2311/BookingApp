import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  // StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import COLORS from '../../consts/colors';
import config from '../../../config';

// import {PanoramaView} from '@lightbase/react-native-panorama-view';

const {width, height} = Dimensions.get('screen');

const PanoramaScreen = ({navigation, route}) => {
  const hotel = route.params;
  return (
    <SafeAreaView style={styles.background}>
      <View style={{width: width}}>
        <View style={styles.header}>
          <MaterialIcons
            name="arrow-back-ios"
            size={28}
            color={COLORS.secondary}
            onPress={navigation.goBack}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ImageHotelScreen', hotel)}
            activeOpacity={0.8}>
            <MaterialIcons name="360" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.slider}>
        {/* <PanoramaView
          style={{  height: 230 }}
          dimensions={{height: 230, width: Dimensions.get('window').width}}
          inputType="mono"
          imageUrl="https://i.imgur.com/rhnRjxr.jpg"
        /> */}
      </View>
      <View>
        <Text style={{color: COLORS.secondary, bottom: 10}}>1/1</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, .9)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    width: width,
    height: height / 2.5,
    bottom: 50,
  },
});

export default PanoramaScreen;
