import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppIntroScreen from './AppIntroScreen';
import WelcomeScreen from './WelcomeScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';

/* =============================================================================
<AuthStack />
============================================================================= */
const AuthStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="AppIntro" component={AppIntroScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

/* Export
============================================================================= */
export default AuthStack;
