import React, { useState } from 'react' 
import {Typography, Card, CardHeader, CardMedia, Avatar, CardContent, CardActions,IconButton, Checkbox} from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {data} from '../data'



const Post = () => {
    const [person,usePerson] = useState(data)
    return (
      <>
      {person.map((user)=>{
       return (
        <Card sx={{marginBottom:5}}>
        <CardHeader
          avatar={
            <Avatar src={user.image} aria-label="recipe">
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={user.name}
          subheader={user.date}
        />
        <CardMedia
          component="img"
          height="20%"
          image={user.media}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {user.text}
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
      })}
        
      </>
    )
}

export default Post