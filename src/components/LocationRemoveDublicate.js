import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import locationList from '../data/Location';
import { useTranslation } from 'react-i18next';

const LocatioList = (props) => {
  //   const [Location, setLocation] = useState(['']);
  console.log(Location);
  //   const [DuplicatedLocation, setDuplicatedLocation] = useState([]);
  const { t } = useTranslation();
  //   const getLocations = async () => {
  //     list.map((item) => {
  //       return (
  //         setDuplicatedLocation((prev) => [...prev, item.Location]) +
  //         setLocation([...new Set(DuplicatedLocation)])
  //       );
  //     });
  //   };

  //   useEffect(() => {
  //     getLocations();
  //   }, []);
  return (
    <FormControl fullWidth>
      <FormLabel>
        <Typography>{t('detailsLocation.text')}</Typography>
      </FormLabel>
      <Select
        value={props.searchLocation}
        onChange={(e) => props.setSearchLocation(e.target.value)}>
        {locationList.map((item, i) => (
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
  );
};

export default LocatioList;
