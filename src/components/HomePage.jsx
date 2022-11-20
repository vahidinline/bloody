import { useEffect, useState } from 'react';
import './../App.css';
import { Container } from '@mui/system';
import { Grid, LinearProgress, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Tables from './Tables';
import CircleProgressBar from './CircleProgressBar';
import list from '../data/bloodies';
import ListOfcities from './ListOfCities';
function Home() {
  const [loading, setLoading] = useState(false);
  const [itemsLenth, setItemsLenth] = useState(0);
  const [Location, setLocation] = useState('');
  const [uniqueLocation, setUniqueLocation] = useState('');

  const getLocations = async () => {
    list.map((item) => {
      setLocation((prev) => [...prev, item.Location]);
      //console.log([...new Set(Location)]);
      setUniqueLocation(new Set(Location));
      //console.log(uniqueLocation);
    });
  };

  const getData = async () => {
    setItemsLenth(list.length);
    getLocations();
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  function Item(props) {
    return (
      <Paper
        style={{
          height: '100%',

          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <img
          style={{ width: '50%', height: '50%' }}
          src={props.item.ImageL}
          alt={props.item.name}
        />
        <h2>{props.item.name}</h2>
      </Paper>
    );
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          {loading ? (
            <Grid
              sx={{
                width: '70%',
                margin: 'auto',
                marginTop: '120px',
              }}>
              <LinearProgress />
            </Grid>
          ) : (
            <Grid
              sx={{
                width: '100%',
                margin: 'auto',
                marginTop: '120px',
              }}>
              <Carousel indicators={false} navButtonsAlwaysInvisible={true}>
                {list.map((item, i) => (
                  <>
                    <Item key={i} item={item} />
                  </>
                ))}
              </Carousel>
            </Grid>
          )}
        </Grid>
        <Grid xs={12} md={2}>
          <Grid
            sx={{
              marginTop: '120px',
            }}>
            <Typography>تعداد قربانیان</Typography>

            <CircleProgressBar numbers={itemsLenth} />
            <ListOfcities cities={uniqueLocation} />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Tables list={list} />
      </Grid>
    </Container>
  );
}

export default Home;
