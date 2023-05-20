import { FC } from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Event } from '@events-app/types';
import { Chip, TableHead } from '@mui/material';
import dayjs from 'dayjs';

import { colors, eventTypeTexts } from '../../utils';
import { TableHeading, TableTitle, severetyColors } from './styles';
import Select from '../Select/Select';

type Props = {
  rows: Event[];
  page: number;
  rowsPerPage: number;
  totalCount: number;
  onPageChanged: (newPage: number) => void;
  onRowsPerPageChanged: (newValue: number) => void;
};

const Table: FC<Props> = ({
  rows,
  page,
  rowsPerPage,
  totalCount,
  onPageChanged,
  onRowsPerPageChanged,
}) => {
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - totalCount) : 0;

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onPageChanged(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onRowsPerPageChanged(parseInt(event.target.value, 10));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: '600px',
      }}
    >
      <MuiTable stickyHeader>
        {/* Table Head */}
        <TableHead>
          <TableRow>
            <TableCell width={'30%'}>
              <Typography>Event Type</Typography>
            </TableCell>
            <TableCell width={'20%'} align="left">
              <Typography>Severety</Typography>
            </TableCell>
            <TableCell width={'25%'} align="left">
              <Typography>User</Typography>
            </TableCell>
            <TableCell width={'25%'} align="left">
              <Typography>Date</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        {/* Table Body */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.user.name + row.user.email + index.toString()}>
              <TableCell component="th" scope="row" width={'30%'}>
                <Typography>{eventTypeTexts[row.eventType]}</Typography>
              </TableCell>
              <TableCell component="th" scope="row" align="left" width={'20%'}>
                <Chip
                  color={severetyColors[row.severity]}
                  label={row.severity}
                />
              </TableCell>
              <TableCell align="left" width={'25%'}>
                <Typography>{row.user.name}</Typography>
                <Typography
                  sx={{
                    color: colors.custom.grey,
                    fontSize: '13px',
                    lineHeight: '20px',
                  }}
                >
                  {row.user.email}
                </Typography>
              </TableCell>
              <TableCell align="left" width={'25%'}>
                <Typography>
                  {dayjs(row.time).format('YYYY/MM/DD | H:mm:ss')}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
          {/* Empty Space for the last page */}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
        {/* Pagination footer */}
        <TableFooter>
          <TableRow
            sx={{
              borderBottom: `2px solid ${colors.custom.darkBlue}`,
            }}
          >
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={4}
              count={totalCount}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
