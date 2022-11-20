import { Grid, Typography } from '@mui/material';

const ListOfcities = (props) => {
  const { cities } = props;
  console.log(cities);
  return (
    <Grid>
      {Object.keys(cities).map((city, i) => (
        <Typography key={i}>{city}</Typography>
      ))}
    </Grid>
  );
};

export default ListOfcities;
