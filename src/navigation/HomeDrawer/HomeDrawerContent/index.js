import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDrawerStatus} from '@react-navigation/drawer';
import {View} from '../../../common';
import HomeDrawerContentLink from './HomeDrawerContentLink';
import HomeDrawerContentHeader from './HomeDrawerContentHeader';
import * as Colors from '../../../config/colors';
import {analytics} from '../../../config/analytics';

import {logout as logoutAction} from '../../../auth/redux/actions';

/* =============================================================================
<HomeDrawerContent />
============================================================================= */
const HomeDrawerContent = ({navigation, logout}) => {
  const insets = useSafeAreaInsets();
  const status = useDrawerStatus();

  // track analytics
  useEffect(() => {
    if (status === 'open') {
      analytics.track('Drawer Opened');
    }
  }, [status]);

  const _handleLinkPress = to => screen => {
    if (to) {
      navigation.navigate(to, {screen});
    } else {
      navigation.navigate(screen);
    }
    navigation.closeDrawer();
  };

  const _handleLogoutPress = () => {
    navigation.closeDrawer();
    logout();
    analytics.track('Logout Clicked');
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom + 32},
      ]}>
      <HomeDrawerContentHeader navigation={navigation} />
      <View flex>
        <HomeDrawerContentLink
          to="Street"
          title="Home"
          onPress={_handleLinkPress()}
        />
        {/* <HomeDrawerContentLink
          to="Notifications"
          title="Notifications"
          onPress={_handleLinkPress()}
        /> */}
        <HomeDrawerContentLink
          to="Bookings"
          title="Booking"
          onPress={_handleLinkPress()}
        />
        <HomeDrawerContentLink
          to="CurrentOrders"
          title="Track Order"
          onPress={_handleLinkPress('Orders')}
        />
        <HomeDrawerContentLink
          to="OrderHistory"
          title="Order History"
          onPress={_handleLinkPress('Orders')}
        />
        <HomeDrawerContentLink
          to="MyAddress"
          title="Address Book"
          onPress={_handleLinkPress('Settings')}
        />
        <HomeDrawerContentLink
          to="PaymentMethods"
          title="Payment Methods"
          onPress={_handleLinkPress()}
        />
        {/* <HomeDrawerContentLink
          to="GiftAddress"
          title="Gift Address Book"
          onPress={_handleLinkPress("Settings")}
        /> */}
      </View>
      <HomeDrawerContentLink
        title="Logout"
        primary
        onPress={_handleLogoutPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

const mapDispatchToProps = {
  logout: logoutAction,
};

/* Export
============================================================================= */
export default connect(null, mapDispatchToProps)(HomeDrawerContent);
