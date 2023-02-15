import React from "react";
import { Divider, Grid, IconButton, InputBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function Search() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignContent="center"
      >
        <Grid item xs={2}>
          <Box sx={{ p: 1, m: 1, mx: "auto", width: 100, height: 100 }}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignContent: "center",
                width: 100,
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
          </Box>
        </Grid>

        <Grid item sx={2} display={{ xs: "none", lg: "block" }}>
          <Box sx={{ mx: "auto", width: 50, height: 50 }}>
            <Paper>
              <Grid item></Grid>
              <Typography>Trends for you</Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
