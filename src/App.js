import "./App.css";
import React from "react";
import Construct from "./Views/HomePage/Construct";
import VaticoIcons from "./Views/HomePage/VaticoIcons";
import Duplicate from "./Views/HomePage/Duplicate";
import Happen from "./Happening/Happen";
import Trends from "./Happening/Search";
import { Divider, Grid } from "@mui/material";
import Search from "./Happening/Search";
import { height } from "@mui/system";

export default function App() {
  const [nameDetails, setnameDetails] = React.useState([
    {
      userName: "ButterCup",
      account: "Twitter",
      home: "Home",
      welcome: "Welcome",
      comment: "This a free world. Enjoy it!",
      handle: "@buttercup",

      //     headline: "Trending in Uganda",
      //     Title: "Men's Conference",
      //     TweetsNumber: "3285"
      // },
    },
    //   {
    //     headline: "Trending in Uganda",
    //     Title: "Men's Conference",
    //     TweetsNumber: "3285"
    // },
  ]);

  return (
    <div>
      <Grid
        container
        direction="row"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="stretch"
        margin-left="auto"
        margin-right="auto"
        padding={10}
      >
        <Grid item xs={2} display={{ xs: "none", lg: "block" }}>
          <VaticoIcons />
        </Grid>
        {/* <Divider orientation="vertical" sx={{m:1, height: 100}}/> */}
        <Grid item xs={7}>
          <Grid
            container
            direction="column"
            spacing={2}
            justifyContent="center"
            alignContent="center"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <Happen />
            </Grid>
            <Grid item xs={12}>
              <Construct nameDetails={nameDetails} />
            </Grid>
            <Grid item xs={12}>
              <Duplicate nameDetails={nameDetails} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} display={{ xs: "none", md: "block" }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignContent="flex-end"
          >
            <Grid item xs={12}>
              {/* <Trends /> */}
              <Search />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
