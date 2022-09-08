import React from 'react'
import {useState} from 'react'
import Typography from '@mui/material/Typography';
import { AppBar,Toolbar,Box,InputBase,Badge, Avatar, Menu, MenuItem} from '@mui/material'
import { styled} from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'

const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
    backgroundColor: '#023047'
})

const Search = styled(("div"))(({theme}) =>({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const UseBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up("sm")]:{
        display: 'none'
    }
   
}))

const Icon = styled(Box)(({theme}) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up("sm")]:{
        display: 'flex'
    }
}))



const Menubar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6" sx={{display: {xs:'none', sm:'block'}}}>Focus Dev</Typography>
                <VisibilityIcon sx={{display: {xs:'block', sm:'none'}}}/>
                <Search>
                    <InputBase placeholder='search...'/>
                </Search>
                <Icon>
                    <Badge badgeContent={4} color="error">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon/>
                    </Badge>
                    <Avatar alt="Remy Sharp" 
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          onClick={e=>setOpen(true)}/>
                </Icon>
                <UseBox onClick={e=>setOpen(true)}>
                    <Avatar alt="Remy Sharp" 
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            />
                    <Typography variant='span'>Abdullahi</Typography>
                </UseBox>
                <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
            </StyledToolBar>
        </AppBar>
        </>
        
    )
}

export default Menubar