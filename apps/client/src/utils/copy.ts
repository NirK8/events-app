import { EventType } from '@events-app/types';

export const eventTypeTexts: Record<EventType, string> = {
  [EventType.FILE_DOWNLOAD]: 'File Download',
  [EventType.FILE_UPLOAD]: 'File Upload',
  [EventType.LOGIN]: 'Login',
  [EventType.LOGIN_FAIL]: 'Login Fail',
  [EventType.LOGOUT]: 'Logout',
  [EventType.OPEN_BROWSER]: 'Open Browser',
};
