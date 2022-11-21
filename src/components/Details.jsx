import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useLocation } from 'react-router-dom';
import Maps from './Map';
const Details = (props) => {
  const location = useLocation();

  console.log(location);
  return (
    <Container>
      <Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <img src={location.state.row.ImageL} alt={location.state.row.name} />
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
    </Container>
  );
};

export default Details;
