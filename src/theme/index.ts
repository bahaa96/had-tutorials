import { Typography, Colors, Spacings, ThemeManager } from 'react-native-ui-lib';

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


  ThemeManager.setComponentTheme('Text', (props, context) => ({
    color: Colors.textColor,
    color: props.color,
  }));


  Typography.loadTypographies({
    h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
    h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
    bold: { fontWeight: '700' },
    semiBold: { fontWeight: '500' },
  });

  Spacings.loadSpacings({
    //   page: isSmallScreen ? 12 : 14
  });
}