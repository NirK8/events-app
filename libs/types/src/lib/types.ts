export type EventType =
  | 'openBrowser'
  | 'logout'
  | 'login'
  | 'fileDownload'
  | 'fileUpload';

export enum OS {
  WINDOWS = 'windows',
  MAC = 'mac',
}

export enum SeveretyLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface User {
  name: string;
  email: string;
}
