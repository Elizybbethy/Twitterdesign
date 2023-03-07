import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SwapVerticalCircleOutlinedIcon from '@mui/icons-material/SwapVerticalCircleOutlined';

export default function ({ TweetsDetails }) {
  return (
    <div>
      {TweetsDetails.map((Tweets) => {
        return (
          <div>
            <Grid container>
              
              <Grid item xs={8}>
                <Card sx={{ Width: 'auto' }}>
                  <CardHeader
                    avatar={<Avatar sx={{ bgcolor: "#d7ccc8" }}>B</Avatar>}
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={Tweets.Title}
                    subheader={Tweets.Theme}
                  />
                  <CardMedia component="img" width="auto" height="200" image={Tweets.src} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Tweets.Description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="like">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <IconButton aria-label="Retweet">
                        <SwapVerticalCircleOutlinedIcon/>
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
}
