import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, Button, Image, Assets, Icon } from 'react-native-ui-lib';

const CustomBottomNavigationBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View row bg-white paddingH-60 paddingV-16>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tabIcoByLabel = (label: string) => {
          switch (label) {
            case 'Class': return "ClassIconFilled";
            case 'Solo': return "SoloIcon";
            case 'Profile': return "UserIcon";
            default: return "HomeIcon";
          }
        }

        return (
          <View
            padding-0
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
          // onLongPress={onLongPress}
          >
            <Image assetGroup='icons' assetName={tabIcoByLabel(label)} />
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default CustomBottomNavigationBar;