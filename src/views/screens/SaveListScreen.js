import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';
import SearchCard from '../../components/Hotel/SearchCard';
import AsyncStore from '@react-native-async-storage/async-storage';
import SaveCard from '../../components/Hotel/SaveCard';

const {width, height} = Dimensions.get('screen');

const SaveListScreen = ({navigation}) => {
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    getValue('hotelSaveList');
  }, []);
  const getValue = async key => {
    const result = await AsyncStore.getItem(key);
    setHotelList(JSON.parse(result));
  };
  return (
    <SafeAreaView style={styles.background}>
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
          Khách sạn đã lưu
        </Text>
        <MaterialCommunityIcons
          onPress={() => navigation.navigate('SearchHotelScreen')}
          name="domain-plus"
          size={25}
          color={COLORS.white}
        />
      </LinearGradient>
      <View style={styles.slider}>
        <View>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: 15,
              paddingBottom: 10,
            }}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={3}
            scrollEnabled
            data={hotelList}
            keyExtractor={() => Math.random().toString(36).substr(2, 9)}
            renderItem={({item}) => (
              <SaveCard hotel={item} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default SaveListScreen;
