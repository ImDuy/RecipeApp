import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICON, IMAGE} from '../common/Constant';
import {BlurView} from '@react-native-community/blur';
import {style} from './Style';
import {commonStyle} from '../common/CommonStyle';

type Props = {
  id: string;
  name: string;
  thumbnail: string;
  category: string;
  area: string;
  onItemPress?: (id?: string) => void;
};
export default function HorizontalItem({
  id,
  name,
  thumbnail,
  category,
  area,
  onItemPress,
}: Props) {
  return (
    <TouchableOpacity
      style={style.horizontalItemShadow}
      onPress={() => (onItemPress ? onItemPress(id) : undefined)}>
      <Image style={style.itemImgContainer} source={{uri: thumbnail}} />
      <View style={style.itemContentContainer}>
        <BlurView style={style.itemTypeContainer}>
          <Text style={[commonStyle.whiteText, commonStyle.boldText]}>
            {category}
          </Text>
        </BlurView>
        <BlurView style={style.itemTitleContainer}>
          <View style={style.itemTitleTextContainer}>
            <Text style={style.itemTitle}>{name}</Text>
            <Text style={[style.itemSubTitle, commonStyle.mtSuperSmall]}>
              {area}
            </Text>
          </View>
          <Image source={ICON.bookmark} style={style.itemBookmarkIcon} />
        </BlurView>
      </View>
    </TouchableOpacity>
  );
}
