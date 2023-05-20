import { SeveretyLevel } from '@events-app/types';
import { ChipProps } from '@mui/material';

export const severetyColors: Record<string, ChipProps['color']> = {
  [SeveretyLevel.LOW]: 'primary',
  [SeveretyLevel.MEDIUM]: 'warning',
  [SeveretyLevel.HIGH]: 'error',
};
