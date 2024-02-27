import {View, Text, FlatList} from 'react-native';
import React from 'react';
import HorizontalItem from '../../../components/HorizontalItem';
import {style} from '../Style';
import {commonStyle} from '../../../common/CommonStyle';
import {useGetTrendingMealsQuery} from '../../../api/FoodApi';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../../navigation/TypeCheck';
import {SCREEN} from '../../../common/Constant';

export default function Trending() {
  const {data, isLoading} = useGetTrendingMealsQuery();
  const navigation = useNavigation<PropsPush>();
  const onItemPress = (id?: string) => {
    id ? navigation.push(SCREEN.DETAIL, {id: id}) : undefined;
  };
  return (
    <View style={commonStyle.mtSmall}>
      <Text style={style.trendingTitle}>Trending Recipe</Text>
      <FlatList
        horizontal
        data={data?.meals ?? []}
        renderItem={({item}) => (
          <HorizontalItem
            id={item.idMeal}
            name={item.strMeal}
            thumbnail={item.strMealThumb}
            category={item.strCategory}
            area={item.strArea}
            onItemPress={onItemPress}
          />
        )}
        contentContainerStyle={commonStyle.mtUltraSmall}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
