import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Person2Icon from "@mui/icons-material/Person2";
import { Avatar, Button, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';

export default function VaticoIcons() {
  return (
    <div>
      <Grid container direction="column"
        justifyContent="flex-start"
        rowSpacing={4}
        alignItems="stretch">
        <Grid item xs={12}>
          <TwitterIcon color="primary" sx={{fontSize: 35}}/>
        </Grid>
        <Grid item xs={12}>
        <List
            xs={{
              width: "100%",
              maxWidth: "180",
            }}
          >
            
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <FeaturedPlayListOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Lists" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Person2Icon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={12}>
        <Button color="primary" variant="contained" sx={{borderRadius: "18px", width: 200}}>
            Tweet
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid item xs={4} >
              <Avatar/>
            </Grid>
            <Grid item xs={6}>
              <Typography>Elizy</Typography>
              <Typography>@Elizy</Typography>
            </Grid>
            <Grid item xs={2}>
              <MoreHorizIcon/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid
        container
        spancing={3}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        bgcolor="#eeeeee"
      >
        <Grid item xs={2}>
          
          
        </Grid>
      </Grid> */}
    </div>
  );
}
