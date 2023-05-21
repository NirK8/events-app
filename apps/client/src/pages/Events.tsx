import { FC } from 'react';
import { useQuery } from 'react-query';
import { Box } from '@mui/material';

import Table from '../components/Table/Table';
import { colors, getEvents } from '../utils';
import { useFilters } from '../contexts/Filters';
import { TableHeading, TableTitle } from '../components/Table/styles';
import Select from '../components/Select/Select';

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
      sx={(theme) => ({
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.custom.darkBlue,
        [theme.breakpoints.up('sm')]: {
          margin: '1rem',
        },
        [theme.breakpoints.down('md')]: {
          margin: '.5rem',
        },
      })}
    >
      <TableHeading>
        <TableTitle variant="subtitle1">Events Table</TableTitle>
        <Select />
      </TableHeading>
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
