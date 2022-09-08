import React from 'react'
import {Typography, Avatar, AvatarGroup, ImageList, ImageListItem, ListItem, ListItemText, Divider,List, ListItemAvatar} from '@mui/material'
import { Stack, Box } from '@mui/system'
import { styled} from '@mui/material/styles';

// const StyledImageListItem = styled(ImageListItem)(({theme})=>({
  
// }))

const Side = () => {
    return (
        <>
         <Box flex={2} padding={2} sx={{display: {xs:'none', sm: 'none', md:'block'}}}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight="100" mb={1}>Online Friends</Typography>
                <AvatarGroup max={7} sx={{marginBottom:2}} wid>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1662616642156-94bc4afb5864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1662577066108-4bb081e818b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" />
                    <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1662588293711-7e51b8d0e6d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1662421740070-f69fe90a987c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1662441900023-2169f8f26023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1662491516490-3b834eac3712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1662491516511-61805221b532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1662509297966-f2eaaeaf1ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1662511024026-bc935d6d7962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </AvatarGroup>
                
                

            <Typography variant="h6" fontWeight="100" mb={1}>Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100}>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="list"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="list2"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="list3"/>
                </ImageListItem>
            </ImageList>

            <Typography variant="h6" fontWeight="100" mt={2} >Latest Conversation</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Box>
        </Box>
        </>


    )
}

export default Side