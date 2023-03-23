import React from 'react';
import {StyleSheet, View as RNView} from 'react-native';

import Text from './Text';
import * as Colors from '../config/colors';

/* =============================================================================
<Alert />
============================================================================= */
const Alert = ({style, flex, block, center, title, horizontal, ...props}) => (
  <RNView
    style={[
      styles.container,
      flex && styles.flex,
      block && styles.block,
      center && styles.center,
      horizontal && styles.horizontal,
      style,
    ]}
    {...props}>
    <Text sm semibold center style={styles.txt}>
      {title}
    </Text>
  </RNView>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    marginBottom: 36,
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: Colors.accent,
  },
  txt: {
    color: Colors.danger,
  },
  flex: {
    flex: 1,
  },
  block: {
    width: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

/* Export
============================================================================= */
export default Alert;
