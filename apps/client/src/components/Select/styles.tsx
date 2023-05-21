import { Chip as MuiChip, styled } from '@mui/material';
import { colors } from '../../utils';

export const ChipsContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '400px',
    paddingRight: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    // maxWidth: '400px',
    maxWidth: 'calc(100% - 0.5rem)',
  },
  boxSizing: 'border-box',
  overflowX: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  display: 'flex',
  gap: '.25rem',
}));

export const Chip = styled(MuiChip)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  zIndex: 1,
  backgroundColor: colors.custom.lightGrey,
  borderRadius: '16px',
  '& .MuiSvgIcon-root': {
    margin: '0 0 0 .25rem',
    color: colors.custom.grey,
  },
  '& .MuiChip-label': {
    fontSize: '13px',
    textTransform: 'none',
  },
});
