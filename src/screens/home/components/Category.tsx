import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useGetCategoriesQuery} from '../../../api/FoodApi';
import {commonStyle} from '../../../common/CommonStyle';
import VerticalItem from '../../../components/VerticalItem';
import {style} from '../Style';

export default function Category() {
  const {data, isLoading} = useGetCategoriesQuery();
  return (
    <View style={commonStyle.mtSmall}>
      <View style={[style.categoryTitleContainer, commonStyle.mbUltraSmall]}>
        <Text style={style.categoryTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={style.categorySubTitle}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data?.categories}
        scrollEnabled={false}
        renderItem={({item}) => (
          <VerticalItem
            key={item.idCategory}
            name={item.strCategory}
            thumbnail={item.strCategoryThumb}
            description={item.strCategoryDescription}
          />
        )}
      />
    </View>
  );
}
