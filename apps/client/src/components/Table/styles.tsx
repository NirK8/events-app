import { EventType, SeveretyLevel } from '@events-app/types';
import { ChipProps } from '@mui/material';

export const severetyColors: Record<SeveretyLevel, ChipProps['color']> = {
  [SeveretyLevel.LOW]: 'primary',
  [SeveretyLevel.MEDIUM]: 'warning',
  [SeveretyLevel.HIGH]: 'error',
};

export const eventTypeTexts: Record<EventType, string> = {
  [EventType.FILE_DOWNLOAD]: 'File download',
  [EventType.FILE_UPLOAD]: 'File upload',
  [EventType.LOGIN]: 'Login',
  [EventType.LOGOUT]: 'Logout',
  [EventType.OPEN_BROWSER]: 'Open Browser',
};
