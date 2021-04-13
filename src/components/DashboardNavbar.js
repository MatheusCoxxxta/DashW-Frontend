/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Hidden, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => (
  <AppBar elevation={0} {...rest}>
    <Toolbar>
      <Box sx={{ flexGrow: 1 }} />
      <Hidden lgDown>
        <IconButton color="inherit">
          <InputIcon />
        </IconButton>
      </Hidden>
      <Hidden lgUp>
        <IconButton color="inherit" onClick={onMobileNavOpen}>
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
