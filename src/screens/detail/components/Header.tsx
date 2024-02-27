import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ICON, IMAGE, SIZE, STORAGE_KEY} from '../../../common/Constant';
import {PropsPush} from '../../../navigation/TypeCheck';
import storage, {getBookmarkData} from '../../../storage/Storage';
import {style} from '../Style';
import {BookmarkType} from '../../../api/Type';
import Toast from 'react-native-toast-message';
import {AppDispatch} from '../../../redux/store';
import {useDispatch} from 'react-redux';

export default function Header({thumbnail, title, id}: BookmarkType) {
  const navigation = useNavigation<PropsPush>();
  const dispatch: AppDispatch = useDispatch();

  const onBackPress = () => {
    navigation.pop();
  };
  const onBookmarkPress = () => {
    storage
      .load({key: STORAGE_KEY.bookmark})
      .then((data: BookmarkType[]) => {
        // data store the ref array of data on storage => do not mutate data
        console.log(data);
        const filterData = data.filter(item => item.id == id);
        if (filterData.length == 0) {
          //only save on storage if item not exist in array
          storage.save({
            key: STORAGE_KEY.bookmark,
            data: [...data, {thumbnail, title, id}],
          });
          dispatch(getBookmarkData());
          Toast.show({
            type: 'success',
            text1: 'Bookmark success !',
          });
        }
      })
      .catch(err => {
        console.log('ERROR!!! ', err);
        storage.save({
          key: STORAGE_KEY.bookmark,
          data: [{thumbnail, title, id}],
        });
        dispatch(getBookmarkData());
        Toast.show({
          type: 'success',
          text1: 'Bookmark success !',
        });
      });
  };

  return (
    <View style={{height: SIZE.screenHeight * 0.4}}>
      {/* background img */}
      <Image source={{uri: thumbnail}} style={style.headerImg} />
      {/* content override background */}
      <SafeAreaView style={style.headerSafeArea}>
        <View style={style.headerContainer}>
          <View style={style.toolbarContainer}>
            <TouchableOpacity onPress={onBackPress}>
              <Image source={ICON.back} style={style.iconBack} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onBookmarkPress}>
              <Image source={ICON.bookmark} style={style.iconBookmark} />
            </TouchableOpacity>
          </View>
          <BlurView style={style.headerContentContainer}>
            <Image source={IMAGE.avatar} style={style.avatar} />
            <View style={style.headerTitleContainer}>
              <Text style={style.headerSubTitle}>Recipe by:</Text>
              <Text style={style.headerTitle}>Maria</Text>
            </View>
            <TouchableOpacity>
              <Image source={ICON.forward} style={style.iconForward} />
            </TouchableOpacity>
          </BlurView>
        </View>
      </SafeAreaView>
    </View>
  );
}
