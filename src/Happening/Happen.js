import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, Button, Grid, IconButton, TextField } from "@mui/material";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PermMediaRoundedIcon from "@mui/icons-material/PermMediaRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Bird from "../public/Bird.jpg";

export default function () {
  return (
    <div>
      <Grid
        container
        spancing={2}
        direction="row"
        alignItem="baseline"
        justifyContent="flex-start"
       
      >
        <Grid item xs={2} >
          <Avatar src={Bird} />
        </Grid>
        <Grid item xs={10} md={8}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="What's happening?"
                variant="standard"
                spacing={2}
                sx={{ width: "30ch" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container >
                <Grid item xs={10}>
                  <IconButton>
                    <PermMediaRoundedIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <GifBoxOutlinedIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <LocationOnOutlinedIcon color="primary" />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <Button color="primary" variant="contained" sx={{borderRadius: "18px"}}>
                    Tweet
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
