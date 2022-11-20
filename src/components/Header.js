import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import Turbotech from "./icons/Turbotech"

const Header = () => {
  const [nav, showNav] = useState(false)

  return (
    <Nav>
      <NavbarContainer>
        <NavLink to="/">
          <Turbotech style={{ width: "100px", top:"20px" }} />
        </NavLink>
        <Bars onClick={() => showNav(!nav)} />
        <NavMenu nav={nav}>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavLink>
          <PhoneButton href="tel:0472 01 47 58">
            <FaPhoneAlt /> 0472 01 47 58
          </PhoneButton>{" "}
        </NavLink>
      </NavbarContainer>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: var(--dark);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw - 130px) / 2;
  z-index: 1000;
  position: sticky;
  top: 0;
  right: 0;
  transition: background-color 0.3s ease-in;
`

const NavLink = styled(Link)`
  color: var(--orange);
  display: flex;
  justify-self: flex-start;
  text-decoration: none;
  padding: 0 2rem;
  height: 80px;
  cursor: pointer;
  font-family: "Roboto Condensed";
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  z-index: 2000;
  &:hover {
    color: var(--white);
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background: var(--dark);
    &:hover {
      border: none;
    }
  }
`
const Bars = styled(FaBars)`
  display: none;
  color: var(--orange);

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 2000;
  }

  &:hover {
    color: var(--white);
    transition: color 300ms;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ nav }) => (nav ? 1 : 0)};
    visibility: ${({ nav }) => (nav ? "visible" : "hidden")};
    transform: ${({ nav }) => (nav ? "translate(0)" : "translate(100%)")};
    transition: opacity 0.5s ease;
    background-color: #071c2f;
  }
  > li:first-child {
    margin-left: auto;
  }

  /* margin-left: -48px; */
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const PhoneButton = styled.a`
  border: 2px solid var(--orange);
  color: var(--orange);
  text-transform: uppercase;
  border-radius: 50px;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 30%;
    top:24px;
  }
  &:hover {
    color: var(--white);
    border: 2px solid var(--white);
  }
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: start;
  height: 80px;
  width: 100%;
`

const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavLinks = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #c8c9d8;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`
