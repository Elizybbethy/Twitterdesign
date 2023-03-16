import React from "react";
import { Divider, Grid, IconButton, InputBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Search({ searchDetails }) {
  return (
    <div>
      
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
            >
              <Grid item xs={10} md={8}>
                <Box sx={{ width: 300, height: 100 }}>
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
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <Divider orientation="vertical" sx={{ height: 28, m: 1 }} />
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Twitter"
                    />
                  </Paper>
                </Box>
              </Grid>
              
              <Grid item xs={10} md={8}>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="stretch"
                >
                  <Box sx={{ width: 300, height: "auto" }}>
                    <Paper
                      sx={{
                        p: "2px 4px",
                        alignContent: "center",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="subtitle1">
                          Trends for you
                        </Typography>
                      </Grid>
                      {searchDetails.map((trends) => {
        return (
          <div>
                      <Grid item xs={12}>
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="baseline"
                        >
                          <Grid item xs={8}>
                            <Typography variant="body2">
                              {trends.headline  }
                            </Typography>
                            <Typography variant="body2">{trends.Title}</Typography>
                            <Typography variant="body2">{trends.TweetsNumber} tweets</Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <IconButton edge="end">
                              <MoreHorizIcon sytle={{ paddingLeft: 120 }} />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                      </div>
        );
      })}
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
              
            </Grid>
          
    </div>
  );
}
