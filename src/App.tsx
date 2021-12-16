import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Bottom from "./pages/Test/components/BottomAppBar";
import Home from "./pages/Home/index";
import TradeDetail from "./pages/TradeDetail";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      {/* <Home /> */}
      <TradeDetail />
      <Toolbar />
      {/* <Bottom /> */}
    </main>
  );
};

export default App;
