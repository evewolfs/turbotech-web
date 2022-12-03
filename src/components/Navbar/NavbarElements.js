import { Link } from "gatsby"
import { FaHamburger } from "react-icons/fa"
import styled from "styled-components"

export const Nav = styled.nav`
  background: var(--dark);
  height: 90px;
  display: flex;
  z-index: 999;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0 2%;
  position: sticky;
  justify-content: space-between;
  vertical-align: middle;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`
export const NavLogo = styled(Link)`
  color: var(--white);
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  font-weight: 600;
  margin: 1.1rem 1.4rem;
  min-height: 60px;
  position: relative;
  @media screen and (max-width: 960px) {
    margin: 0.8rem 1.4rem;
  }
`

export const NavIcon = styled(FaHamburger)`
  margin: 0 0.5rem;
  font-size: 1.8rem;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;

    transform: translate(-50%, 54%);
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
    position: relative;
    cursor: pointer;
    height: 100px;
    top: -26px;
    background: none;
    margin: 0 4%;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 2%;
    position: fixed;
    top: 80px;
    right: 0;
    opacity: ${({ click }) => (click ? 1 : 0)};
    visibility: ${({ click }) => (click ? "visible" : "hidden")};
    transform: ${({ click }) => (click ? "translate(0)" : "translate(100%)")};
    transition: all 0.2s ease;
    background: var(--dark);
  }
`

export const NavItem = styled.li`
  height: 80px;
  text-align: center;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 4% 6%;
  height: 100%;
  width: 100%;
  margin-top: 1rem;

  color: var(--orange);
  position: relative;
  height: 80px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent !important;
  vertical-align: middle;
  &:hover {
    color: var(--white);
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    background: var(--dark);
    padding: 2rem;
    width: 100%;
    display: block;
    font-size: 1.8rem;
    &:hover {
      color: var(--white);
      transition: all 0.3s ease;
    }
  }
`

export const PhoneLink = styled(Link)`
  text-decoration: none;
  color: var(--orange);
  position: absolute;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 1.8rem;
  display: inline-flex;
  border: 2px solid var(--orange);
  border-radius: 50px;
  white-space: nowrap;
  background: var(--dark);
  height: 40px;
  vertical-align: middle;
  padding: 0 1%;
  align-items: center;
right: -80px;

  &:hover {
    color: var(--white);
    border: 2px solid var(--white);
  }

  @media screen and (max-width: 960px) {
    background: var(--dark);
    padding: 1% 6%;
    margin: 4% 10%;
    font-size: 1rem;
    right: 0;

  }

  h4 {
    font-size: 1.1rem;
    background: none;
    font-weight: 600;
    display: inline-flex;
    padding: 2%;
    margin-left: 4px;
    /* margin: -8% 1%; */
    text-align: center;
    justify-content: center;

    @media screen and (max-width: 960px) {
      display: none !important;
    }
  }


`
