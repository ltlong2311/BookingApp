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
import FastImage from 'react-native-fast-image';
const {width, height} = Dimensions.get('screen');

const ImageHotelScreen = ({navigation, route}) => {
  const hotel = route.params;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    // console.log(contentOffsetX, currentIndex);
    setCurrentSlideIndex(currentIndex);
  };

  const nextImage = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== hotel.image.length) {
      const offset = nextSlideIndex * width;
      ref.current.scrollToOffset({offset: offset, animated: true});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const prevImage = () => {
    const prevSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex !== 0) {
      const offset = prevSlideIndex * width;
      ref.current.scrollToOffset({offset: offset, animated: true});
      setCurrentSlideIndex(prevSlideIndex);
    }
  };

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
          {hotel.website !== '' && (
            <TouchableOpacity
              onPress={() => navigation.navigate('PanoramaScreen', hotel)}
              activeOpacity={0.8}>
              <MaterialIcons name="360" size={28} color={COLORS.white} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.slider}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          horizontal
          pagingEnabled
          data={hotel.image}
          keyExtractor={() => Math.random().toString(36).substr(2, 9)}
          renderItem={({item}) => (
            <FastImage
              style={{
                width: width,
              }}
              source={{uri: config.IMAGE_URL + item}}
              resizeMode={FastImage.resizeMode.cover}
            />
          )}
        />
        <View
          style={{
            position: 'absolute',
            color: COLORS.whiteT,
            paddingHorizontal: 6,
            top: width / 2.5,
            flexDirection: 'row',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: width,
          }}>
          {currentSlideIndex !== 0 ? (
            <TouchableOpacity onPress={prevImage}>
              <Text
                style={{
                  textShadowColor: COLORS.darkSub,
                  shadowOpacity: 2,
                  textShadowRadius: 6,
                  textShadowOffset: {width: 1, height: 2},
                }}>
                <SimpleLineIcons
                  name="arrow-left"
                  color={COLORS.light}
                  size={25}
                />
              </Text>
            </TouchableOpacity>
          ) : (
            <View></View> // tra View rong do 2 button dung justify: space-between
          )}

          {currentSlideIndex !== hotel.image.length - 1 && (
            <TouchableOpacity onPress={nextImage}>
              <Text
                style={{
                  textShadowColor: COLORS.darkSub,
                  shadowOpacity: 2,
                  textShadowRadius: 6,
                  textShadowOffset: {width: 1, height: 2},
                }}>
                <SimpleLineIcons
                  name="arrow-right"
                  color={COLORS.light}
                  size={25}
                />
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View>
        <Text style={{color: COLORS.secondary, bottom: 10}}>
          {currentSlideIndex + 1}/{hotel.image.length}
        </Text>
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
    // backgroundColor: COLORS.airForceBlue,
    bottom: 50, // tinh them chieu cao status bar trong luc can giua
  },
});

export default ImageHotelScreen;
