import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../common/Constant';

export const style = StyleSheet.create({
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
});
