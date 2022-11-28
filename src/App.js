import React from "react";
import "./App.css";
import { Global, css } from "@emotion/react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { init, AuthType, Action } from "@thoughtspot/visual-embed-sdk";
import './config'

import Home from "./pages/Home";
import Liveboard from "./pages/Liveboard";
import Search from "./pages/Search";
import FreeTrial from "./pages/FreeTrial";
import { FaAccessibleIcon } from "react-icons/fa";
import { doBasicAuth } from "@thoughtspot/visual-embed-sdk/lib/src/auth";
import { gbl_thoughtSpotHost } from "./config";


//use https://transfonter.org/ to convert fonts
const GlobalStyles = css`
  @font-face {
    font-family: "BBRollerRegular";
    src: url("./fonts/BBRollerMonoProTX-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "OptimoPlain-Regular";
    src: url("./fonts/Plain-Regular.ttf") format("truetype");
  }

  * {
    text-align: center;
  }
`;


// try-everywhere provides unauthenticated aceess. You can not use this for production. 
// Please refer to <docs link> for auth options. 
init({
  thoughtSpotHost: gbl_thoughtSpotHost,
  authType: AuthType.None
});

function App() {
  return (
    <Router>
      <Global styles={GlobalStyles} />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/liveboard" component={Liveboard} />
        <Route path="/search" component={Search} />
        <Route path="/freetrial" component={FreeTrial} />
      </Switch>
    </Router>
  );
}

export default App;
