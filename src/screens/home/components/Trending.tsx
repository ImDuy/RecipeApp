import {View, Text, FlatList} from 'react-native';
import React from 'react';
import FoodItem from '../../../components/HorizontalItem';
import {style} from '../Style';
import {commonStyle} from '../../../common/CommonStyle';
import {useGetTrendingMealsQuery} from '../../../api/FoodApi';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../../navigation/TypeCheck';
import {SCREEN} from '../../../common/Constant';

export default function Trending() {
  const {data, isLoading} = useGetTrendingMealsQuery();
  const navigation = useNavigation<PropsPush>();
  const onItemPress = () => {
    navigation.push(SCREEN.DETAIL, {thumbnail: data?.meals[0].strMealThumb});
  };
  return (
    <View style={commonStyle.mtSmall}>
      <Text style={style.trendingTitle}>Trending Recipe</Text>
      <FlatList
        horizontal
        data={data?.meals ?? []}
        renderItem={({item}) => (
          <FoodItem
            name={item.strMeal}
            thumbnail={item.strMealThumb}
            category={item.strCategory}
            area={item.strArea}
            onItemPress={onItemPress}
          />
        )}
        style={commonStyle.mtUltraSmall}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
