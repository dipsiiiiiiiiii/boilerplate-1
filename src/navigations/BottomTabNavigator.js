import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import MyProfileStackNavigator from './MyProfileStackNavigator';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="HomeStack" component={HomeStackNavigator} />
      <BottomTab.Screen
        name="MyProfileStack"
        component={MyProfileStackNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
