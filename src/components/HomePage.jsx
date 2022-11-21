import { useEffect, useRef, useState } from 'react';
import './../App.css';
import { Container } from '@mui/system';
import { Grid, Input, LinearProgress, Paper, Typography } from '@mui/material';
import Tables from './Tables';
import CircleProgressBar from './CircleProgressBar';
import list from '../data/bloodies';
import ListOfcities from './ListOfCities';
import Map from './Map';

function Home() {
  const [loading, setLoading] = useState(false);
  const [itemsLenth, setItemsLenth] = useState(0);
  const [Location, setLocation] = useState('');
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = new useState(list);

  const getLocations = async () => {
    list.map((item) => {
      setLocation((prev) => new Set([...prev, item.Location]));
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
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...list];
    updatedList = updatedList.filter((item) => {
      return item.name.indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
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
              <Map />
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
            <ListOfcities cities={Location} />
            <Input placeholder="جستجو" onChange={filterBySearch} />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Tables list={filteredList} search={search} />
      </Grid>
    </Container>
  );
}

export default Home;
