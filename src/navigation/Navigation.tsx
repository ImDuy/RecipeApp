import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ICON, SCREEN} from '../common/Constant';
import TabIcon from '../components/TabIcon';
import BookMark from '../screens/bookmark/BookMark';
import Detail from '../screens/detail/Detail';
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import Setting from '../screens/setting/Setting';
import Splash from '../screens/splash/Splash';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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

const TabNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: insets.bottom,
          left: 0,
          right: 0,
          height: 56,
          paddingBottom: 0,
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
};
