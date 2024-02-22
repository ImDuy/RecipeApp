import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLOR, IMAGE, SCREEN, TEXT} from '../../common/Constant';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './Style';
import {OutlineButton, PrimaryButton} from '../../components/CustomBtn';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../navigation/TypeCheck';

export default function Splash() {
  const navigation = useNavigation<PropsPush>();

  const onBtnPress = () => {
    navigation.push(SCREEN.HOME);
  };
  return (
    <View style={style.container}>
      <Image source={IMAGE.backgroundSplashScreen} resizeMode="repeat" />
      <LinearGradient
        style={style.bgOverride}
        colors={[COLOR.transparent, COLOR.black]}>
        <View style={style.contentContainer}>
          <Text style={style.title}>Cooking a Delicious Food Easily</Text>
          <Text style={style.subTitle}>
            Discover more than 1200 food recipes in your hands and cooking it
            easily
          </Text>
          <PrimaryButton
            style={style.mtLarge}
            title={TEXT.LOGIN}
            onBtnPress={onBtnPress}
          />
          <OutlineButton style={style.mtSmall} title={TEXT.SIGNUP} />
        </View>
      </LinearGradient>
    </View>
  );
}
