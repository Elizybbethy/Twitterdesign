import { Grid, Typography } from "@mui/material";
import * as React from "reat";

export default function Trends() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignContent="flex-end"
      >
        <Grid item sx={4} display={{ xs: "none", lg: "block" }}>
          <Typography>Trends for you</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
