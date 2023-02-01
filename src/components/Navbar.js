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
        <div className="column" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Bars onClick={()=>{
            navigate("/product-tour/home");
          }} />
          <NavMenu style={{display: 'flex', alignItems: 'center'}}>
            <ThoughtSpotLogo style={{marginLeft: + '-45'}} />
              <NavLink to="/product-tour/liveboard">
                LIVEBOARD
              </NavLink>
              <NavLink to="/product-tour/search" >
                SEARCH
              </NavLink>
              <a className="nav" href="https://codesandbox.io/p/github/thoughtspot/TS-Experience/main">SEE THE CODE </a>
          </NavMenu>

          <NavBtn style={{marginRight:+ '20'}}>
            <a className="bluebutton" href="https://www.thoughtspot.com/trial?tsref=producttour"  target="_blank">FREE TRIAL</a>
          </NavBtn>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
