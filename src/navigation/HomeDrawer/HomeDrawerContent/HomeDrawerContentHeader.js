import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';

import {Avatar, Text, Touchable, View} from '../../../common';

import {getUser} from '../../../auth/redux/selectors';

/* =============================================================================
<HomeDrawerContentHeader />
============================================================================= */
const HomeDrawerContentHeader = ({navigation, user}) => {
  const username = user
    ? `${user.profile.firstName} ${user.profile.lastName}`
    : '';
  const avatar = user?.profile.avatar;
  const alt = user
    ? `${user.profile.firstName[0]}${user.profile.lastName[0]}`
    : '?';

  const _handlePress = () => {
    navigation.navigate('MyProfile');
    navigation.closeDrawer();
  };

  return (
    <Touchable horizontal style={styles.container} onPress={_handlePress}>
      <Avatar alt={alt} size={48} source={{uri: avatar}} />
      <View flex style={styles.content}>
        <Text lg bold numberOfLines={1}>
          {username}
        </Text>
        <Text sm primary>
          View Profile
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginVertical: 32,
  },
  content: {
    paddingLeft: 12,
    paddingRight: 24,
  },
});

const mapStateToProps = state => ({
  user: getUser(state),
});

/* Export
============================================================================= */
export default connect(mapStateToProps)(HomeDrawerContentHeader);
