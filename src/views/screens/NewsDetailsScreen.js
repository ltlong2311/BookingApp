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
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const NewsDetailScreen = ({navigation, route}) => {
  const news = route.params;
  const nameNews = news.name.slice(0, 30) + '...';
  return (
    <SafeAreaView style={styles.page}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#41DA', '#22a7f0']}
        style={styles.header}>
        <MaterialIcons
          onPress={() => navigation.goBack()}
          name="arrow-back-ios"
          size={18}
          color={COLORS.white}
        />
        <Text style={{color: COLORS.white, fontWeight: '400', fontSize: 16}}>
          {news.type === '1'
            ? 'Tin tức khách sạn'
            : news.type === '2'
            ? 'Tin du lịch'
            : ''}
        </Text>
      </LinearGradient>
      <ScrollView>
        <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: COLORS.darkTile,
              paddingBottom: 5,
            }}>
            {news.name}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
                color: COLORS.greyLynch,
                paddingBottom: 2,
              }}>
              {news.createDate}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '700',
                color: COLORS.greyLynch,
                paddingBottom: 2,
              }}>
              |{' '}
              {news.type === '1'
                ? 'Khách sạn'
                : news.type === '2'
                ? 'Du lịch'
                : ''}
            </Text>
          </View>
        </View>
        <ImageBackground
          style={{width: width, height: 200}}
          source={{uri: news.imageDetails}}
        />
        <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
          {news.content.split('\n').map((text, index) => (
              <Text
                key={index}
                style={{
                  color: COLORS.darkText,
                  fontSize: 15,
                  fontWeight: '500',
                  marginTop: 10,
                  // textAlign: "justify",
                  lineHeight: 23,
                }}>
                {text}
              </Text>
          ))}
        </View>
      </ScrollView>
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
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sections: {
    flex: 1,
  },
});

export default NewsDetailScreen;
