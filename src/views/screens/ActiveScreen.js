import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const ActiveScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <View>
        <Text>Active</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default ActiveScreen;
