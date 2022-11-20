import './App.css';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Home from './components/HomePage';
import SearchAppBar from './components/navbar';

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchAppBar />
          <Home />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
