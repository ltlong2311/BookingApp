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
  Alert,
  FlatList,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import config from '../../../config';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import AsyncStore from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen');

const toText = html => {
  return html
    .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
    .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
};

function convertHTMLEntity(text) {
  const span = document.createElement('span');

  return text.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
    span.innerHTML = entity;
    return span.innerText;
  });
}

const DetailsScreen = ({navigation, route}) => {
  const hotel = route.params;
  // console.log(route.params);
  const [dataList, setDataList] = useState(hotel.image.slice(0, 4));
  const [hotelList, setHotelList] = useState();
  const [colorStatusBar, setColorStatusBar] = useState('transparent');

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const ref = useRef(null);

  useEffect(() => {
    setDataList(dataList);
    infiniteScroll(dataList);
    getValue('hotelSaveList');
  }, []);

  const alert = text =>
    Alert.alert('Thông báo', text, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

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
  const getValue = async key => {
    const result = await AsyncStore.getItem(key);
    setHotelList(JSON.parse(result));
  };
  const saveData = async (key, value) => {
    await AsyncStore.setItem(key, value);
  };

  const isChangeColorStatusBar = e => {
    const contentOffsetY = e.nativeEvent.contentOffset.y;
    // console.log(contentOffsetY);
    if (contentOffsetY > 55) {
      setColorStatusBar(COLORS.blueChambray);
    } else {
      setColorStatusBar('transparent');
    }
  };

  const saveHotel = () => {
    const hotelItem = {
      MaKS: hotel.MaKS,
      tenKS: hotel.tenKS,
      rating: hotel.rating,
      tenMien: hotel.tenMien,
      diaDiem: hotel.location.tenDD,
    };
    const listID = [];
    for (const element of hotelList) {
      listID.push(element.ID); // [ID,...]
    }
    if (!listID.includes(hotel.MaKS)) {
      hotelList.push(hotelItem);
      saveData('hotelSaveList', JSON.stringify(hotelList));
      alert('Lưu thành công');
    } else {
      alert('Đã có trong danh sách lưu');
    }
    console.log(hotelList);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorStatusBar}
        animated={true}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        onScroll={isChangeColorStatusBar}
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
              data={hotel.image.slice(0, 4)}
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
            {hotel.image.slice(0, 4).map((_, i) => {
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
            <TouchableOpacity activeOpacity={0.8} onPress={saveHotel}>
              <MaterialIcons
                name="bookmarks"
                color={COLORS.blueTile}
                size={30}
              />
            </TouchableOpacity>
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
                width: '75%',
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

          <Text
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Vị trí
          </Text>
          <View>
            {hotel.locationMap ? (
              <MapView
                style={{height: 150}}
                showsUserLocation={true}
                region={{
                  latitude: hotel.locationMap.latitude,
                  longitude: hotel.locationMap.longitude,
                  latitudeDelta: 0.08,
                  longitudeDelta: 0.09,
                }}
              />
            ) : (
              <MapView
                provider={PROVIDER_GOOGLE}
                style={{height: 150}}
                initialRegion={{
                  latitude: 21.046738397887,
                  longitude: 105.84678914075619,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
            )}

            <View style={styles.viewMapBtn}>
              <TouchableOpacity
                onPress={() =>
                  navigation.push('ViewHotelLocationScreen', hotel)
                }>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    name="place"
                    size={13}
                    color={COLORS.blueLight}
                  />
                  <Text
                    style={{
                      paddingRight: 5,
                      fontSize: 10,
                      color: COLORS.blueTile,
                    }}>
                    Xem chi tiết
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.book}>
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
            onPress={() => navigation.push('BookingScreen', hotel)}
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
  book: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
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
    marginBottom: 10,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 36,
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 500,
  },
  viewMapBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 5,
    elevation: 1,
  },
});
export default DetailsScreen;
