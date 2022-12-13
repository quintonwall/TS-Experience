import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "@emotion/styled";
import App from "../App";



export const Nav = styled.nav`

  background: #333333;
  height: 38px;
  display: flex;
  align-items: left;
  justify-content: space-between;
  padding: 0.2rem;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #ddd;
  font-family: "BBRollerRegular";
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ddd;
    border-bottom: 2px solid #ddd;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ddd;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: left;
  margin-right: -24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FreeTrialBtn = styled(Link)`
  border-radius: 4px;
  background-color: none;
  color: #ddd;
  padding: 5px 10px;
  font-family: "BBRollerRegular";
  font-weight: 400;
  font-size: 12px;
  outline: none;
  border-style: solid;
  border-color: #ddd;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #585A5D;
  }
`;

export const FreeTrialBtnBlue = styled(Link)`
  border-radius: 14px;
  background-color: #4E55FD;
  color: #ffffff;
  padding: 6px 15px;
  font-family: "OptimoPlainRegular";
  font-weight: 400;
  font-size: 12px;
  outline: none;
  border-style: solid;
  border-color: #4E55FD;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #3E43CA;
    border-style: solid;
    border-color: #3E43CA;
  }
`;

export const ThoughtSpotLogo = styled.div`
padding: 15px 80px;
text-align: left;
background-image: url("./T-Logo.png");
background-size: 24px 24px;
background-repeat: no-repeat;
background-position: center;

`;
