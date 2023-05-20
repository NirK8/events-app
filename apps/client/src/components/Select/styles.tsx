import { Chip as MuiChip, styled } from '@mui/material';
import { colors } from '../../utils';

export const ChipsContainer = styled('div')({
  maxWidth: '400px',
  overflowX: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  display: 'flex',
  gap: '.25rem',
  paddingRight: '2rem',
});

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
