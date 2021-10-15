import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const SaveListScreen = ({navigation}) => {
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
          Danh sách lưu trữ
        </Text>
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white}
        />
      </LinearGradient>
      <View style={styles.slider}>
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
