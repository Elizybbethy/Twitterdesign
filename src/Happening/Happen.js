import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, Button, Grid, TextField } from "@mui/material";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PermMediaRoundedIcon from "@mui/icons-material/PermMediaRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Stack } from "@mui/system";

export default function () {
  return (
    <div>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="flex-start"
        alignContent="center"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={4}
            justifyContent="flex-start"
            alignContent="center"
          >
            <Grid item xs={2}>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="standard-basic"
                label="What's happening?"
                variant="standard"
                spacing={2}
                sx={{ width: "30ch" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignContent="flex-end"
          spacing={4}
        >
          <Grid item xs={6}>
            <Stack direction={{ xs: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
              <PermMediaRoundedIcon color="primary"/>
              <GifBoxOutlinedIcon color="primary"/>
              <LocationOnOutlinedIcon color="primary"/>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Button color="primary" variant="contained">
              Tweet
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
