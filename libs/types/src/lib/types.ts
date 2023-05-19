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

export interface Event {
  user: User;
  os: OS;
  eventType: EventType;
  severity: SeveretyLevel;
  time: string;
}

export interface Pagination {
  skip: number;
  limit: number;
}

export type ApiResponse<T = unknown> = {
  results: T[];
  totalCount: number;
  next?: Pagination;
};
