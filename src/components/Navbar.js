import React from "react";
import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import {AiOutlineMenu} from "react-icons/ai"


const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  z-index: 100;
  position: fixed;
  /* background: #FF6347; */
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const Logo = styled(Link)`
  ${NavLink}  
  font-style: italic;
`;
const MenuBar = styled(AiOutlineMenu)`
  display: none ;
  @media screen and (max-width: 768px){
      display:block ;
      background-size: contain ;
      height: 40px ;
      width: 40px ;
      position: absolute ;
      cursor: pointer;
      top:0;
      right:0 ;
      transform: translate(-50%,25%) ;
    }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }
  
`;

const NavMenuLink = styled(Link)`
  ${NavLink}
  color: #fff;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;


const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to="/">shore</Logo>
      <MenuBar  onClick={toggle}/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLink to={item.link} key={index}>
            {item.title}
          </NavMenuLink>   
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary='true'>Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};
export default Navbar;
