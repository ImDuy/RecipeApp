import {Image, TextInput, View, ViewStyle} from 'react-native';
import {style} from './Style';
import {ICON} from '../common/Constant';

type Props = {
  customStyle?: ViewStyle;
  placeholder: string;
  icon: any;
};

export const TextInputWithIcon = ({customStyle, placeholder, icon}: Props) => (
  <View style={[style.inputContainer, customStyle]}>
    <Image source={icon} style={style.icon24} />
    <TextInput style={style.input} placeholder={placeholder} />
  </View>
);
