import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../../common/Constant';

export const style = StyleSheet.create({
  //Header
  headerImg: {
    height: 250,
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: SIZE.pdMedium,
    justifyContent: 'space-between',
  },
  toolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBack: {
    width: 36,
    height: 36,
    tintColor: COLOR.white,
  },
  iconBookmark: {
    width: 36,
    height: 36,
    tintColor: COLOR.primary,
  },
  headerContentContainer: {
    width: '95%',
    padding: SIZE.pdSmall + 3,

    borderRadius: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 32,
  },
  headerTitleContainer: {
    flex: 1,
    flexShrink: 1,
  },
  headerTitle: {
    fontWeight: '700',
    color: COLOR.white,
    marginTop: SIZE.mgSmall / 4,
  },
  headerSubTitle: {
    fontSize: FONT.sizeSmall,
    fontWeight: '200',
    color: COLOR.white,
  },
  iconForward: {
    width: 26,
    height: 26,
    tintColor: COLOR.lightGray,
  },
});
