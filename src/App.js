import './App.css';
import { CssBaseline } from '@mui/material';
import Home from './components/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './components/Details';
import Info from './components/infoPage';
import LangContext from './config/LangContext';
import { useState } from 'react';
import Navbars from './components/navbar';
import LangModal from './components/LangModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Info />,
  },
  {
    path: 'details/:id',
    element: <Details />,
  },
  {
    path: 'home',
    element: <Home />,
  },
]);
function App() {
  const [lange, setLange] = useState('');

  return (
    <LangContext.Provider value={{ lange, setLange }}>
      <Navbars />

      <RouterProvider router={router}>
        <CssBaseline />
        <Info />
      </RouterProvider>
    </LangContext.Provider>
  );
}

export default App;
