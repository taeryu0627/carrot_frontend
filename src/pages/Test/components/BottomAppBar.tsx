import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

type MenuType = {
  title: string;
  icon: JSX.Element;
};

const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};

const Bottom = (): JSX.Element => {
  const menuItems: MenuType[] = [
    {
      title: "홍",
      icon: <HomeIcon />,
    },
    {
      title: "동네 생활",
      icon: <CorporateFareIcon />,
    },
    {
      title: "내 근처",
      icon: <LocationOnOutlinedIcon />,
    },
    {
      title: "채팅",
      icon: <ChatOutlinedIcon />,
    },
    {
      title: "나의 당근",
      icon: <PersonOutlineIcon />,
    },
  ];

  return (
    <main>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            {menuItems.map((item: MenuType): JSX.Element => {
              return (
                <Grid item xs key={item.title}>
                  <Box display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      size="large"
                      disableElevation
                      style={MenuStyle}
                    >
                      {item.icon}
                      {item.title}
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default Bottom;
