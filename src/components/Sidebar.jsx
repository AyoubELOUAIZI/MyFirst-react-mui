import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, } from '@mui/material'
import React from 'react'
import { Home, Settings, LocationCity, Inventory, FamilyRestroom, AccountBox, Brightness4 } from '@mui/icons-material';

export const Sidebar = ({ mode, setMode }) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position={'fixed'}>
                <List  >

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#home'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#home'>
                            <ListItemIcon>
                                <LocationCity />
                            </ListItemIcon>
                            <ListItemText primary="Cities" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#home'>
                            <ListItemIcon>
                                <Inventory />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#home'>
                            <ListItemIcon>
                                <FamilyRestroom />
                            </ListItemIcon>
                            <ListItemText primary="Familly" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#home'>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#AccountBox'>
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#AccountBox'>
                            <ListItemIcon>
                                <Brightness4 />
                            </ListItemIcon>
                            <Switch onChange={e => { mode === "light" ? setMode('dark') : setMode('light') }} />

                        </ListItemButton>
                    </ListItem>
                </List >
            </Box>
        </Box>
    )
}
