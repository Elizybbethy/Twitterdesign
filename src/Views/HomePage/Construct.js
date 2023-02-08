import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";

export default function Construct({ nameDetails }) {
  return (
    <div>
      {nameDetails.map((user) => {
        return (
          <div>
            <Grid
              container
              direction="row"
              spancing={2}
              justifyContent="center"
              style={{ backgroundColor: "#8d9091" }}
            >              
              <Grid item sm={8} md={6}>
                <Grid container>
                  <Grid item alignItems="flex-start">
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <AccountCircleIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>{user.userName}</ListItemText>
                        <ListItemText>{user.handle}</ListItemText>
                      </ListItem>
                    </List>
                    <Button color="primary">follow</Button>
                  </Grid>
                  <Grid container>
                    <Grid item sm={8} md={6} alignItems="center">
                      <Typography>{user.comment}</Typography>
                    </Grid>
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
