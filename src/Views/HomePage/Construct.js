import { Grid, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
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
              justifyContent="flex-start"
              alignContent="center"
              // style={{ backgroundColor: "#8d9091" }}
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  spacing={4}
                  justifyContent="space-evenly"
                  alignContent="center"
                  alignItems="baseline"
                >
                  <Grid item xs={2}>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                    </Grid>
                  {/* <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="baseline"
                  > */}
                    <Grid item xs={10}>
                      <ListItemText>{user.userName}</ListItemText>
                      <ListItemText>{user.handle}</ListItemText>
                    </Grid>
                    </Grid>

                    <Typography>{user.comment}</Typography>
                  
                  <Grid item xs={12}></Grid>

                  {/* <Button color="primary">follow</Button> */}
                </Grid>
                {/* <Grid container>
                    <Grid item sm={12}>
                      
                    </Grid>
                  </Grid> */}
              </Grid>
            {/* </Grid> */}
          </div>
        );
      })}
    </div>
  );
}
