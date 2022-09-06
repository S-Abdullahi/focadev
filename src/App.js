import React from 'react'
import Feed from './component/feed'
import LeftPanel from './component/leftpanel'
import Menubar from './component/menubar'
import Side from "./component/sidebar"
import Addpost from "./component/addpost"
import { Stack, Box } from '@mui/system'

const App = () =>{
    return (
        <>
        <Box>
            <Menubar/>
            <Stack direction="row" spacing={2} justifyContent="space-between" >
                <LeftPanel/>
                <Feed/>
                <Side/>
            </Stack>
            <Addpost position/>
        </Box>
            
           
        </>
    )
}

export default App