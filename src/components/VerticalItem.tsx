import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMAGE} from '../common/Constant';
import {style} from './Style';
import {commonStyle} from '../common/CommonStyle';

type Props = {
  name: string;
  thumbnail: string;
  description: string;
};
export default function VerticalItem({name, thumbnail, description}: Props) {
  return (
    <View style={[style.verticalItemContainer, commonStyle.mtSmall]}>
      <Image
        source={{uri: thumbnail}}
        style={style.verticalItemImg}
        resizeMode="contain"
      />
      <View style={style.verticalItemTextContainer}>
        <Text style={style.verticalItemTitle}>{name}</Text>
        <Text numberOfLines={2} style={style.verticalItemSubTitle}>
          {description}
        </Text>
      </View>
    </View>
  );
}
