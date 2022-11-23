import { Label } from '@mui/icons-material';
import {
  Button,
  Divider,
  Grid,
  List,
  Slider,
  Typography,
  ListItem,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import list from '../data/bloodies';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LocatioList from './LocationRemoveDublicate';

const Search = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const [searchAge, setSearchAge] = useState(['20', '50']);
  const [searchLocation, setSearchLocation] = useState('کرج');
  const [filteredList, setFilteredList] = new useState(list);

  const handleChange = (event, newValue) => {
    setSearchAge(newValue);
  };

  const filterByAge = () => {
    setFilteredList(
      list.filter(
        (item) => item.Age >= searchAge[0] && item.Age <= searchAge[1]
      )
    );
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          direction: 'rtl',
        }}>
        <Box sx={{ width: 300 }}>
          <Typography>{t('detailsAge.text')}</Typography>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={searchAge}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
          <LocatioList
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
            onClick={filterByAge}
            fullWidth>
            {t('searchText.text')}
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <List>
          {filteredList.map(
            (row) =>
              row.Location === searchLocation && (
                <Grid
                  onClick={() => {
                    navigate(`/details/${row.id}`, { state: { row } });
                  }}>
                  <ListItem
                    key={row.id}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: 'Noto Sans Arabic',
                        fontWeight: 'bold',
                      }}>
                      {row.name}
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: 'Noto Sans Arabic',
                        fontWeight: 'bold',
                      }}>
                      {t('detailsAge.text')}
                      {row.Age}
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: 'Noto Sans Arabic',
                        fontWeight: 'bold',
                      }}>
                      {t('detailsLocation.text')}
                      {row.Location}
                    </Typography>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </Grid>
              )
          )}
        </List>
      </Grid>
    </Grid>
  );
};

export default Search;
