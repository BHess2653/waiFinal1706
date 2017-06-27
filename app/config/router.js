import React from 'react';
import { TabNavigator } from 'react-native';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Me from '../screens/Me';

export const Tabs = TabNavigator({
  Feed: {
    screen: Feed,
  },
  Me: {
    screen: Me,
  },
});
