import React, {useState, useEffect} from 'react';

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
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import locationAPI from '../../API/locationAPI';
import LocationCard from '../../components/Location/LocationCard';

const {width} = Dimensions.get('screen');

const LocationScreen = ({navigation}) => {
  const [locationData, setLocationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await locationAPI.getAll();
        if (res) setLocationData(res.data);
        setIsLoading(false);
        // console.log(locationData);
      } catch (error) {
        console.log('Error API Location', error);
      }
    };
    getData();
  }, []);

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
          color={COLORS.white}
        />
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
          Địa điểm
        </Text>
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white}
        />
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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SearchLocationScreen', locationData)
                }
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  alignItems: 'center',
                }}
                activeOpacity={0.9}>
                <MaterialIcons name="search" size={28} />
                <TextInput
                  placeholder="Tìm địa điểm"
                  underlineColorAndroid="transparent"
                  editable={false}
                  style={styles.textInput}
                  autoCapitalize="none"
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <Text style={styles.sectionTittle}>Địa điểm phổ biến </Text>
        {locationData && locationData.length !== 0 && (
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <View>
              {locationData
                .slice(0, 10)
                .filter((_, i) => i % 2 === 0) // loc STT chan => cot le
                .map((location, index) => (
                  <LocationCard
                    key={location.MaDD}
                    navigation={navigation}
                    location={location}
                    // aspectRatio={200 - (index % 3) * 50}
                    aspectRatio={130 + (index % 2) * 25} // 2 loai tlkh
                  />
                ))}
            </View>
            <View>
              {locationData
                .slice(0, 10)
                .filter((_, i) => i % 2 !== 0)
                .map((location, index) => (
                  <LocationCard
                    key={location.MaDD}
                    navigation={navigation}
                    location={location}
                    aspectRatio={100 + (index % 3) * 50} // 3 loai
                  />
                ))}
            </View>
          </View>
        )}
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
    alignItems: 'center',
    borderRadius: 10,
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
