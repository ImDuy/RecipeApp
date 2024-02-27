import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParams = {
  SPLASH: undefined;
  TAB: undefined;
  DETAIL: {id: string};
  HOME: undefined;
  SEARCH: undefined;
  BOOKMARK: undefined;
  SETTING: undefined;
};

export type PropsPush = NativeStackNavigationProp<MainStackParams>;
export type PropsRoute = RouteProp<MainStackParams>;
