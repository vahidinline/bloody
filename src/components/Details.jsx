import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { useLocation } from 'react-router-dom';
import Maps from './Map';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Navbars from './navbar';

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

const Details = (props) => {
  const location = useLocation();

  console.log(location);
  return (
    <Container>
      <Navbars />
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Grid>
          <Grid>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: 'Lalezar',
                fontSize: '6rem',
                flexWrap: 'wrap',
                textAlign: 'center',
              }}>
              {location.state.row.name}
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img
              src={location.state.row.ImageL}
              alt={location.state.row.name}
            />
          </Grid>
          <Grid
            item
            xs={12}
            m={0}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Typography
              sx={{
                fontFamily: 'Lalezar',
                fontSize: '1rem',
              }}>
              ساله
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Lalezar',
                fontSize: '1rem',
              }}>
              {location.state.row.Age}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontFamily: 'Lalezar',
                fontSize: '1rem',
                textAlign: 'center',
              }}>
              {location.state.row.Cause}
            </Typography>
          </Grid>

          <Grid item xs={12} m={0}>
            <Maps latitude={'35.8439'} longitude={'50.9715'} />
          </Grid>
        </Grid>
        }
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
};

export default Details;