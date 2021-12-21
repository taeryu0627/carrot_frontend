import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
// import AppBar from "@mui/material/AppBar";
// import Bottom from "./pages/Test/components/BottomAppBar";
// import Home from "./pages/Home/index";
// import TradeDetail from "./pages/TradeDetail";
import Chat from "./pages/Chat";

const App = (): JSX.Element => {
  return (
    <main>
      {/* <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar> */}
      <Toolbar />
      {/* <Home /> */}
      {/* <TradeDetail /> */}
      <Chat />
      <Toolbar />
      {/* <Bottom /> */}
    </main>
  );
};

export default App;
