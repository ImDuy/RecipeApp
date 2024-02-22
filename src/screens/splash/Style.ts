import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../../common/Constant';

export const style = StyleSheet.create({
  mtLarge: {
    marginTop: SIZE.mgLarge,
  },
  mtSmall: {
    marginTop: SIZE.mgSmall,
  },

  container: {
    flex: 1,
  },
  bgOverride: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    height: 400,
    padding: SIZE.pdLarge,
  },
  title: {
    color: COLOR.white,
    fontSize: FONT.sizeLarge,
    fontWeight: '700',
  },
  subTitle: {
    color: COLOR.gray,
    marginTop: SIZE.mgSmall,
  },
});
