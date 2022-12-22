// The ThoughtSpot Product Tour uses a different sort of authentication to allow open access. 
// To use the code in your app, replace App.js with this file, which uses standard ThoughtSpot Everywhere SDK authentication.

import React from "react";
import "./App.css";
import { Global, css } from "@emotion/react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./config";
import packageJson from "../package.json";
import Cookies from 'universal-cookie';
import { BrowserView, MobileView, isBrowser, isMobile, isSafari, isIE } from 'react-device-detect';

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
    src: url("./fonts/Plain-Regular.ttf") format("truetype");
  }

  * {
    text-align: center;
  }
`;



function App() {

  const cookies = new Cookies();
  cookies.set("ept", "ept-cookie", {secure: true, sameSite: 'none'});

  init({
    thoughtSpotHost: gbl_thoughtSpotHost,
    authType: AuthType.None
  });
  
 
  if (isSafari || isIE) { 
    return <div className="Body"> 
      You are currently using an unsupported browser. To view the ThoughtSpot Product Tour, 
      please note the following support across browsers:<br/>
      &nbsp;  <br/>
      <b>Supported desktop browsers</b><br/>
      Chrome, Edge, Firefox, and Opera<br/>
      &nbsp; <br/>
      <b>Supported mobile browsers</b><br/>
      Android webview, Chrome for Android, Firefox for Android, Opera for Android, and Samsung Internet<br/>
      &nbsp; <br/>
      <b>NOT supported desktop browsers</b><br/>
      Internet Explorer, Safari<br/>
      &nbsp; <br/>
      <b>NOT supported mobile browser</b><br/>
      Safari on iOS<br/>
    </div>
    
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
         <Route path="/preview/home"  element={< Home />} />
        <Route path="/preview/liveboard" element={<Liveboard />} />
        <Route path="/preview/search" element={<FullApp />} />
       
      </Routes>
    </Router>
  );
}

export default App;