import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      <h3>집에 가고싶다</h3>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                홈
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                동네생활
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                내 근처
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                채팅
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                나의 당근
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default App;
