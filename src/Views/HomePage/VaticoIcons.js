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
import { Button } from "@mui/material";

export default function VaticoIcons() {
  return (
    <div>
      <Grid
        container
        spancing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        bgcolor= "#eeeeee"
      >
        <Grid item xs={2}>
          <List
            xs={{
              width: "100%",
              maxWidth: "180",
             
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <TwitterIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItemButton>
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
                <Person2Icon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </List>
          <Button color="primary" variant="contained" size="large">Tweet</Button>
        </Grid>
      </Grid>
    </div>
  );
}
