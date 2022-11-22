import { Button, Grid, Typography } from '@mui/material';
import { use } from 'i18next';
import { useEffect, useState } from 'react';
import list from '../data/bloodies';

const ListOfcities = (props) => {
  const [Location, setLocation] = useState('');
  const getLocations = async () => {
    list.map((item) => {
      setLocation((prev) => new Set([...prev, item.Location]));
    });
  };

  const showList = () => {
    Location.map((item) => {
      return <Button variant="contained">{item}</Button>;
    });
  };
  useEffect(() => {
    getLocations();
  }, []);
  return (
    <Grid>
      <Button onClick={showList}>
        <Typography>Hi</Typography>
      </Button>
      {}
    </Grid>
  );
};

export default ListOfcities;
