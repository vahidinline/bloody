import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useLocation } from 'react-router-dom';
import Maps from './Map';
import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

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

const Details = (props) => {
  const location = useLocation();

  const { t } = useTranslation();
  console.log(location);
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{location.state.row.name}</title>
      </Helmet>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Grid>
          <Grid>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: 'Noto Sans Arabic',
                fontSize: '4rem',
                flexWrap: 'wrap',
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: '1rem',
                marginBottom: '1rem',
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
                fontFamily: 'Noto Sans Arabic',
                fontSize: '1rem',
              }}></Typography>
            <Typography
              sx={{
                fontFamily: 'Noto Sans Arabic',
                fontSize: '1rem',
              }}>
              {t('detailsAge.text')}
              {location.state.row.Age === 'نامشخص'
                ? `نامشخص`
                : location.state.row.Age}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontFamily: 'Noto Sans Arabic',
                fontSize: '1rem',
                textAlign: 'center',
              }}>
              {t('detailsCause.text')}
              {location.state.row.Cause}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontFamily: 'Noto Sans Arabic',
                fontSize: '1rem',
                textAlign: 'center',
              }}>
              {t('detailsDate.text')}
              {location.state.row.Date}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontFamily: 'Noto Sans Arabic',
                fontSize: '1rem',
                textAlign: 'center',
              }}>
              {t('detailsLocation.text')}
              {location.state.row.Location}
            </Typography>
          </Grid>
          <Grid item xs={12} m={0}>
            <Maps latitude={'35.8439'} longitude={'50.9715'} />
            {/* I'd like to pass the real latitude and longitude in the next round */}
          </Grid>
        </Grid>
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
