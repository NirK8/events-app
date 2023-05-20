import { QueryFunction } from 'react-query';
import { EventsQueryKey } from './types';
import { ApiResponse, Event } from '@events-app/types';
import axios from 'axios';

const baseURL = process.env.NX_API_BASE_URL;
console.log(baseURL);

axios.defaults.baseURL = new URL('/api/v1', baseURL as string).href;

export const getEvents: QueryFunction<
  ApiResponse<Event>,
  EventsQueryKey
> = async ({ queryKey }) => {
  const page = queryKey[1] || 0;
  const rowsPerPage = queryKey[2] || 5;
  const limit = rowsPerPage;
  const skip = page * limit;
  const response = await axios.post<ApiResponse<Event>>('user-events', {
    skip,
    limit,
  });
  return response.data;
};
