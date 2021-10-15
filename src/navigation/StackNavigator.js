import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/screens/HomeScreen';
import LocationScreen from '../views/screens/LocationScreen';
import LocationDetailsScreen from '../views/screens/LocationDetailsScreen';
import ForumScreen from '../views/screens/ForumScreen';
import SearchLocationScreen from '../views/screens/SearchLocationScreen';
import UserProfileEditScreen from '../views/screens/UserProfileEditScreen';
import UserProfileScreen from '../views/screens/UserProfileScreen';
import SaveListScreen from '../views/screens/SaveListScreen';
import NewsScreen from '../views/screens/NewsScreen';
import NewsDetailScreen from '../views/screens/NewsDetailsScreen';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const LocationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
      <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
      <Stack.Screen
        name="SearchLocationScreen"
        component={SearchLocationScreen}
      />
    </Stack.Navigator>
  );
};
const ForumStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ForumScreen" component={ForumScreen} />
    </Stack.Navigator>
  );
};
const NewsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
      <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
};

const UserProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="UserProfileEdit" component={UserProfileEditScreen} />
      <Stack.Screen name="SaveList" component={SaveListScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  LocationStackNavigator,
  ForumStackNavigator,
  UserProfileStackNavigator,
  NewsStackNavigator,
};
