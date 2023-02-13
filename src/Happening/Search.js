import React from "react";
import { Divider, Grid, IconButton, InputBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";

export default function Search() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignContent="center"
    >
      <Grid item xs={4}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignContent: "center",
            width: 300,
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* <IconButton sx={{ p: "10px" }}>
            <MenuIcon />
          </IconButton> */}
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider orientation="vertical" sx={{ height: 28, m: 1 }} />
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Twitter" />
        </Paper>
      </Grid>
    </Grid>
  );
}
