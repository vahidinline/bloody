import { Button, Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LangContext from '../config/LangContext';
import Navbars from './navbar';
import list from '../data/bloodies';
import CircleProgressBar from './CircleProgressBar';
import { red } from '@mui/material/colors';
import ListOfcities from './ListOfCities';

const Info = () => {
  const { t } = useTranslation();
  const { lange } = useContext(LangContext);
  const [itemsLenth, setItemsLenth] = useState(0);
  useEffect(() => {
    setItemsLenth(list.length);
  }, []);
  return (
    <Grid spacing={24}>
      <Grid item xs={12} md={12} m={3}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontweight: 'bold',
            fontSize: '3.5rem',
            fontFamily: 'Noto Sans Arabic',
            color: '#880808',
          }}>
          {t('hometitle.text')}

          <CircleProgressBar numbers={itemsLenth} />
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            justifyContent: 'justify',
            textAlign: 'center',
            lineHeight: '2rem',
            margin: '30px',
            fontFamily: lange === 'fa' ? 'Noto Sans Arabic' : 'Roboto',
            direction: lange === 'fa' ? 'rtl' : 'ltr',
          }}>
          {t('infotext.text')}
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Button
            variant="contained"
            sx={{
              size: 'large',
              backgroundColor: '#880808',
              color: '#eee',
              fontFamily: 'Noto Sans Arabic',
              fontSize: '1.5rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
            onClick={() => {
              window.location.href = '/home';
            }}>
            {t('infobutton.text')}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Info;
