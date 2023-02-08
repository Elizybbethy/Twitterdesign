import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Grid, TextField } from '@mui/material';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import React from 'react';
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';

export default function(){
    return(
        <div>
            <Grid container direction="row" justifyContent="">
<Grid item xs={2}>
<Avatar>
    <AccountCircleIcon/>
</Avatar>

<TextField id='standard-basic' label="What's happening?" variant='standard' spacing={2}sx={{width:"30ch"}}/>
<Grid item xs={12} justifyContent="space-evenly" >
<PermMediaRoundedIcon/>
<GifBoxOutlinedIcon/>
</Grid>
</Grid>
            </Grid>
        </div>
    );
}