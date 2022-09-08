import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeTab from '../HomeTab';
import HomeDrawerContent from './HomeDrawerContent';

const Drawer = createDrawerNavigator();

/* =============================================================================
<HomeDrawer />
============================================================================= */
const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={renderDrawerContent}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeTab} />
    </Drawer.Navigator>
  );
};

const renderDrawerContent = props => <HomeDrawerContent {...props} />;

/* Export
============================================================================= */
export default HomeDrawer;
