import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  FreeTrialBtn,
  FreeTrialBtnBlue,
  ThoughtSpotLogo
} from "./NavbarElements";



const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
        <ThoughtSpotLogo style={{marginLeft: + '-45'}} />
          <NavLink to="/preview/liveboard">
            LIVEBOARD
          </NavLink>
          <NavLink to="/preview/search" >
            SEARCH
          </NavLink>
          <NavLink to={{pathname: "https://codesandbox.io/p/github/thoughtspot/TS-Experience/main"}} target="_blank" >
            DEVELOP
          </NavLink>
        </NavMenu>

        <NavBtn style={{marginRight:+ '20'}}>
          <FreeTrialBtnBlue  to={{pathname: "https://www.thoughtspot.com/trial?tsref=producttour"}} target="_blank">Free Trial</FreeTrialBtnBlue>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
