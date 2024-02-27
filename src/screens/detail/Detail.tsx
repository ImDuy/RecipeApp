import React from 'react';
import {ScrollView} from 'react-native';
import {commonStyle} from '../../common/CommonStyle';
import Body from './components/Body';
import Header from './components/Header';
import {useRoute} from '@react-navigation/native';
import {PropsRoute} from '../../navigation/TypeCheck';
import {useGetMealDetailQuery} from '../../api/FoodApi';
import {Meal} from '../../api/Type';

export default function Detail() {
  const params = useRoute<PropsRoute>().params;
  const mealId = params?.id ?? '';
  const {data, isLoading} = useGetMealDetailQuery(mealId);
  const mealDetail: Meal | undefined = data?.meals[0];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={commonStyle.screenContainer}>
      <Header
        thumbnail={mealDetail?.strMealThumb ?? ''}
        id={mealDetail?.idMeal ?? ''}
        title={mealDetail?.strMeal ?? ''}
      />
      <Body mealDetail={mealDetail} />
    </ScrollView>
  );
}
