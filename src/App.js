import React from "react";
import "./App.css";
import { Global, css } from "@emotion/react";
import {Helmet} from "react-helmet";
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
import { gbl_metatitle, gbl_thoughtSpotHost } from "./config";
import { useInitThoughtSpot } from "./use-init-thoughtspot";
import { useEffect } from "react/cjs/react.production.min";
import { Redirect } from "react-router";


//use https://transfonter.org/ to convert fonts
const GlobalStyles = css`
  @font-face {
    font-family: "BBRollerRegular";
    src: url("./fonts/bbrollermonoprotx-regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "OptimoPlainRegular";
    src: url("./fonts/plain-regular.ttf") format("truetype");
  }

  * {
    text-align: center;
  }
`;

// try-everywhere provides unauthenticated access. You can not use this for production.
// Please refer to <docs link> for auth options.

function App() {

  
  const isInit = useInitThoughtSpot(gbl_thoughtSpotHost);
  if (!isInit) {
    return <>Loading...</>;
  }
  return (
    

    <Router>
      <Helmet>
                <title>ThoughtSpot Product Tour</title>
                <meta name="description" content="{gbl_meta.description}" />
                <meta name="keywords" content="{gbl_meta.meta.name.keywords}" />
    </Helmet>
      <Global styles={GlobalStyles} />
      <Navbar />
      <Switch>
        <Redirect from="/" to="preview/liveboard" />
        <Route path="/" exact component={Liveboard} />
        <Route path="/preview/liveboard" component={Liveboard} />
        <Route path="/preview/search" component={FullApp} />
        <Route path="/preview/freetrial" component={FreeTrial} />
      </Switch>
    </Router>
  );
}

export default App;
