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

const {width, height} = Dimensions.get('screen');

const SearchHotelScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dataSearch, setDataSearch] = useState([]);
  const [dataSearchComplete, setDataSearchComplete] = useState([]);
  const [isCompleteSearch, setIsCompleteSearch] = useState(false);

  const searchHotel = async query => {
    let searchData = new FormData();
    searchData.append('s', query);
    try {
      const res = await hotelAPI.search(searchData);
      setDataSearch(res.data.items);
      // console.log(dataSearch);
    } catch (error) {
      console.log('Error API Search', error);
    }
  };

  const onChangeSearch = query => {
    if (!isCompleteSearch) {
      setSearchQuery(query);
      if (query && query.trim()) {
        searchHotel(query);
      } else {
        setDataSearch([]);
      }
    } else {
      setIsCompleteSearch(false);
    }
  };

  const onAutoCompleteSearch = (valueSearch, dataSearch) => {
    setIsCompleteSearch(true);
    setSearchQuery(valueSearch);
    let arrayData = [];
    arrayData.push(dataSearch);
    setDataSearchComplete(arrayData);
    Keyboard.dismiss();
  };

  const onSearch = () => {
    setIsCompleteSearch(true);
    setDataSearchComplete(dataSearch);
    Keyboard.dismiss();
  };

  const onCancel = () => {
    setIsCompleteSearch(false);
    setSearchQuery('');
    setDataSearch([]);
    setDataSearchComplete([]);
    console.log('Đã touch cancel');
  };

  console.log(searchQuery);

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

  const headerSearch = () => {
    return (
      <Text style={styles.sectionTittleSearch}>
        {dataSearchComplete.length} kết quả tìm kiếm
      </Text>
    );
  };

  console.log(searchQuery);
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
          placeholder="Tên khách sạn"
          onChangeText={onChangeSearch}
          returnKeyType="search"
          onSubmitEditing={onSearch}
          clearIcon={showClearIcon}
          value={searchQuery}
        />
        <Text
          style={{color: COLORS.white, fontSize: 16}}
          onPress={navigation.goBack}>
          Hủy
        </Text>
      </LinearGradient>
      {dataSearch && dataSearch.length !== 0 && !isCompleteSearch && (
        <View evaluate={10} style={styles.searchDropDown}>
          {dataSearch.slice(0, 9).map((dataHotel, index) => (
            <Text
              // onPress={() =>
              //   navigation.navigate('SearchHotelDetailScreen', dataHotel)
              // }
              onPress={() => {
                onAutoCompleteSearch(dataHotel.tenKS, dataHotel);
              }}
              key={index}
              style={{paddingBottom: 20}}>
              {dataHotel.tenKS}
            </Text>
          ))}
        </View>
      )}
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        {dataSearchComplete && dataSearchComplete.length !== 0 ? (
          <View>
            <View>
              <FlatList
                contentContainerStyle={{
                  paddingHorizontal: 15,
                  paddingBottom: 10,
                }}
                showsVerticalScrollIndicator={false}
                maxToRenderPerBatch={3}
                ListHeaderComponent={headerSearch}
                scrollEnabled
                data={dataSearchComplete}
                keyExtractor={() => Math.random().toString(36).substr(2, 9)}
                renderItem={({item}) => (
                  <SearchCard hotel={item} navigation={navigation} />
                )}
              />
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.sectionTittle}>Khách sạn nổi bật </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              {hotelHighlights.map((hotel, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: COLORS.whiteG,
                    marginLeft: 15,
                    marginBottom: 10,
                  }}>
                  <Text
                    onPress={() => navigation.navigate('DetailsScreen', hotel)}
                    style={{padding: 5, fontSize: 12, color: COLORS.darkSub}}>
                    {hotel.tenKS}
                  </Text>
                </View>
              ))}
            </View>
          </View>
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

export default SearchHotelScreen;
