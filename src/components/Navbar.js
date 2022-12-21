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
import { useNavigate } from "react-router-dom";
import "../App.css";


const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    
    <>
      <Nav>
        <Bars onClick={()=>{
          
          navigate("/preview/home");
      }} />
        <NavMenu>
        <ThoughtSpotLogo style={{marginLeft: + '-45'}} />
          <NavLink to="/preview/liveboard">
            LIVEBOARD
          </NavLink>
          <NavLink to="/preview/search" >
            SEARCH
          </NavLink>
          <a class="nav" href="https://codesandbox.io/p/github/thoughtspot/TS-Experience/main">DEVELOP</a>
        </NavMenu>

        <NavBtn style={{marginRight:+ '20'}}>
          <a class="bluebutton" href="https://www.thoughtspot.com/trial?tsref=producttour">Free Trial</a>
         </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
