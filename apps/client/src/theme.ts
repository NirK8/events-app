import { createTheme, GlobalStylesProps } from '@mui/material';

import { colors } from './utils';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A90E5',
    },
    warning: {
      main: '#FFB547',
    },
    error: {
      main: '#F06161',
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
        },
        body1: {
          color: 'white',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '22px',
        },
        subtitle1: {
          fontWeight: 400,
          fontSize: '17px',
          lineHeight: '28px',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          maxWidth: '1340px',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '8px',
          maxWidth: '1340px',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `2px solid ${colors.custom.lightBlueGrey}`,
          [theme.breakpoints.up('md')]: {
            'th:first-of-type': {
              paddingLeft: '5rem',
            },
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `2px solid ${colors.custom.lightBlueGrey}`,
        },
        footer: {
          left: 0,
          bottom: 0, // <-- KEY
          zIndex: 2,
          position: 'sticky',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: 'white',
          borderBottom: `2px solid ${colors.custom.darkBlue}`,
          borderTop: `1px solid ${colors.custom.lightBlueGrey}`,
          backgroundColor: colors.custom.darkBlue,
        },
        actions: {
          color: 'white',
          '& .MuiButtonBase-root.Mui-disabled': {
            color: colors.blueGrey[800],
          },
        },
        selectIcon: {
          color: colors.custom.grey,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '23px',
          borderRadius: '8px',
          padding: '3px 8px 4px 8px',
        },
        label: {
          padding: '0',
          fontSize: '11px',
          lineHeight: '16px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          color: 'white',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          [theme.breakpoints.up('sm')]: {
            width: '400px',
          },
          [theme.breakpoints.down('md')]: {
            maxWidth: 'calc(100vw - 1.5rem)',
          },
          boxSizing: 'border-box',
        }),
        icon: {
          color: colors.custom.grey,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.23)',
          },
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.23)',
            },
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.23)',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: colors.custom.grey,
          },
        },
      },
    },
  },
});

export const globalStyles: GlobalStylesProps['styles'] = {
  body: {
    margin: 0,
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: colors.custom.darkBlueGrey,
  },
};

export default theme;
