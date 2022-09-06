import React from 'react'
import {Typography, Avatar, AvatarGroup, ImageList, ImageListItem, ListItem, ListItemText, Divider,List, ListItemAvatar} from '@mui/material'
import { Stack, Box } from '@mui/system'
import { styled} from '@mui/material/styles';

// const StyledImageListItem = styled(ImageListItem)(({theme})=>({
  
// }))

const Side = () => {
    return (
        <>
         <Box flex={2} padding={2} sx={{display: {xs:'none', sm: 'block'}}}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight="100" mb={1}>Online Friends</Typography>
                <AvatarGroup max={7} sx={{marginBottom:2}} wid>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
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