import React from 'react';
import {StyleSheet} from 'react-native';

import {Text, Touchable} from '../../../common';
import * as Colors from '../../../config/colors';

/* =============================================================================
<HomeDrawerContentLink />
============================================================================= */
const HomeDrawerContentLink = ({to, title, primary, onPress}) => {
  const _handlePress = () => {
    onPress(to);
  };

  return (
    <Touchable
      style={styles.container}
      android_ripple={{
        color: Colors.ripple,
      }}
      onPress={_handlePress}>
      <Text primary={primary}>{title}</Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 20,
    paddingVertical: 10,
  },
});

/* Export
============================================================================= */
export default HomeDrawerContentLink;
