import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from '../common/components/Icon';
import {colors, routes as r} from '../common/constants';
import useTheme from '../common/hooks/useTheme';
import Archived from '../archived/Archived';
import Favorites from '../favorites/Favorites';
import Home from '../home/Home';

const routes = [
  {
    name: r.home,
    component: Home,
    icon: {
      name: 'notes',
      type: 'MaterialIcons',
    },
  },
  {
    name: r.favorites,
    component: Favorites,
    icon: {
      name: 'bookmark-outline',
      type: 'MaterialCommunityIcons',
    },
  },
  {
    name: r.archived,
    component: Archived,
    icon: {
      size: 33,
      name: 'archive',
      type: 'EvilIcons',
    },
  },
];

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        ...theme.tabBarOptions,
        tabBarShowLabel: false,
      }}>
      {routes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                size={28}
                {...route.icon}
                color={focused ? colors.primary : theme.primaryText}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
