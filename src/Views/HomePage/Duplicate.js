import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Duplicate({nameDetails}) {
  console.log (nameDetails)
  return (
    <div>
      {nameDetails.map((data) => {
        return (
          <div>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        alignContent="center"
      >
        <Grid Item xs={4}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignContent="center"
            spacing={3}
          >
            <Grid item xs="12">
              <Avatar>
                <PersonIcon />
              </Avatar>
              <ListItemText>{data.userName}</ListItemText>
                        <ListItemText>{data.handle}</ListItemText>
            </Grid>            
          </Grid>
        </Grid>
        <Grid item xs={8}>
          {/* <ListSharp></ListSharp> */}
          <Grid
            container
            direction="row"
            spacing={3}
            justifyContent="center"
            alignContent="center"
          >
            <Grid item xs={8}>
              <Typography>Hi there! how can help you</Typography>
              <Typography>Hi there! how can help you</Typography>
              <Divider/>
              <Grid item xs={8}>
            <FavoriteIcon />
            <ShareIcon />
          </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary">
                Follow
              </Button>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </div>
  );
        })}
        </div>
  );
}
