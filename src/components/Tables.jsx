import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import React from 'react';

const Tables = (props) => {
  const { list, search } = props;
  const navigate = useNavigate();

  console.log(search);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>

              <TableCell align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => {
                  navigate(`/details/${row.id}`, { state: { row } });
                }}>
                <TableCell
                  sx={{
                    fontFamily: 'Lalezar',
                  }}
                  align="right">
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: 'Lalezar',
                  }}
                  align="right">
                  {row.Age}
                </TableCell>

                <TableCell align="right">
                  <img src={row.ImageT} alt={row.name} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;
