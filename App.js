import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  NavigationContainer,
  DarkTheme,
  LightTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from './src/views/screens/StartScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import LoginScreen from './src/views/screens/LoginScreen';
import RegisterScreen from './src/views/screens/RegisterScreen';
import PostDetails from './src/views/screens/PostDetailsScreen';
import ImageHotelScreen from './src/views/screens/ImageHotelScreen';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import PanoramaScreen from './src/views/screens/PanoramaScreen';
import SearchHotelScreen from './src/views/screens/SearchHotelScreen';
import SearchLocationScreen from './src/views/screens/SearchLocationScreen';
import BookingConfirmScreen from './src/views/screens/BookingConfirmScreen';
import BookingScreen from './src/views/screens/BookingScreen';
import NewsScreen from './src/views/screens/NewsScreen';
import ViewHotelLocationScreen from './src/views/screens/ViewHotelLocationScreen';
import BookingSuccessScreen from './src/views/screens/BookingSuccessScreen';
import BookingListScreen from './src/views/screens/BookingListScreen';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer style={[styles.container]} theme={LightTheme}>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="ViewHotelLocationScreen" component={ViewHotelLocationScreen} />
        <Stack.Screen name="ImageHotelScreen" component={ImageHotelScreen} />
        <Stack.Screen name="PanoramaScreen" component={PanoramaScreen} />
        <Stack.Screen name="SearchHotelScreen" component={SearchHotelScreen} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="BookingConfirmScreen" component={BookingConfirmScreen} />
        <Stack.Screen name="BookingSuccessScreen" component={BookingSuccessScreen} />
        <Stack.Screen name="BookingListScreen" component={BookingListScreen} />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
