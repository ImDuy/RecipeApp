import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BookmarkType} from '../../api/Type';
import storage, {getBookmarkData} from '../../storage/Storage';
import {STORAGE_KEY} from '../../common/Constant';
import VerticalItem from '../../components/VerticalItem';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';

export default function BookMark() {
  const listData = useSelector(
    (state: RootState) => state.bookmark.bookmarkList,
  );

  console.log('bookmarkPage', listData);
  // const [listData, setListData] = useState<BookmarkType[]>([]);
  // const getBookmarkData = async () => {
  //   return await storage.load({key: STORAGE_KEY.bookmark});
  // };
  // useEffect(() => {
  //   getBookmarkData().then(data => {
  //     setListData(data);
  //     console.log(data);
  //   });
  // }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        {listData.map((item, index) => (
          <VerticalItem
            key={index}
            name={item.title}
            thumbnail={item.thumbnail}
            description={item.title}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
