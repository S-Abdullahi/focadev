import React from "react";
import Typography from '@mui/material/Typography';
import {Box, List, ListItem, ListItemButton, ListItemIcon,ListItemText, Switch} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { styled} from '@mui/material/styles';




const LeftPanel = () => {
    return ( 
        <>
        <Box flex={1} padding={2} sx={{display: {xs:'none', sm: 'block'}}}>
            <Box position='fixed'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                        <ListItemText primary="Homepage" sx={{display:{sm:"none",md:'block'}}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                        <ListItemText primary="Pages" sx={{display:{sm:"none",md:'block'}}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                        <ListItemText primary="Groups" sx={{display:{sm:"none",md:'block'}}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>
                        <ListItemText primary="Market" sx={{display:{sm:"none",md:'block'}}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                        <ListItemText primary="Friends" sx={{display:{sm:"none",md:'block'}}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                        <ListItemText primary="Settings" sx={{display:{sm:"none",md:'block'}}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                        <ListItemText primary="Profile" sx={{display:{sm:"none",md:'block'}}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <ModeNightIcon />
                            </ListItemIcon>
                            <Switch sx={{display:{sm:"none",md:'block'}}}/>
                    </ListItemButton>
                </ListItem>
            </List>
            
            </Box>
        </Box>
        </>
        
    )
}

export default LeftPanel