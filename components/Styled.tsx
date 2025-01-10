import { XStackProps, YStack } from 'tamagui';
import { Text, TextProps, ThemeProps, useThemeColor } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function ContainerXStack(props: ThemeProps & XStackProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <YStack
      flex={1}
      padding='$4'
      // TODO - Set Font Family globally for Tamagui
      style={[{ backgroundColor }, props.style, { fontFamily: 'SpaceMono' }]}
      {...otherProps}
    />
  );
}
