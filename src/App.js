import React from "react";
import "./App.css";
import { Global, css } from "@emotion/react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./config";
import packageJson from "../package.json";
import Cookies from 'universal-cookie';

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
    src: url("/preview/fonts/bbrollermonoprotx-regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "OptimoPlainRegular";
    src: url("/preview/fonts/plain-regular.ttf") format("truetype");
  }

  * {
    text-align: center;
  }
`;

// try-everywhere provides unauthenticated access. You can not use this for production.
// Please refer to <docs link> for auth options.

function App() {

  const cookies = new Cookies();
  cookies.set("ept", "ept-cookie", {secure: true, sameSite: 'none'});

  
  const isInit = useInitThoughtSpot(gbl_thoughtSpotHost);
  if (!isInit) {
    return <>Loading EPT version {packageJson.version}</>;
  }
  return (
    

    <Router>
      <HelmetProvider>
        <Helmet>
                  <title>ThoughtSpot Product Tour</title>
                  <meta name="description" content="{gbl_meta.description}" />
                  <meta name="keywords" content="{gbl_meta.meta.name.keywords}" />
      </Helmet>
    </HelmetProvider>
      <Global styles={GlobalStyles} />
      <Navbar />
      <Routes>
        <Route path="/" exact element={< Home />} />
        <Route path="/preview/home"  element={< Home />} />
        <Route path="/preview/liveboard" element={<Liveboard />} />
        <Route path="/preview/search" element={<FullApp />} />
        <Route path="/preview/freetrial" element={<FreeTrial />} />
      </Routes>
    </Router>
  );
}

export default App;
