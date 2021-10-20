import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';
import newsHighlight from '../../consts/newsHighLight';
import news from '../../consts/news';
import HotNewsCard from '../../components/News/HotNewsCard';
import NewsCard from '../../components/News/NewsCard';
const {width, height} = Dimensions.get('screen');

const dataNews = [
  {
    title: 'title',
    data: news,
  },
];

const NewsScreen = ({navigation}) => {
  const headerNews = () => {
    return (
      <>
        {newsHighlight && newsHighlight.length && (
          <View>
            <FlatList
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              horizontal
              pagingEnabled
              data={newsHighlight}
              keyExtractor={() => Math.random().toString(36).substr(2, 9)}
              renderItem={({item}) => (
                <HotNewsCard news={item} navigation={navigation} />
              )}
            />
          </View>
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.page}>
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
          Tin tức
        </Text>
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white}
        />
      </LinearGradient>
      {news && news.length && (
        <SafeAreaView style={styles.sections}>
          <SectionList
            contentContainerStyle={{flexGrow: 1}}
            keyExtractor={() => Math.random().toString(36).substr(2, 9)}
            stickySectionHeadersEnabled={false}
            sections={dataNews}
            renderSectionHeader={headerNews}
            renderItem={({item}) => (
              <NewsCard news={item} navigation={navigation} />
            )}
          />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sections: {
    flex: 1,
  },
});

export default NewsScreen;
