import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import hotelHighlights from '../../consts/hotelHighlights';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import hotelAPI from '../../API/hotelAPI';
import userAPI from '../../API/userAPI';
import Card from '../../components/Hotel/Card';
import RecommendCard from '../../components/Hotel/RecommendedCard';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [dataHotel, setDataHotel] = useState([]);
  const [dataList, setDataList] = useState(hotelHighlights);
  const [colorContentStatusBar, setColorContentStatusBar] = useState('light');
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const ref = useRef(null);


  useEffect(() => {
    setDataList(hotelHighlights);
    infiniteScroll(dataList);
    const getData = async () => {
      try {
        const res = await hotelAPI.getAll();
        setDataHotel(res.data);
      } catch (error) {
        console.log('Error API Hotel', error);
      }
    };
    getData();
    // route.params && getUserInfo();
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
    }, 8000);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar style={colorContentStatusBar} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#41DA', '#22a7f0']}
        style={styles.header}>
        <MaterialIcons
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          name="sort"
          size={28}
          color={COLORS.white}
        />
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
          KMAHotel
        </Text>
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white}
        />
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#41DA', '#22a7f0']}
          style={{
            height: 100,
            paddingHorizontal: 20,
            marginBottom: 40,
          }}>
          <View>
            <Text style={styles.headerTittle}>Tìm kiếm thêm</Text>
            <Text style={styles.headerTittle}>nhiều khách sạn khác</Text>
            <View style={styles.inputSearch}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('SearchHotelScreen')}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialIcons name="search" size={28} />
                <TextInput
                  placeholder="Tìm khách sạn..."
                  underlineColorAndroid="transparent"
                  editable={false}
                  style={styles.textInput}
                  autoCapitalize="none"
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <Text style={styles.sectionTittle}>Nổi bật </Text>
        {hotelHighlights && hotelHighlights.length && (
          <View>
            <FlatList
              ref={ref}
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              horizontal
              pagingEnabled
              scrollEnabled
              style={{flexGrow: 0}}
              snapToAlignment="center"
              scrollEventThrottle={16}
              decelerationRate={'fast'}
              data={hotelHighlights}
              keyExtractor={() => Math.random().toString(36).substr(2, 9)}
              renderItem={({item}) => (
                <RecommendCard hotel={item} navigation={navigation} />
              )}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
            />
            <View style={styles.wrapDot}>
              {hotelHighlights.map((_, i) => {
                let opacity = position.interpolate({
                  // thay doi do mo khi position thay doi
                  inputRange: [i - 1, i, i + 1],
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: 'clamp',
                });
                return (
                  <Animated.View
                    key={i}
                    style={{
                      opacity, //
                      height: 3,
                      width: 15,
                      backgroundColor: COLORS.white,
                      margin: 8,
                      borderRadius: 0,
                    }}
                  />
                );
              })}
            </View>
          </View>
        )}
        <Text style={styles.sectionTittle}>Đề xuất</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={2}
            horizontal
            data={dataHotel.slice(0, 5)}
            keyExtractor={() => Math.random().toString(36).substr(2, 9)}
            renderItem={({item}) => (
              <Card hotel={item} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    fontSize: 18,
    color: COLORS.gray,
  },
  dot: {
    margin: 3,
    fontSize: 18,
    color: COLORS.white,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    color: '#05375a',
    fontSize: 15,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  inputSearch: {
    position: 'absolute',
    top: 70,
    width: '100%',
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 12,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    marginHorizontal: 20,
  },
  iconCategory: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
  },
  sectionTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardImage: {
    width: width / 2,
    height: 220,
    marginRight: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
});

export default HomeScreen;
