import { FC } from 'react';
import { useQuery } from 'react-query';

import Table from '../components/Table/Table';
import { getEvents } from '../utils';
import usePaginationSearchParams from '../hooks/usePaginationSearchParams';

const EventsPage: FC = () => {
  const { page, setPage } = usePaginationSearchParams();
  const { data } = useQuery(['events', page], getEvents);
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <Table />
    </div>
  );
};

export default EventsPage;
