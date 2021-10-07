import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  // StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {WebView} from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const NewsScreen = ({navigation}) => {
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
          Tin tức - sự kiện
        </Text>
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white} />
      </LinearGradient>
      <View style={styles.slider}>
        <WebView
          style={{flex: 1}}
          source={{
            uri: 'https://timkiem.vnexpress.net/?q=kh%C3%A1ch%20s%E1%BA%A1n',
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
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

export default NewsScreen;
