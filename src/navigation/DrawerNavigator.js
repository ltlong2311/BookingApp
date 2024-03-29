import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/DrawerContent';
import BottomTabNavigator from './BottomTabNavigator';
import SaveListScreen from '../views/screens/SaveListScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
      <Drawer.Screen name="SaveList" component={SaveListScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
