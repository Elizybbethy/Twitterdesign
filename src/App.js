import "./App.css";
import React from "react";
import Construct from "./Views/HomePage/Construct";
import VaticoIcons from "./Views/HomePage/VaticoIcons";
import Duplicate from "./Views/HomePage/Duplicate";
import Happen from "./Happening/Happen";
import Trends from "./Happening/Search";
import { Box, Divider, Grid } from "@mui/material";
import Search from "./Happening/Search";
import meat from "./public/meat.jpg";
import Bread from "./public/Bread.jpg";
import cake from "./public/cake.jpg";
import Chapati from "./public/Chapati.jpg";
import muchomo from "./public/muchomo.jpg";
import Tweets from "./Happening/Tweets";
import PhotoCaption from "./Happening/PhotoCaption";

export default function App() {
  const [TweetsDetails, setTweetsDetails] = React.useState([
    {
      src: meat,
      Title: "Meat",
      Theme: "Breakfast",
      Description: "enjoy the taste",
    },
    {
      src: cake,
      Title: "Chocolate",
      Theme: "SweetTooth",
      Description: "Melt you're Mouth",
    },
    // {
    //   src: Chapati,
    //   Title: "Chapati",
    //   Theme: "Snack",
    //   Description: "The Difference is in the Taste",
    // },
    // {
    //   src: Bread,
    //   Title: "Bread",
    //   Theme: "Bed-time Snack",
    //   Description: "Enjoy the night",
    // },
    // {
    //   src:muchomo,
    //   Title: "Muchomo",
    //   Theme: "Chrunchy Bite",
    //   Description: "The best movie ever companion",
    // },
  ]);
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
      <Grid container my={3} spacing={2}>
        <Grid item xs={2} display={{ xs: "none", lg: "block" }}>
          <Box p={2}>
            <VaticoIcons />
          </Box>
        </Grid>
        <Grid item>
          <Box p={2}>
            <Happen />
            <Grid item xs={12} p={2}>
              <Construct nameDetails={nameDetails} />
            </Grid>
            <Grid item xs={12} p={2}>
              <Duplicate nameDetails={nameDetails} />
            </Grid>
            {/* <Grid item xs={12} p={2}>
              <Tweets TweetsDetails={TweetsDetails} />
            </Grid> */}
            <Grid item xs={12} p={2}>
              <PhotoCaption  TweetsDetails={TweetsDetails}/>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={3} display={{ xs: "none", md: "block" }}>
          <Box p={2}>
            <Search />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
