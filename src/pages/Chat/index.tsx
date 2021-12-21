import * as React from "react";
import {
  AppBar,
  Grid,
  Typography,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Chat = (): JSX.Element => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <Grid container>
          <Grid item xs={1}>
            <Avatar variant="rounded" />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">사가세요...</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">18000원</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Button color="secondary" fullWidth>
              거래 후기 남기기
            </Button>
          </Grid>
        </Grid>
      </AppBar>
      <AppBar
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <Grid container>
          <Grid item xs={11}>
            <TextField sx={{ width: 1600 }} />
          </Grid>
          <Grid item xs={1}>
            <SendIcon />
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Chat;
