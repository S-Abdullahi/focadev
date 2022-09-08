import React from 'react';
import {Tooltip, Fab, Modal, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { styled} from '@mui/material/styles';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledBox = styled(Box)(({theme})=>({
    backgroundColor : "white",
    padding: '20px',
    borderRadius:2,
    height: 280,
    width: 400,
}))

const UserBox = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px'
}))

const StyledModal = styled(Modal)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

const Addpost = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="Delete" sx={{position:'fixed', bottom:20, left:{xs:'calc(50%)', md: 30}}} onClick={(e)=>setOpen(true)}>
            <Fab color="primary" aria-label="add">
                <AddIcon sx={{borderColor:'#023047'}}/>
            </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={(e)=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <StyledBox>
                   <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                   <UserBox>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Typography variant='span' fontWeight={500}>Salawu Abdullahi</Typography>
                </UserBox>
                <TextField
                    id="standard-multiline-static"
                    sx={{width:'100%'}}
                    label="what is on your mind"
                    multiline
                    rows={3}
                    placeholder="What is on your mind?"
                    variant="standard"/>

                <Stack direction='row' gap={1} mt={1} mb={2}>
                    <EmojiEmotionsIcon color='primary'/>
                    <ImageIcon color='secondary'/>
                    <VideocamIcon color='success'/>
                    <PersonAddIcon color='error'/>
                </Stack>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{width:'100%'}}>
                    <Button sx={{width:'100%'}}>Post</Button>
                    <Button ><DateRangeIcon/></Button>
                </ButtonGroup>
                </StyledBox>
            </StyledModal>
        </>
    )
}

export default Addpost