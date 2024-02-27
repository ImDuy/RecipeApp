import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../../common/Constant';

export const style = StyleSheet.create({
  //Header
  headerImg: {
    height: '100%',
    overflow: 'hidden',
    aspectRatio: 3 / 2,
  },
  headerSafeArea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flex: 1,
    paddingBottom: SIZE.pdSmall,
    paddingHorizontal: SIZE.pdMedium,
    justifyContent: 'space-between',
  },
  toolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBack: {
    width: 40,
    height: 40,
    tintColor: COLOR.primary,
  },
  iconBookmark: {
    width: 40,
    height: 40,
    tintColor: COLOR.primary,
  },
  headerContentContainer: {
    width: '95%',
    padding: SIZE.pdSmall + 5,
    borderRadius: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 32,
  },
  headerTitleContainer: {
    flex: 1,
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

  //Body
  bodyContainer: {
    padding: SIZE.pdMedium,
  },
  bodyTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyTitle: {
    fontSize: FONT.sizeMedium,
    fontWeight: '600',
    flex: 1,
    marginRight: 70,
  },
  bodySubTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  pushToLeft: {
    marginLeft: -20,
  },
  subTitle: {
    fontSize: FONT.sizeSmall + 1,
    color: COLOR.darkGray,
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  bodyListTitle: {
    fontSize: FONT.sizeSmall * 1.4,
    fontWeight: '600',
    marginTop: SIZE.mgMedium,
  },
  bodyItemContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  bodyItemImgBg: {
    padding: SIZE.pdSmall / 10,
    backgroundColor: COLOR.lightGray,
  },
  bodyItemImg: {width: 50, height: 50, transform: [{translateX: -1}]},
  bodyItemTitle: {
    flex: 1,
    fontSize: FONT.sizeSmall + 3,
  },
  bodyItemSubTitle: {
    fontSize: FONT.sizeSmall + 3,
  },
});
