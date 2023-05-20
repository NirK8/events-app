import { SeveretyLevel } from '@events-app/types';
import { ChipProps, Typography, styled as muiStyled } from '@mui/material';
import styled from 'styled-components';

export const TableHeading = muiStyled('div')({
  padding: '1rem',
});

export const severetyColors: Record<SeveretyLevel, ChipProps['color']> = {
  [SeveretyLevel.LOW]: 'primary',
  [SeveretyLevel.MEDIUM]: 'warning',
  [SeveretyLevel.HIGH]: 'error',
};

export const TableTitle = styled(Typography).attrs({
  variant: 'subtitle1',
})`
  &.MuiTypography-root {
    margin-bottom: 10px;
  }
`;
