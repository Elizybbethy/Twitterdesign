import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { ListSharp } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Duplicate() {
  return (
    <div>
      {/* {nameDetails.map((user) => {
        return (
          <div> */}
      <Grid
        container            
        justifyContent="center"
        alignContent="center"
      >
        <Grid Item xs={4}>
          {/* <List>
            <ListItem>
              <ListItemAvatar> */}
                <Avatar>
                  <PersonIcon />
                </Avatar>
                {/* <ListItemText>{user.userName}</ListItemText>
                        <ListItemText>{user.handle}</ListItemText> */}
              {/* </ListItemAvatar>
            </ListItem>
          </List> */}
          <Typography>Hi there</Typography>
        </Grid>
        <Grid item xs={5} spacing={4}></Grid>
        {/* <ListSharp></ListSharp> */}
        <FavoriteIcon/>
        <ShareIcon/>
      </Grid>
      
      {/* </div>
          
          
        );
      })} */}
    </div>
  );
}
