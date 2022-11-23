import { Label } from '@mui/icons-material';
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  List,
  MenuItem,
  Select,
  Slider,
  Typography,
  ListItem,
} from '@mui/material';
import { Box } from '@mui/system';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import list from '../data/bloodies';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const [searchAge, setSearchAge] = useState(['20', '50']);
  const [searchLocation, setSearchLocation] = useState('بهارستان، تهران');
  const [Location, setLocation] = useState([]);
  const [DuplicatedLocation, setDuplicatedLocation] = useState([]);
  console.log(Location);
  const [filteredList, setFilteredList] = new useState(list);

  const getLocations = async () => {
    list.map((item) => {
      setDuplicatedLocation((prev) => [...prev, item.Location]);
      setLocation([...new Set(DuplicatedLocation)]);
    });
  };
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
  useEffect(() => {
    getLocations();
  }, []);
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
          <FormControl fullWidth>
            <FormLabel>
              <Typography>{t('detailsLocation.text')}</Typography>
            </FormLabel>
            <Select
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}>
              {Location.map((item, i) => (
                <MenuItem key={i} value={item}>
                  <Typography
                    sx={{
                      justifyContent: 'center',
                      fontFamily: 'Noto Sans Arabic',
                      fontWeight: 'bold',
                    }}>
                    {item}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
