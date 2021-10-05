import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TextInput,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';
import hotelHighlights from '../../consts/hotelHighlights';
import hotelAPI from '../../API/hotelAPI';
import SearchCard from '../../components/Hotel/SearchCard';
import LocationSearchCard from '../../components/Location/LocationSearchCard';

const {width, height} = Dimensions.get('screen');

const SearchLocationScreen = ({navigation, route}) => {
  const locationData = route.params;
  console.log(locationData);

  const [searchQuery, setSearchQuery] = useState('');
  const [dataSearch, setDataSearch] = useState([]);

  const searchLocation = query => {
    const dataFilter = locationData.filter(i => i.tenDD.includes(query));
    setDataSearch(dataFilter);
    console.log(dataFilter);
  };

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query && query.trim()) {
      searchLocation(query);
    } else {
      setDataSearch([]);
    }
  };

  const onCancel = () => {
    setSearchQuery('');
    setDataSearch([]);
  };

  const onSearchSubmit = () => {
    Keyboard.dismiss();
  };

  const showClearIcon = () => {
    return (
      <>
        {searchQuery !== '' && (
          <MaterialIcons
            onPress={onCancel}
            name="cancel"
            size={18}
            style={{color: COLORS.grayG}}
          />
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#41DA', '#22a7f0']}
        style={styles.header}>
        <Searchbar
          style={styles.search}
          inputStyle={styles.inputSearch}
          placeholder="Nhập địa điểm"
          onChangeText={onChangeSearch}
          returnKeyType="search"
          onSubmitEditing={onSearchSubmit}
          clearIcon={showClearIcon}
          value={searchQuery}
        />
        <Text
          style={{color: COLORS.white, fontSize: 16}}
          onPress={navigation.goBack}>
          Hủy
        </Text>
      </LinearGradient>

      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        {searchQuery && searchQuery !== '' ? (
          <View>
            <View>
              <FlatList
                contentContainerStyle={{
                  paddingBottom: 10,
                }}
                showsVerticalScrollIndicator={false}
                maxToRenderPerBatch={3}
                scrollEnabled
                data={dataSearch}
                keyExtractor={() => Math.random().toString(36).substr(2, 9)}
                renderItem={({item}) => (
                  <LocationSearchCard location={item} navigation={navigation} />
                )}
              />
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    height: 35,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: COLORS.white,
  },
  inputSearch: {
    fontSize: 15,
    paddingVertical: 0,
    paddingLeft: 0,
    zIndex: 1,
  },
  searchDropDown: {
    position: 'absolute',
    width: width - 90,
    marginHorizontal: 25,
    paddingTop: 15,
    paddingHorizontal: 15,
    top: 80,
    backgroundColor: COLORS.white,
    zIndex: 100,
    elevation: 4,
  },
  sectionTittle: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    color: COLORS.darkTile,
  },
  sectionTittleSearch: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    color: COLORS.darkTile,
  },
});

export default SearchLocationScreen;
