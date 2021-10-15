import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ForumStackNavigator,
  HomeStackNavigator,
  LocationStackNavigator,
  NewsStackNavigator,
  UserProfileStackNavigator,
} from './StackNavigator';

import LoginScreen from '../views/screens/LoginScreen';
import ActiveScreen from '../views/screens/ActiveScreen';
import UserProfileScreen from '../views/screens/UserProfileScreen';
import NewsScreen from '../views/screens/NewsScreen';
import SaveListScreen from '../views/screens/SaveListScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Location') {
              iconName = focused ? 'compass' : 'compass-outline';
            } else if (route.name === 'Forum') {
              iconName = focused ? 'forum' : 'forum-outline';
            } else if (route.name === 'Active') {
              iconName = focused ? 'airballoon' : 'airballoon-outline';
            } else if (route.name === 'User') {
              iconName = focused ? 'account' : 'account-outline';
            }
            return (
              <MaterialCommunityIcons name={iconName} size={26} color={color} />
            );
          },
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarActiveTintColor: '#42628F',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        })}>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Location" component={LocationStackNavigator} />
        <Tab.Screen name="Forum" component={ForumStackNavigator} />
        <Tab.Screen name="Active" component={NewsStackNavigator} />
        <Tab.Screen name="User" component={UserProfileStackNavigator} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
