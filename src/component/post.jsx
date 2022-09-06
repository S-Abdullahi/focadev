import React from 'react' 
import {Typography, Card, CardHeader, CardMedia, Avatar, CardContent, CardActions,IconButton, Checkbox} from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const Post = () => {
    return (
        <Card sx={{marginBottom:5}}>
        <CardHeader
          avatar={
            <Avatar src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=40' aria-label="recipe">
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Salawu Abdullahi"
          subheader="September 6, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1661347333339-51786af3b406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
          </IconButton>
          <IconButton aria-label="share"><ShareIcon /></IconButton>
        </CardActions>
        
      </Card> 
    )
}

export default Post