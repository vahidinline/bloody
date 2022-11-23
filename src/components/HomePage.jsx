import { useEffect, useState } from 'react';
import './../App.css';
import { Container } from '@mui/system';
import { Grid, Input, LinearProgress, Paper, Typography } from '@mui/material';
import Tables from './Tables';
import CircleProgressBar from './CircleProgressBar';
import list from '../data/bloodies';
import './../config/i18n';
import { useTranslation } from 'react-i18next';
import Navbars from './navbar';
import { Helmet } from 'react-helmet';

function Home() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [itemsLenth, setItemsLenth] = useState(0);
  const [Location, setLocation] = useState('');
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = new useState(list);

  const getData = async () => {
    setItemsLenth(list.length);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...list];
    updatedList = updatedList.filter((item) => {
      return item.name.indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('hometitle.text')}</title>
      </Helmet>
      <Grid container spacing={2} m={4}></Grid>
      <Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            direction: 'rtl',
          }}>
          <Input placeholder="جستجو" onChange={filterBySearch} />
        </Grid>
        <Tables list={filteredList} search={search} />
      </Grid>
    </>
  );
}

export default Home;
