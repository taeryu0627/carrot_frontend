import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Avatar, ListItemText } from "@mui/material";

const ImageTheme = {
  width: "150px",
  height: "150px",
};

const Home = (): JSX.Element => {
  return (
    <Box>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText primary="제목글" secondary="hello" />
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              src="https://opgg-com-image.akamaized.net/attach/images/20191229091906.1045771.jpg"
              sx={ImageTheme}
            />
          </ListItemAvatar>
          <ListItemText primary="제목글" secondary="hello" />
          <ListItemButton>peng</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>hihi</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>Go</ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Home;
