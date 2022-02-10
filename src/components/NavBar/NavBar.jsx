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
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const pages = [{ display: 'Cart', route: 'cart' }];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // get Cart from State
  const cart = useSelector((state) => state.cart.cart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: 'white' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'black',
              flexGrow: 1,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Webshop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'black' }}
            >
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
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  xs={{ textDecoration: 'none' }}
                  to={'/' + page.route}
                  key={page.route}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ color: 'black' }} textAlign="center">
                    {page.display}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            noWrap
            sx={{
              textDecoration: 'none',
              color: 'black',
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            Webshop
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.route}
                href={'/' + page.route}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.display}
                {page.route === 'cart' && (
                  <Badge badgeContent={cart.length}>
                    <ShoppingCart />
                  </Badge>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
