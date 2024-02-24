import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ICON, IMAGE} from '../../../common/Constant';
import {PropsPush} from '../../../navigation/TypeCheck';
import {style} from '../Style';

export default function Header() {
  const navigation = useNavigation<PropsPush>();
  const onBackPress = () => {
    navigation.pop();
  };
  return (
    <View>
      {/* background img */}
      <Image
        source={IMAGE.backgroundSplashScreen}
        style={style.headerImg}
        resizeMode="cover"
      />
      {/* content override background */}
      <View style={style.headerContainer}>
        <View style={style.toolbarContainer}>
          <TouchableOpacity onPress={onBackPress}>
            <Image source={ICON.back} style={style.iconBack} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ICON.bookmark} style={style.iconBookmark} />
          </TouchableOpacity>
        </View>
        <BlurView style={style.headerContentContainer}>
          <Image source={IMAGE.avatar} style={style.avatar} />
          <View style={style.headerTitleContainer}>
            <Text style={style.headerSubTitle}>Recipe by:</Text>
            <Text style={style.headerTitle}>Maria</Text>
          </View>
          <TouchableOpacity>
            <Image source={ICON.forward} style={style.iconForward} />
          </TouchableOpacity>
        </BlurView>
      </View>
    </View>
  );
}
