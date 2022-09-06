import React from 'react';
import {Tooltip, Fab} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';

const Addpost = () => {
    return (
        <>
            <Tooltip title="Delete" sx={{position:'fixed', left:30, bottom:20}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            </Tooltip>
        </>
    )
}

export default Addpost