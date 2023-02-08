import "./App.css";
import React from "react";
import Construct from "./Views/HomePage/Construct";
import VaticoIcons from "./Views/HomePage/VaticoIcons";
import Duplicate from "./Views/HomePage/Duplicate";
import Happen from "./Happening/Happen";
import { Grid } from "@mui/material";

export default function App() {
  const [nameDetails, setnameDetails] = React.useState([
    {
      userName: "ButterCup",
      account: "Twitter",
      home: "Home",
      welcome: "Welcome",
      comment: "This a free world. Enjoy it!",
      handle: "@buttercup",
    },
    //   {
    //     profile:[
    //       {userName: "Apple eyes", account:"Twitter", home:"Home"}],
    //     tweets:[
    //       {origin: "Tweet",
    //       reTweet:"Re-Tweeted"}],
    //     NewFeeds:[
    //       {welcome:"hi there!", comment:"just a hero"}],

    // },
  ]);

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={4}>
          <VaticoIcons />
        </Grid>
        <Grid container xs={8} spacing={2}>
          <Grid item xs={12}>
            <Happen />
          </Grid>
          <Grid item xs={12}>
          <Construct nameDetails={nameDetails} />
          <Duplicate />
        </Grid>
        </Grid>

        

        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}
