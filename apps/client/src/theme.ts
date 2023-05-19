import { createTheme, GlobalStylesProps } from '@mui/material';

import { colors } from './utils';

const theme = createTheme({
  palette: {
    primary: {
      main: '#222B36',
    },
    background: {
      default: colors.custom.darkBlue,
      paper: colors.custom.darkBlue,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'white',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '24px',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: '2px solid #3D4752',
        },
      },
    },
  },
});

export const globalStyles: GlobalStylesProps['styles'] = {
  fontFamily: 'Roboto, sans-serif',
};

export default theme;
