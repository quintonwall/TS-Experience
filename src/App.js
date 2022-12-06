import React from "react";
import "./App.css";
import { Global, css } from "@emotion/react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./config";

import Home from "./pages/Home";
import Liveboard from "./pages/Liveboard";
import Search from "./pages/Search";
import EmptySearch from "./pages/EmptySearch";
import FullApp from "./pages/FullApp";
import FreeTrial from "./pages/FreeTrial";
import { FaAccessibleIcon } from "react-icons/fa";
import { gbl_thoughtSpotHost } from "./config";
import { useInitThoughtSpot } from "./use-init-thoughtspot";
import { useEffect } from "react/cjs/react.production.min";

//use https://transfonter.org/ to convert fonts
const GlobalStyles = css`
  @font-face {
    font-family: "BBRollerRegular";
    src: url("./fonts/bbrollermonoprotx-regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "OptimoPlain-Regular";
    src: url("./fonts/plain-regular.ttf") format("truetype");
  }

  * {
    text-align: center;
  }
`;

// try-everywhere provides unauthenticated aceess. You can not use this for production.
// Please refer to <docs link> for auth options.

function App() {
  const isInit = useInitThoughtSpot(gbl_thoughtSpotHost);
  if (!isInit) {
    return <>Loading...</>;
  }
  return (
    <Router>
      <Global styles={GlobalStyles} />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Liveboard} />
        <Route path="/preview" component={Liveboard} />
        <Route path="/searchdirect" component={Search} />
        <Route path="/emptysearch" component={EmptySearch} />
        <Route path="/searchtour" component={FullApp} />
        {/* <Route path="/freetrial" component={FreeTrial} /> */}
      </Switch>
    </Router>
  );
}

export default App;
