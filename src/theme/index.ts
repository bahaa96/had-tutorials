import { Typography, Colors, Spacings, ThemeManager, Assets } from 'react-native-ui-lib';

export const initTheme = () => {
  Colors.loadSchemes({
    light: {
      primary: '#E86256',
      surface: '#F8F8F8',
      secondary: '#79ABB2',
      textPrimary: '#E86256',
      textColor: '#4E4E4E',
      textInverse: '#fff',
    },
    dark: {
      primary: '#E86256',
      surface: '#F8F8F8',
      secondary: '#79ABB2',
      textPrimary: '#E86256',
      textColor: '#fff',
      textInverse: '#4E4E4E',
    }
  });


  ThemeManager.setComponentTheme('Text', (props) => ({
    color: Colors.textColor,
    color: props.color,
  }));


  Typography.loadTypographies({
    h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
    h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
    h5: { fontSize: 12 },
    light: {  fontWeight: '300'}, 
    badge: { fontSize: 10, fontWeight: '700', letterSpacing: 0.125 },
    bold: { fontWeight: '700' },
    semiBold: { fontWeight: '500' },
  });

  Spacings.loadSpacings({
    //   page: isSmallScreen ? 12 : 14
  });

  Assets.loadAssetsGroup('icons', {
    ClassIconFilled: require('../assets/icons/class-icon-filled.png'),
    HomeIcon: require('../assets/icons/home-icon.png'),
    SoloIcon: require('../assets/icons/solo-icon.png'),
    UserIcon: require('../assets/icons/user-icon.png'),
  });
}