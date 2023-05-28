import React, { useState } from 'react'
import { Toolbar, AppBar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import ForestIcon from '@mui/icons-material/Forest';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { deepPurple } from '@mui/material/colors';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled("div")(({ theme }) => ({
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  border:'solid 1px'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up("sm")]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up("sm")]: {
    display: 'none',
  },
}));

export const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky' >
      <StyledToolbar>
        <ForestIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }} >R-GANA</Typography>
        <Search ><InputBase fullWidth placeholder='search...' /></Search>
        <Icons >
          <Badge badgeContent={3} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={3} color="secondary">
            <NotificationsIcon color="action" />
          </Badge>
          <Avatar onClick={e => { setOpen(true) }} sx={{ bgcolor: deepPurple[500] }}>AE</Avatar>
        </Icons>
        <UserBox onClick={e => { setOpen(true) }} >
          <Avatar sx={{ bgcolor: "blue" }} >AE</Avatar>
          <Typography variant="span" color="white">Ayoub</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e => { setOpen(false) }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
