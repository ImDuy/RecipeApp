import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {Meal} from '../../../api/Type';
import {commonStyle} from '../../../common/CommonStyle';
import {IMAGE, SIZE} from '../../../common/Constant';
import {style} from '../Style';

type Props = {
  mealDetail?: Meal;
};
export default function Body({mealDetail}: Props) {
  const ingredientsItem = [
    {
      ingredient: mealDetail?.strIngredient1 ?? 'Error',
      measure: mealDetail?.strMeasure1 ?? 'Error',
    },
    {
      ingredient: mealDetail?.strIngredient2 ?? 'Error',
      measure: mealDetail?.strMeasure2 ?? 'Error',
    },
    {
      ingredient: mealDetail?.strIngredient3 ?? 'Error',
      measure: mealDetail?.strMeasure3 ?? 'Error',
    },
    {
      ingredient: mealDetail?.strIngredient4 ?? 'Error',
      measure: mealDetail?.strMeasure4 ?? 'Error',
    },
    {
      ingredient: mealDetail?.strIngredient5 ?? 'Error',
      measure: mealDetail?.strMeasure5 ?? 'Error',
    },
    {
      ingredient: mealDetail?.strIngredient6 ?? 'Error',
      measure: mealDetail?.strMeasure6 ?? 'Error',
    },
    {
      ingredient: mealDetail?.strIngredient7 ?? 'Error',
      measure: mealDetail?.strMeasure7 ?? 'Error',
    },
    {
      ingredient: mealDetail?.strIngredient8 ?? 'Error',
      measure: mealDetail?.strMeasure8 ?? 'Error',
    },
  ];
  const renderItems = (item: any) => (
    <View style={[style.bodyItemContainer, commonStyle.mtExtraSmall]}>
      <View style={style.bodyItemImgBg}>
        <Image source={IMAGE.recipeBookmark} style={style.bodyItemImg} />
      </View>

      <Text style={style.bodyItemTitle}>{item.ingredient}</Text>
      <Text style={style.bodyItemSubTitle}>{item.measure}</Text>
    </View>
  );
  return (
    <View style={style.bodyContainer}>
      {/* Body header */}
      <View style={style.bodyTitleContainer}>
        <Text style={style.bodyTitle}>{mealDetail?.strMeal ?? 'Error'}</Text>
        <Image source={IMAGE.avatar} style={style.avatar} />
        <Image source={IMAGE.avatar} style={[style.avatar, style.pushToLeft]} />
        <Image source={IMAGE.avatar} style={[style.avatar, style.pushToLeft]} />
        <Image source={IMAGE.avatar} style={[style.avatar, style.pushToLeft]} />
      </View>
      <View style={style.bodySubTitleContainer}>
        <Text style={[style.subTitle, style.alignSelfEnd]}>
          {mealDetail?.strCategory ?? 'Error'} |{' '}
          {mealDetail?.strArea ?? 'Error'}
        </Text>
        <View>
          <Text style={[style.subTitle, style.textAlignRight]}>4 people</Text>
          <Text style={[style.subTitle, style.textAlignRight]}>
            Already try this!
          </Text>
        </View>
      </View>

      {/* Body Content */}
      {/* Instructions */}
      <View>
        <Text style={style.bodyListTitle}>Instructions</Text>
        <Text
          style={[style.subTitle, style.textAlignJustify, commonStyle.mtSmall]}>
          {mealDetail?.strInstructions ?? 'Error'}
        </Text>
      </View>
      {/* Ingredients */}
      <View>
        <Text style={style.bodyListTitle}>Ingredients</Text>
        <FlatList
          data={ingredientsItem}
          renderItem={({item}) => renderItems(item)}
          scrollEnabled={false}
          contentContainerStyle={[
            commonStyle.mbUltraSmall,
            {paddingHorizontal: SIZE.pdSmall / 2},
          ]}
        />
      </View>
    </View>
  );
}
