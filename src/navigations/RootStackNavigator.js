import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthContext from '../contexts/AuthContext';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/public/Login';
import SignupScreen from '../screens/public/Signup';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const {state} = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {state.userToken === null ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      ) : (
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
