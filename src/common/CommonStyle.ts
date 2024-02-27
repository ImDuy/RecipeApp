import {StyleSheet} from 'react-native';
import {COLOR, SIZE} from './Constant';

export const commonStyle = StyleSheet.create({
  screenContainer: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
  mtLarge: {
    marginTop: SIZE.mgLarge,
  },
  mtMedium: {
    marginTop: SIZE.mgMedium,
  },
  mtSmall: {
    marginTop: SIZE.mgSmall,
  },
  mtExtraSmall: {
    marginTop: (SIZE.mgSmall * 2) / 3,
  },
  mtSuperSmall: {
    marginTop: SIZE.mgSmall / 2,
  },
  mtUltraSmall: {
    marginTop: SIZE.mgSmall / 4,
  },
  mbUltraSmall: {
    marginBottom: SIZE.mgSmall / 4,
  },
  pressableText: {
    fontWeight: '700',
    textDecorationLine: 'underline',
    color: COLOR.primary,
  },
  whiteText: {
    color: COLOR.white,
  },
  boldText: {
    fontWeight: '700',
  },
});
