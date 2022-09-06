import React from 'react' 
import {Typography, Box, Card, CardHeader, CardMedia, Avatar, CardContent, CardActions,IconButton, Checkbox} from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Post from './post'


const Feed = () => {
    return (
        <>
           <Box flex={4} padding={2}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </Box>
        </>
        
    )
}

export default Feed