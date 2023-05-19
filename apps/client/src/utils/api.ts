import { QueryFunction } from 'react-query';
import { EventsQueryKey } from './types';
import { Event } from '@events-app/types';
import axios from 'axios';

const baseURL = process.env.NX_API_BASE_URL;
console.log(baseURL);

axios.defaults.baseURL = new URL('/api/v1', baseURL as string).href;

export const getEvents: QueryFunction<Event[], EventsQueryKey> = async ({
  queryKey,
}) => {
  const page = queryKey[1] || 1;
  const limit = 12;
  const skip = (page - 1) * limit;
  const response = await axios.get<Event[]>('user-events', {
    params: {
      skip,
      limit,
    },
  });
  return response.data;
};
