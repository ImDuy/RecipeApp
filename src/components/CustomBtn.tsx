import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {style} from './Style';

type Props = {
  title: string;
  style?: ViewStyle;
  onBtnPress?: () => void;
};

export const PrimaryButton = (props: Props) => (
  <TouchableOpacity
    style={[style.primaryBtn, props.style]}
    onPress={props.onBtnPress}>
    <Text style={style.whiteText}>{props.title}</Text>
  </TouchableOpacity>
);

export const OutlineButton = (props: Props) => (
  <TouchableOpacity style={[style.outlineBtn, props.style]}>
    <Text style={style.whiteText}>{props.title}</Text>
  </TouchableOpacity>
);
