import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
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
const LocationDetailsScreen = ({navigation, route}) => {
  const location = route.params;
  const [colorStatusBar, setColorStatusBar] = React.useState('transparent');

  const isChangeColorStatusBar = e => {
    const contentOffsetY = e.nativeEvent.contentOffset.y;
    console.log(contentOffsetY);
    if (contentOffsetY > 55) {
      setColorStatusBar(COLORS.blueChambray);
    } else {
      setColorStatusBar('transparent');
    }
  };

  const getHeader = () => {
    return (
      <>
        <FastImage style={{height: 180}} source={{uri: location.url}}>
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
                {location.name}
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
            {hotelsByLocation.length} lựa chọn
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
      <View style={styles.locationList}>
        <FlatList
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={getHeader}
          maxToRenderPerBatch={2}
          data={hotelsByLocation}
          keyExtractor={() => Math.random().toString(36).substr(2, 9)}
          onScroll={isChangeColorStatusBar}
          renderItem={({item}) => (
            <HotelByLocationCard hotel={item} navigation={navigation} />
          )}
        />
      </View>
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
