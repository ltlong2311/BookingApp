import React, {useState, useEffect, useRef} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import config from '../../../config';

const {width, height} = Dimensions.get('screen');

const toText = html => {
  return html
    .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
    .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
};

const DetailsScreen = ({navigation, route}) => {
  const hotel = route.params;
  const [dataList, setDataList] = useState(hotel.image.slice(0, 5));
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const ref = useRef(null);

  useEffect(() => {
    setDataList(dataList);
    infiniteScroll(dataList);
  }, []);

  const infiniteScroll = dataList => {
    const numberOfData = dataList.length;
    let scrollValue = 0,
      scrolled = 0;

    setInterval(() => {
      scrolled++;
      if (scrolled < numberOfData) scrollValue = scrollValue + width;
      else {
        scrollValue = 0;
        scrolled = 0;
      }
      ref?.current?.scrollToOffset({offset: scrollValue, animated: true});
    }, 5000);
  };

  // const onchange = nativeEvent => {
  //   if (nativeEvent) {
  //     const slide = Math.ceil(
  //       nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
  //     );
  //     if (slide !== imgActive) {
  //       setImgActive(slide);
  //     }
  //   }
  // };

  // const getFooter = () => {
  //   return <Text></Text>;
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{height: height / 2.5}}>
          {hotel.image && hotel.image.length && (
            <FlatList
              ref={ref}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginRight: 0}}
              horizontal
              pagingEnabled
              scrollEnabled
              // ListFooterComponent={getFooter}
              maxToRenderPerBatch={5}
              snapToAlignment="center"
              scrollEventThrottle={16}
              decelerationRate={'fast'}
              data={hotel.image.slice(0, 5)}
              keyExtractor={() => Math.random().toString(36).substr(2, 9)}
              renderItem={({item}) => (
                <ImageBackground
                  style={{flex: 1, width: width}}
                  source={{uri: config.IMAGE_URL + item}}>
                  <View style={styles.overlay}></View>
                </ImageBackground>
              )}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
            />
          )}
          <View style={{position: 'absolute', width: width}}>
            <View style={styles.header}>
              <MaterialIcons
                name="arrow-back-ios"
                size={28}
                color={COLORS.white}
                onPress={navigation.goBack}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ImageHotelScreen', hotel)}
                activeOpacity={0.8}>
                <MaterialIcons name="all-out" size={28} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imageDetails}>
            <Text
              style={{
                width: '70%',
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              {hotel.tenKS}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons name="star" size={30} color={COLORS.orange} />
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingTop: 4,
                }}>
                {hotel.rating}
              </Text>
            </View>
          </View>
          <View style={styles.wrapDot}>
            {hotel.image.slice(0, 5).map((_, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    height: 6,
                    width: 6,
                    backgroundColor: COLORS.white,
                    margin: 8,
                    borderRadius: 10,
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.detailsHotel}>
          <View style={styles.iconSave}>
            <MaterialIcons name="bookmarks" color={COLORS.primary} size={30} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginTop: 0,
            }}>
            <MaterialIcons name="place" size={20} color={COLORS.primary} />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.primary,
                width: '80%',
              }}>
              {hotel.diaChi}
            </Text>
          </View>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Thông tin khách sạn
          </Text>
          <View
            style={styles.detailsContent}
            showsVerticalScrollIndicator={false}>
            <Text style={{marginTop: 10, lineHeight: 22}}>
              {toText(hotel.content)}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buy}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: COLORS.whiteT,
              marginRight: 3,
            }}>
            Giá đề xuất:
          </Text>
          <Text
            style={{fontSize: 17, fontWeight: 'bold', color: COLORS.orange}}>
            {hotel.email} đ
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            /ngày
          </Text>
        </View>
        <View style={styles.btnBook}>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Đặt ngay
          </Text>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  imageDetails: {
    position: 'absolute',
    bottom: 35,
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
  iconSave: {
    position: 'absolute',
    top: -20,
    right: 20,
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  buy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.primary,
  },
  btnBook: {
    height: 40,
    width: 100,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsHotel: {
    flex: 1,
    top: -30,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
  },
  detailsContent: {
    marginBottom: -25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 36,
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 500,
  },
});
export default DetailsScreen;
