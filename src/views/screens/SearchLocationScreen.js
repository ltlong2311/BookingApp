import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';

const SearchLocationScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#41DA', '#22a7f0']}
        style={styles.header}>
        <MaterialIcons
          onPress={navigation.goBack}
          name="sort"
          size={28}
          color={COLORS.white}/>
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
          Địa điểm
        </Text>
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white}/>
      </LinearGradient>
      <View>
        <ActivityIndicator size="small" color={COLORS.airForceBlue} />
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SearchLocationScreen;
