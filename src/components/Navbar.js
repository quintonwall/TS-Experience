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

  function mixpanelMessage(message, payload) {
    if (mixpanel) {
      payload.tour_nav_origin = window.location.pathname
      mixpanel.track(message, {...payload})
    }
  }

  return (
    
    <>
      <Nav>
        <div className="column" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Bars onClick={()=>{
            navigate("/product-tour/home");
          }} />
          <NavMenu style={{display: 'flex', alignItems: 'center'}}>
            <ThoughtSpotLogo style={{marginLeft: + '-45'}} />
              <NavLink onClick={() => {mixpanelMessage('Product Tour Nav Liveboard', {tour_nav_text: 'LIVEBOARD'})}} to="/product-tour/liveboard">
                LIVEBOARD
              </NavLink>
              <NavLink onClick={() => {mixpanelMessage('Product Tour Nav Search', {tour_nav_text: 'SEARCH'})}} to="/product-tour/search" >
                SEARCH
              </NavLink>
              <a className="nav" onClick={() => {mixpanelMessage('Product Tour Nav See Code', {tour_nav_text: 'SEE THE CODE'})}} href="https://codesandbox.io/p/github/thoughtspot/TS-Experience/main">SEE THE CODE </a>
          </NavMenu>

          <NavBtn style={{marginRight:+ '20'}}>
            <a className="bluebutton" onClick={() => {mixpanelMessage('Product Tour Nav Free Trial', {tour_nav_text: 'FREE TRIAL'})}} href="https://www.thoughtspot.com/trial?tsref=producttour"  target="_blank">FREE TRIAL</a>
          </NavBtn>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
