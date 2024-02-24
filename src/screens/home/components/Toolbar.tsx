import {View, Text, Image} from 'react-native';
import React from 'react';
import {TextInputWithIcon} from '../../../components/CustomInput';
import {ICON, IMAGE} from '../../../common/Constant';
import {commonStyle} from '../../../common/CommonStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {style} from '../Style';

export default function Toolbar() {
  return (
    <View style={commonStyle.mtSmall}>
      {/* Search bar */}
      <TextInputWithIcon placeholder="Search Recipes" icon={ICON.search} />
      {/* Reminder */}
      <View style={[style.reminderContainer, commonStyle.mtSmall]}>
        <Image
          source={IMAGE.recipeBookmark}
          resizeMode="stretch"
          style={style.reminderImg}
        />
        <View style={style.reminderTextContainer}>
          <Text style={{}}>You have 12 recipes that you haven't tried yet</Text>
          <TouchableOpacity>
            <Text style={[commonStyle.pressableText, commonStyle.mtSuperSmall]}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
