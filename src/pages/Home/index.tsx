import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Avatar, ListItemText } from "@mui/material";
import { tradeItem } from "./data";
import TradeInformation from "./TradeInformation";
import TradeEvent from "./TradeEvent";

const ImageTheme = {
  width: "150px",
  height: "150px",
};

const Home = (): JSX.Element => {
  return (
    <>
      <Box>
        <List>
          {tradeItem.map((item): JSX.Element => {
            return (
              <ListItem key={item.id}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      src={item.imageUrl}
                      sx={ImageTheme}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <TradeInformation
                        title={item.title}
                        location={item.location}
                        createdAt={item.createdAt}
                        price={item.price}
                      />
                    }
                    secondary={
                      <TradeEvent chat={item.chat} interest={item.interest} />
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default Home;
