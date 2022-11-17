import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ThoughtSpotLogo
} from "./NavbarElements";



const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
        <ThoughtSpotLogo style={{marginLeft: + '-45'}} />
          <NavLink to="/preview">
            LIVEBOARD
          </NavLink>
          <NavLink to="/search" >
            SEARCH
          </NavLink>
          <NavLink to={{pathname: "https://codesandbox.io/p/github/quintonwall/TS-Experience/main"}} target="_blank" >
            DEVELOP
          </NavLink>
        </NavMenu>

        <NavBtn style={{marginRight:+ '20'}}>
          <NavBtnLink  to={{pathname: "https://www.thoughtspot.com/trial?tsref=producttour"}} target="_blank">FREE TRIAL</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
