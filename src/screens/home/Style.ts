import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../../common/Constant';

export const style = StyleSheet.create({
  //Home
  homeContainer: {
    paddingHorizontal: SIZE.pdSmall,
  },

  //Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZE.pdSmall / 2,
  },
  avatarShadow: {
    width: 40,
    height: 40,

    borderRadius: 24,
    shadowColor: COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 24,
    shadowColor: COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: FONT.sizeMedium,
    fontWeight: '600',
    color: COLOR.primary,
  },
  subTitle: {
    color: COLOR.darkGray,
  },

  //Toolbar
  reminderContainer: {
    backgroundColor: COLOR.lightPrimary,
    padding: SIZE.pdSmall,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  reminderImg: {
    width: 80,
    height: 80,
  },
  reminderTextContainer: {
    flexShrink: 1,
  },

  //Trending
  trendingTitle: {
    fontSize: FONT.sizeMedium - 3,
    fontWeight: '800',
  },

  //Category
  categoryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: FONT.sizeMedium - 3,
    fontWeight: '800',
  },
  categorySubTitle: {
    color: COLOR.darkGray,
  },
});
