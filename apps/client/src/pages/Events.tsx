import { FC } from 'react';
import { useQuery } from 'react-query';
import { Box } from '@mui/material';

import Table from '../components/Table/Table';
import { getEvents } from '../utils';
import { useFilters } from '../contexts/Filters';

const EventsPage: FC = () => {
  const { page, setPage, rowsPerPage, setRowsPerPage, eventTypes } =
    useFilters();
  const { data } = useQuery(
    ['events', page, rowsPerPage, eventTypes],
    getEvents,
    {
      keepPreviousData: true,
    }
  );

  const onPageChanged = (newPage: number) => {
    setPage(newPage);
  };

  const onRowsPerPageChanged = (newValue: number) => {
    setRowsPerPage(newValue);
  };

  return (
    <Box
      sx={{
        width: 'auto',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5dvh',
      }}
    >
      <Table
        rows={data?.results || []}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={data?.totalCount || 0}
        onPageChanged={onPageChanged}
        onRowsPerPageChanged={onRowsPerPageChanged}
      />
    </Box>
  );
};

export default EventsPage;
