import * as React from "react";
import { Grid, Avatar, Typography, IconButton } from "@mui/material";
import Bread from "../assets/pics/tweet/Bread.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import QuickreplyRoundedIcon from "@mui/icons-material/QuickreplyRounded";
import Bird from "../assets/pics/avatar/Bird.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function PhotoCaption({ TweetsDetails }) {
  return (
    <div>
      {TweetsDetails.map((photos) => {
        return (
          <div>
            <Grid
              container
              spancing={2}
              direction="row"
              alignItem="baseline"
              justifyContent="flex-start"
            >
              <Grid item xs={4} md={2}>
                <Avatar src={Bird} />
              </Grid>
              <Grid item xs={8} md={6}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-evenly"
                  alignItem="flex-start"
                >
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={8}>
                        <Typography>{photos.Title}</Typography>
                        <Typography>{photos.Description} </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <MoreHorizIcon />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="space-evenly"
                      alignItem="flex-start"
                    >
                      <Grid item xs={8}>
                        <Avatar
                          variant="rounded"
                          src={photos.src}
                          sx={{ width: 400, height: 300 }}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <IconButton>
                          <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <IconButton>
                          <QuickreplyRoundedIcon />
                        </IconButton>
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
