import * as React from "react";
import {
  AppBar,
  Grid,
  Typography,
  Avatar,
  Button,
  TextField,
  Toolbar,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { messages } from "./data";
import moment from "moment";

const myId = "me";

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
      <Box>
        <Grid container>
          {messages.map((message): JSX.Element => {
            return (
              <Grid item xs={12} key={message.id}>
                {message.sender === myId && (
                  <Box display="flex" justifyContent="left" alignItems="end">
                    <Chip
                      label={message.message}
                      sx={{ background: "skyblue" }}
                    />

                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Box>
                )}

                {message.sender !== myId && (
                  <Box display="flex" justifyContent="right" alignItems="end">
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                    <Chip
                      label={message.message}
                      sx={{ background: "lightgreen" }}
                    />
                  </Box>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#ffffff",
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={11}>
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={1}>
              <Box display="flex" justifyContent="center">
                <IconButton>
                  <SendIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Chat;
