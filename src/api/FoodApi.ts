import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {CategoryApiResponse, MealApiResponse} from './Type';

const url = 'https://www.themealdb.com/api/json/v1/1/';
export const FoodApi = createApi({
  reducerPath: 'FoodAPI',
  baseQuery: fetchBaseQuery({baseUrl: url}),
  endpoints: builder => ({
    getTrendingMeals: builder.query<MealApiResponse, void>({
      query: () => ({
        url: 'search.php?s=a',
      }),
    }),
    getCategories: builder.query<CategoryApiResponse, void>({
      query: () => ({
        url: 'categories.php',
      }),
    }),
  }),
});

export const {useGetTrendingMealsQuery, useGetCategoriesQuery} = FoodApi;
