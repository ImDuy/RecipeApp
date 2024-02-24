import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from '../Style';
import {COLOR, IMAGE} from '../../../common/Constant';

export default function Header() {
  return (
    <View style={style.headerContainer}>
      <View>
        <Text style={style.title}>Hello ByProgrammers,</Text>
        <Text style={style.subTitle}>What you want to cook today?</Text>
      </View>
      <View style={style.avatarShadow}>
        <Image source={IMAGE.avatar} style={style.avatar} />
      </View>
    </View>
  );
}
