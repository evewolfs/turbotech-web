import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"
import Dropdown from './Dropdown'


const Header = () => {


  return (
    <Nav>
      <NavLink to="/">LOGO</NavLink>
      <Bars />
      <NavMenu>

        {menuData.map((item, index) => (
          <NavLink  to={item.link} key={index}>
            {item.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {item.title}{' '}
          </button>
          <Dropdown submenus={item.submenu} />
        </>
      ) : (
        <a href={item.url}>{item.title}</a>
      )}
            {/* {item.title} */}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
       <Button primary="true" big="true" round="true" to="/contact">Contactez-nous</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-evenly;
padding: 0.5rem calc(100vw - 130px) / 2;
z-index: 100;
position: relative;

`

const NavLink = styled(Link)`
color: #FE9D2B;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: "Roboto Condensed";
text-transform: uppercase;
font-size: 1.2rem;
font-weight: 300;
`
const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width:768px) {
  display: block;
  position: absolute;
  top: O;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: -48px;

@media screen and (max-width: 768px) {
  display: none;

}
`

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
  display: none;

}
`





