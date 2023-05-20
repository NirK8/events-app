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
import { Chip, Skeleton, TableHead } from '@mui/material';
import { colors } from '../../utils';
import { severetyColors } from './styles';

type Props = {
  rows: Event[];
  page: number;
  rowsPerPage: number;
  totalCount: number;
  isLoading?: boolean;
  onPageChanged: (newPage: number) => void;
  onRowsPerPageChanged: (newValue: number) => void;
};

const Table: FC<Props> = ({
  rows,
  page,
  rowsPerPage,
  totalCount,
  isLoading = false,
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
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 500 }} aria-label="custom pagination table">
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
        <TableBody>
          {isLoading &&
            Array.from(Array(rowsPerPage)).map((_value, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <Typography>
                    <Skeleton width={130} height={24} />
                  </Typography>
                </TableCell>
                <TableCell align="right" style={{ width: 160 }}>
                  <Typography>
                    <Skeleton
                      width={150}
                      height={24}
                      sx={{ marginLeft: 'auto' }}
                    />
                  </Typography>
                </TableCell>
                <TableCell align="right" style={{ width: 160 }}>
                  <Typography>
                    <Skeleton
                      width={100}
                      height={24}
                      sx={{ marginLeft: 'auto' }}
                    />
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          {!isLoading &&
            rows.map((row, index) => (
              <TableRow key={row.user.name + row.user.email + index.toString()}>
                <TableCell component="th" scope="row" width={'30%'}>
                  <Typography>{row.eventType}</Typography>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  width={'20%'}
                >
                  <Typography>
                    <Chip
                      color={severetyColors[row.severity]}
                      label={row.severity}
                    />
                  </Typography>
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
                    {new Date(row.time).toLocaleDateString()}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          {!isLoading && emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={4}
              count={!isLoading ? totalCount : 0}
              rowsPerPage={rowsPerPage}
              page={!isLoading ? page : 0}
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
