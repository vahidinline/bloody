import {
  Box,
  Fab,
  Fade,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

const Tables = (props) => {
  const { list, search } = props;
  const navigate = useNavigate();

  console.log(search);
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: '50%',
            direction: 'rtl',
            textAlign: 'center',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
          aria-label="simple table">
          <TableBody>
            {list.map((row) => (
              <TableRow
                sx={{
                  cursor: 'pointer',
                }}
                key={row.id}
                onClick={() => {
                  navigate(`/details/${row.id}`, { state: { row } });
                }}>
                <TableCell
                  sx={{
                    fontFamily: 'Noto Sans Arabic',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                  align="center">
                  {row.name}
                </TableCell>
                {/* <TableCell
                  sx={{
                    fontFamily: 'Noto Sans Arabic',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                  align="center">
                  {row.Age}
                </TableCell> */}

                <TableCell align="center">
                  <img src={row.ImageT} alt={row.name} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Tables;
