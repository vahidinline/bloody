import { useEffect, useState } from 'react';
import './../App.css';
import { Container } from '@mui/system';
import { Grid, Input, LinearProgress, Paper, Typography } from '@mui/material';
import Tables from './Tables';
import CircleProgressBar from './CircleProgressBar';
import list from '../data/bloodies';
import ListOfcities from './ListOfCities';
import './../config/i18n';
import { useTranslation } from 'react-i18next';
import Navbars from './navbar';

function Home() {
  const { t } = useTranslation();
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
      <Navbars />
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
              }}></Grid>
          )}
        </Grid>
        <Grid xs={12} md={2}>
          <Grid
            sx={{
              marginTop: '120px',
              display: 'contents',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            <CircleProgressBar numbers={itemsLenth} />
            <Typography variant="h6" component="div" gutterBottom>
              {t('hometitle.text')}
            </Typography>

            <Input
              sx={{
                width: '50%',
                marginTop: '20px',
                marginBottom: '20px',
                textAlign: 'center',
                fontFamily: 'Lalezar',
              }}
              placeholder="جستجو"
              onChange={filterBySearch}
            />
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
