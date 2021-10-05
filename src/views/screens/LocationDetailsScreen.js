import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Animated,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import hotelsByLocation from '../../consts/hotelsByLocation';
import HotelByLocationCard from '../../components/Hotel/HotelByLocationCard';
import FastImage from 'react-native-fast-image';
import hotelAPI from '../../API/hotelAPI';

const LocationDetailsScreen = ({navigation, route}) => {
  const location = route.params;
  const hotelLocation = location.tenDD;
  const [colorStatusBar, setColorStatusBar] = useState('transparent');
  const [hotelsInLocation, setHotelsInLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await hotelAPI.getByLocation(location.MaDD);
        setHotelsInLocation(res.data.items);
        setIsLoading(false);
      } catch (error) {
        console.log('Error API Location', error);
      }
    };
    getData();
  }, []);

  const isChangeColorStatusBar = e => {
    const contentOffsetY = e.nativeEvent.contentOffset.y;
    // console.log(contentOffsetY);
    if (contentOffsetY > 55) {
      setColorStatusBar(COLORS.blueChambray);
    } else {
      setColorStatusBar('transparent');
    }
  };

  console.log(hotelsInLocation);

  const getHeader = () => {
    return (
      <>
        <FastImage style={{height: 180}} source={{uri: location.content}}>
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
                style={[
                  styles.textShadow,
                  {
                    width: '70%',
                    fontSize: 23,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  },
                ]}>
                {location.tenDD}
              </Text>
            </View>
          </View>
        </FastImage>
        <View style={{}}>
          <Text
            style={{
              width: '70%',
              padding: 20,
              fontSize: 16,
              fontWeight: 'bold',
              color: COLORS.dark,
            }}>
            {location.total} lựa chọn
          </Text>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorStatusBar}
        animated={true}
      />
      {hotelsInLocation && hotelsInLocation.length !== 0 ? (
        <View style={styles.locationList}>
          <FlatList
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={getHeader}
            maxToRenderPerBatch={2}
            data={hotelsInLocation}
            keyExtractor={() => Math.random().toString(36).substr(2, 9)}
            onScroll={isChangeColorStatusBar}
            renderItem={({item}) => (
              <HotelByLocationCard
                hotel={item}
                location={hotelLocation}
                navigation={navigation}
              />
            )}
          />
        </View>
      ) : (
        <>
          {getHeader()}
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text style={{color: COLORS.greyLynch, fontSize: 14}}>
              Địa điểm chưa có khách sạn
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    width: 120,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationList: {
    flex: 3,

    backgroundColor: COLORS.white,
  },
  detailsContent: {
    marginBottom: -25,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  imageDetails: {
    position: 'absolute',
    bottom: -10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
export default LocationDetailsScreen;
