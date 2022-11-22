import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DropdownLanguage from '../languageSelect';
import { Link } from '@mui/material';
import LangContext from '../config/LangContext';
import { useTranslation } from 'react-i18next';

const ResponsiveAppBar = () => {
  const { lange } = React.useContext(LangContext);
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#880808',
        color: '#eee',
        direction: lange === 'fa' ? 'rtl' : 'ltr',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            {t('hometitle.text')}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', background: '#880808' },
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  background: '#880808',
                  color: '#eee',
                }}>
                <Typography textAlign="center">
                  <Link
                    sx={{ color: 'inherit', textDecoration: 'none' }}
                    href="/">
                    {t('navbar1.text')}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  background: '#880808',
                  color: '#eee',
                }}>
                <Typography textAlign="center">
                  <Link
                    sx={{ color: 'inherit', textDecoration: 'none' }}
                    href="/home">
                    {t('navbar2.text')}
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1rem',
              m: 1,
            }}>
            {t('hometitle.text')}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link href="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
                {t('navbar1.text')}
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link
                href="/home"
                sx={{ color: 'inherit', textDecoration: 'none' }}>
                {t('navbar2.text')}
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <DropdownLanguage />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
