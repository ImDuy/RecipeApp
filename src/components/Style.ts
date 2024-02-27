import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../common/Constant';

export const style = StyleSheet.create({
  //CustomBtn
  primaryBtn: {
    backgroundColor: COLOR.primary,
    padding: SIZE.pdSmall,
    borderRadius: 8,
  },
  whiteText: {
    color: COLOR.white,
    fontWeight: '700',
    textAlign: 'center',
  },
  outlineBtn: {
    padding: SIZE.pdSmall,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR.primary,
  },

  //TabIcon
  tabIconContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBottomLine: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLOR.primary,
    height: 4,
    width: '60%',
    borderRadius: 8,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabIconSelected: {
    tintColor: COLOR.primary,
  },
  tabIconNotSelected: {
    tintColor: COLOR.gray,
  },

  //CustomInput
  inputContainer: {
    paddingHorizontal: SIZE.pdSmall,
    height: 50,
    backgroundColor: COLOR.lightGray,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZE.pdSmall,
  },
  icon24: {
    width: 24,
    height: 24,
  },
  input: {
    fontSize: (FONT.sizeMedium * 2) / 3,
    flexGrow: 1,
    flexShrink: 1,
  },

  //HorizontalItem
  horizontalItemShadow: {
    padding: SIZE.pdSmall / 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 5,
  },
  itemImgContainer: {
    borderRadius: 20,
    width: 230,
    height: 300,
  },
  itemContentContainer: {
    position: 'absolute',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    top: SIZE.pdSmall / 3,
    left: SIZE.pdSmall / 3,
    padding: SIZE.pdSmall,
  },
  itemTypeContainer: {
    padding: SIZE.pdSmall / 2,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  itemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZE.pdSmall / 2,
    borderRadius: 10,
  },
  itemTitleTextContainer: {width: '80%'},
  itemTitle: {
    fontSize: (FONT.sizeMedium * 2) / 3,
    fontWeight: '700',
    color: COLOR.white,
  },
  itemSubTitle: {
    fontSize: FONT.sizeSmall + 1,
    fontWeight: '500',
    color: COLOR.white,
  },
  itemBookmarkIcon: {
    tintColor: COLOR.primary,
  },

  //VerticalItem
  verticalItemContainer: {
    flexDirection: 'row',
    gap: (SIZE.mgSmall * 3) / 2,
    backgroundColor: COLOR.lightGray,
    paddingVertical: (SIZE.pdSmall * 2) / 3,
    paddingHorizontal: SIZE.pdSmall,
    borderRadius: 10,
  },
  verticalItemImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  verticalItemTextContainer: {
    justifyContent: 'space-evenly',
    flexShrink: 1,
  },
  verticalItemTitle: {
    fontSize: FONT.sizeMedium - 4,
    fontWeight: '600',
  },
  verticalItemSubTitle: {
    fontSize: FONT.sizeSmall + 1,
    fontWeight: '500',
  },
});
