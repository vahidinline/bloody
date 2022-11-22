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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
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
          sx={{ minWidth: '100%', direction: 'rtl', textAlign: 'center' }}
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
                    fontFamily: 'Lalezar',
                  }}
                  align="center">
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: 'Lalezar',
                  }}
                  align="center">
                  {row.Age}
                </TableCell>

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
