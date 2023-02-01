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
    src: url("/product-tour/fonts/bbrollermonoprotx-regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "OptimoPlainRegular";
    src: url("/product-tour/fonts/plain-regular.ttf") format("truetype");
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
  if (isSafari || isIE) { 
    return <div className="unsupported_body"> 
      <img src="https://www.thoughtspot.com/images/logo-black-with-r.svg" class="header_logo " width="158" height="32" />

      <p>You are currently using an unsupported browser. To view the ThoughtSpot Product Tour, 
      please note the following support across browsers:</p>

      <p><b>Supported desktop browsers</b><br/>
      Chrome, Edge, Firefox, and Opera</p>

      <p><b>Supported mobile browsers</b><br/>
      Android webview, Chrome for Android, Firefox for Android, Opera for Android, and Samsung Internet</p>

      <p><b>NOT supported desktop browsers</b><br/>
      Internet Explorer, Safari</p>

      <p><b>NOT supported mobile browser</b><br/>
      Safari on iOS</p>
    </div>
  }
   
  if (!isInit) {
    return <></>;
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
        <Route path="/product-tour/"  element={<Liveboard />} />
        <Route path="/product-tour/home"  element={< Home />} />
        <Route path="/product-tour/liveboard" element={<Liveboard />} />
        <Route path="/product-tour/search" element={<FullApp />} />
       
      </Routes>
    </Router>
  );
}

export default App;

