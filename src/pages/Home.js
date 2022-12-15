import React from "react";
import "../App.css";
import { MobileDiv } from "../components/NavbarElements";


const Home = () => {
  return (
    
    <MobileDiv>
      <center>
        <ul class="no-bullets">
          <li>&nbsp;</li>
          <li><a href="/preview/liveboard" >LIVEBOARD</a></li>
          <li><a href="/preview/search" >SEARCH</a></li>
          <li><a href="https://codesandbox.io/p/github/thoughtspot/TS-Experience/main" target="_blank">DEVELOPER</a></li>
          <li><a href="https://www.thoughtspot.com/trial?tsref=producttour" >FREE TRIAL</a></li>
        </ul>
      </center>
    </MobileDiv>
  );
};

export default Home;
