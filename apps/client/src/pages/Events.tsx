import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Box } from '@mui/material';

import Table from '../components/Table/Table';
import { colors, getEvents } from '../utils';

const EventsPage: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const { data, isLoading } = useQuery(
    ['events', page, rowsPerPage],
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
        borderRadius: '8px',
        bgcolor: colors.custom.lightGrey,
      }}
    >
      <Table
        rows={data?.results || []}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={data?.totalCount || 0}
        isLoading={isLoading}
        onPageChanged={onPageChanged}
        onRowsPerPageChanged={onRowsPerPageChanged}
      />
    </Box>
  );
};

export default EventsPage;
