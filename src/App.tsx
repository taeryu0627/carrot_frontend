import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Bottom from "./pages/Test/components/BottomAppBar";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      <h3>집에 가고싶다</h3>
      <Bottom />
    </main>
  );
};

export default App;
