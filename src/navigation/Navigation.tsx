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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.SPLASH} component={Splash} />
      <Stack.Screen name={SCREEN.HOME} component={TabNavigation} />
    </Stack.Navigator>
  );
}

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={SCREEN.HOME}
      component={Home}
      options={{
        tabBarIcon: () => (
          <Image source={ICON.home} style={{tintColor: COLOR.primary}} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN.SEARCH}
      component={Search}
      options={{
        tabBarIcon: () => (
          <Image source={ICON.search} style={{tintColor: COLOR.primary}} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN.BOOKMARK}
      component={BookMark}
      options={{
        tabBarIcon: () => (
          <Image source={ICON.bookmark} style={{tintColor: COLOR.primary}} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN.SETTING}
      component={Setting}
      options={{
        tabBarIcon: () => (
          <Image source={ICON.setting} style={{tintColor: COLOR.primary}} />
        ),
      }}
    />
  </Tab.Navigator>
);
