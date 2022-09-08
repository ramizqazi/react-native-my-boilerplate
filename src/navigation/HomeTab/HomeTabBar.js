import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, Touchable, Text } from '../../common';
import ActionIconActive from '../../assets/icons/nav-action-icon-active.svg';
import ActionIconInActive from '../../assets/icons/nav-action-icon-inActive.svg';
import SubmitIconActive from '../../assets/icons/nav-submit-icon-active.svg';
import SubmitIconInActive from '../../assets/icons/nav-submit-icon-inActive.svg';
import HistoryIconActive from '../../assets/icons/nav-history-icon-active.svg';
import HistoryIconInActive from '../../assets/icons/nav-history-icon-inActive.svg';
import SettingsIconActive from '../../assets/icons/nav-settings-icon-active.svg';
import SettingsIconInActive from '../../assets/icons/nav-settings-icon-inActive.svg';
import * as Colors from '../../config/colors';

/* =============================================================================
<HomeTabBar />
============================================================================= */
const HomeTabBar = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Touchable
            key={route.name}
            style={styles.item}
            onPress={onPress}
            onLongPress={onLongPress}>
            {isFocused ? ICONS[index][1] : ICONS[index][0]}
            <Text sm style={isFocused ? styles.activeTxt : styles.txt}>
              {route.name.slice(0, (route.name.indexOf('Stack')))}
            </Text>
          </Touchable>
        );
      })}
    </View>
  );
};

const ICONS = {
  0: [
    <ActionIconInActive />,
    <ActionIconActive />,
  ],
  1: [
    <SubmitIconInActive />,
    <SubmitIconActive />
  ],
  2: [
    <HistoryIconInActive />,
    <HistoryIconActive />,
  ],
  3: [
    <SettingsIconInActive />,
    <SettingsIconActive />,
  ],
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  item: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    marginTop: 5,
    color: Colors.placeholder,
  },
  activeTxt: {
    marginTop: 5,
    color: Colors.primary,
  },
});

/* Export
============================================================================= */
export default HomeTabBar;
