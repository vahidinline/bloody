import './App.css';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Home from './components/HomePage';
import SearchAppBar from './components/navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'details/:id',
    element: <Details />,
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchAppBar />
            <Home />
          </Grid>
        </Grid>
      </Container>
    </RouterProvider>
  );
}

export default App;
