import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {COLOR, ICON, SCREEN} from '../common/Constant';
import Home from '../screens/home/Home';
import Splash from '../screens/splash/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/search/Search';
import BookMark from '../screens/bookmark/BookMark';
import Setting from '../screens/setting/Setting';
import {Image} from 'react-native';
import TabIcon from '../components/TabIcon';
import Detail from '../screens/detail/Detail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.SPLASH} component={Splash} />
      <Stack.Screen name={SCREEN.TAB} component={TabNavigation} />
      <Stack.Screen name={SCREEN.DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 1,
        height: 56,
      },
    }}>
    <Tab.Screen
      name={SCREEN.HOME}
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <TabIcon focused={focused} icon={ICON.home} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN.SEARCH}
      component={Search}
      options={{
        tabBarIcon: ({focused}) => (
          <TabIcon focused={focused} icon={ICON.search} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN.BOOKMARK}
      component={BookMark}
      options={{
        tabBarIcon: ({focused}) => (
          <TabIcon focused={focused} icon={ICON.bookmark} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN.SETTING}
      component={Setting}
      options={{
        tabBarIcon: ({focused}) => (
          <TabIcon focused={focused} icon={ICON.setting} />
        ),
      }}
    />
  </Tab.Navigator>
);
