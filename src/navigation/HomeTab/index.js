import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTabBar from './HomeTabBar';
import ActionScreen from '../../action/screens/ActionScreen';
import SubmitScreen from '../../submit/screens/SubmitScreen';
import HistoryScreen from '../../history/screens/HistoryScreen';
import SettingsScreen from '../../settings/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

/* =============================================================================
<HomeTab />
============================================================================= */
const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
      <Tab.Screen name="ActionStack" component={ActionScreen} />
      <Tab.Screen name="SubmitStack" component={SubmitScreen} />
      <Tab.Screen name="HistoryStack" component={HistoryScreen} />
      <Tab.Screen name="SettingsStack" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const renderTabBar = props => <HomeTabBar {...props} />;

/* Export
============================================================================= */
export default HomeTab;
