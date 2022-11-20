import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
const Tables = (props) => {
  const { list } = props;
  const [Location, setLocation] = React.useState([]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Cause</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(
            (row) =>
              row.Location === Location && (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.Age}</TableCell>
                  <TableCell align="right">{row.Location}</TableCell>
                  <TableCell align="right">{row.Cause}</TableCell>
                  <TableCell align="right">{row.Date}</TableCell>
                  <TableCell align="right">
                    <img src={row.ImageT} alt={row.name} />
                  </TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
