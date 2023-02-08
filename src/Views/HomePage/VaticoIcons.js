import React from "react";
import Grid from "@mui/material/Grid";
import { ListSharp } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Person2Icon from "@mui/icons-material/Person2";

export default function VaticoIcons() {
  return (
    <div>
      <Grid
        container
        sm={8}
        md={6}
        spancing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <List
            xs={{
              width: "100%",
              maxWidth: "180",
              bgcolor: "background.paper",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <TwitterIcon />
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
        </Grid>
      </Grid>
    </div>
  );
}
