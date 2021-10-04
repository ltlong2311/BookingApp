import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';
import hotelHighlights from '../../consts/hotelHighlights';
import hotelAPI from '../../API/hotelAPI';

const {width, height} = Dimensions.get('screen');

const SearchHotelDetailScreen = ({navigation, route}) => {
  // console.log(route);
  const valueSearch = route.params;
  console.log(valueSearch);

  const [searchQuery, setSearchQuery] = useState('');
  const [dataSearch, setDataSearch] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const searchHotel = async query => {
    let searchData = new FormData();
    searchData.append('s', query);
    try {
      const res = await hotelAPI.search(searchData);
      setDataSearch(res.data.items);
    } catch (error) {
      console.log('Error API Search', error);
    }
  };

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query && query.trim()) {
      searchHotel(query);
    } else {
      setDataSearch([]);
    }
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
          onIconPress
          onTouchCancel
          clearIcon={() => <MaterialIcons name="cancel" size={18} />}
          defaultValue="Khách sạn A"
        />
        <Text
          style={{color: COLORS.white, fontSize: 16}}
          onPress={navigation.goBack}>
          Hủy
        </Text>
      </LinearGradient>
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View>
          <Text style={styles.sectionTittle}> 5 kết quả </Text>
          {isLoading && (
            <ActivityIndicator size="small" color={COLORS.airForceBlue} />
          )}
        </View>
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
    backgroundColor: COLORS.light,
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
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    color: COLORS.darkTile,
  },
});

export default SearchHotelDetailScreen;
