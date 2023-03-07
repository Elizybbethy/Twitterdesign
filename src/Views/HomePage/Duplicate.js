import React from "react";
import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Duplicate({ nameDetails }) {
  return (
    <div>
      {nameDetails.map((data) => {
        return (
          <div>
            <Grid
              container
              spancing={2}
              direction="row"
              alignItem="baseline"
              justifyContent="flex-start"
              
            >
              <Grid Item xs={3}>
                <Avatar>
                  <PersonIcon />
                </Avatar>
                <ListItemText>{data.userName}</ListItemText>
                <ListItemText style={{ color: "#2196f3" }}>
                  {data.handle}
                </ListItemText>
              </Grid>

              <Grid item xs={8}>
                <Grid
                  container
                  spancing={2}
                  direction="row"
                  alignItem="baseline"
                  justifyContent="flex-start"
                  rowSpacing={2}
                >
                  <Grid item xs={12}>
                    <Typography>Hi there! how can help you</Typography>
                    <Typography>Thanks for comming through!</Typography>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      spancing={2}
                      direction="row"
                      alignItem="baseline"
                      justifyContent="flex-start"
                    >
                      <Grid item xs={10}>
                        <IconButton aria-label="love">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="like">
                          <ThumbUpIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="contained" sx={{borderRadius: "18px"}}>follow</Button>
                      </Grid>
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
