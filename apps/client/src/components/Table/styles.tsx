import { SeveretyLevel } from '@events-app/types';
import { ChipProps, Typography, styled as muiStyled } from '@mui/material';

export const TableHeading = muiStyled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: '1rem',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0.25rem',
  },
  boxSizing: 'border-box',
}));

export const severetyColors: Record<SeveretyLevel, ChipProps['color']> = {
  [SeveretyLevel.LOW]: 'primary',
  [SeveretyLevel.MEDIUM]: 'warning',
  [SeveretyLevel.HIGH]: 'error',
};

export const TableTitle = muiStyled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  marginBottom: '10px',
}));
