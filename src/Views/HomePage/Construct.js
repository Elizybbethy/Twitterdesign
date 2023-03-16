import { Grid, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import smile from "../../assets/pics/avatar/smile.png";

export default function Construct({ nameDetails }) {
  return (
    <div>
      {nameDetails.map((user) => {
        return (
          <div>
            <Grid
              container
              spancing={2}
              direction="row"
              alignItem="baseline"
              justifyContent="flex-start"
            >
              <Grid item xs={2}>
                <Avatar src={smile}/>
                  
              </Grid>
              <Grid item xs={10} md={8}>
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText style={{color: "#2196f3"}}>
                      {user.userName}
                      {user.handle}
                    </ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>{user.comment}</Typography>
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
