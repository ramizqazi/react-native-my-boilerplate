import React from 'react';
import RNSplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import AuthStack from '../auth/screens/AuthStack';
// import HomeTab from './HomeTab/index';
import * as Colors from '../config/colors';
import {View, Text} from '../common';

const Stack = createNativeStackNavigator();

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  const _handleOnReady = () => {
    // Hide splash screen
    RNSplashScreen.hide();
  };

  return (
    <NavigationContainer theme={THEME} onReady={_handleOnReady}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="EMPTY_SCREEN" component={EMPTY_SCREEN} />
        {/* <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeTab" component={HomeTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const EMPTY_SCREEN = () => (
  <View center flex>
    <Text>EMPTY_SCREEN Boilerplate project ready to be customized</Text>
  </View>
);

const THEME = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: Colors.white,
    text: Colors.black,
    border: Colors.outline,
    notification: Colors.accent,
  },
};

/* Export
============================================================================= */
export default AppNavigation;
