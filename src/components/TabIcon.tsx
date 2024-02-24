import React from 'react';
import {Image, View} from 'react-native';
import {style} from './Style';

type Props = {
  focused: boolean;
  icon: any;
};

export default function TabIcon({focused, icon}: Props) {
  return (
    <View style={style.tabIconContainer}>
      <Image
        source={icon}
        style={[
          style.tabIcon,
          focused ? style.tabIconSelected : style.tabIconNotSelected,
        ]}
      />
      {focused && <View style={style.tabBottomLine} />}
    </View>
  );
}
