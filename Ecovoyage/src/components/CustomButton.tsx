import { PropsWithChildren } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  DimensionValue,
} from 'react-native';
import { primary, secondary, secondary_100 } from '../commonStyles/colors';
import typography from '../commonStyles/Typography';

interface MainButtonProps {
  title?: string;
  bgColor?: 'secondary';
  onPress?: () => void;
  enabled?: boolean;
  style?: StyleProp<ViewStyle>;
  noPadding?: boolean;
  inline?: boolean;
}

const CustomButton = ({
  title = 'Button',
  style,
  bgColor = 'secondary',
  onPress,
  enabled = true,
  noPadding = false,
  inline = true,
}: PropsWithChildren<MainButtonProps>) => {
  const background = styles[bgColor];

  return (
    <View style={[styles.wrapper, style]}>
      <TouchableOpacity
        activeOpacity={0.6}
        disabled={!enabled}
        style={[
          styles.button,
          background,
          !inline ? { width: '100%' } : null,
          noPadding ? { paddingHorizontal: 0, paddingVertical: 0 } : null,
        ]}
        onPress={() => (enabled && onPress ? onPress() : null)}>
          <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inlineWrapper: {
    flexDirection: 'column',
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
  },
  children: {
    justifyContent: 'center',
  },
  text: {
    ...typography.h3,
    color: primary,
    fontWeight: '500'
  },
  secondary: {
    backgroundColor: secondary,
  },
});
