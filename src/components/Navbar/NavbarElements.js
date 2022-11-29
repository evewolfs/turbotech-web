import { Link } from "gatsby"
import { FaHamburger, FaPhoneAlt } from "react-icons/fa"
import styled from "styled-components"

export const Nav = styled.nav`
  background: var(--dark);
  height: 80px;
  display: flex;
  font-size: 1rem;
  z-index: 999;
  top: 0;
  right: 0;
  margin: 0;
  position: sticky;
  justify-content: space-between;
 
 
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  vertical-align: middle;
  position: sticky;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  justify-content: space-between;
`
export const NavLogo = styled(Link)`
  color: var(--white);
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  font-weight: 600;
  margin-left: 2rem;
  min-width: 100px;
  position: relative;
`
export const NavIcon = styled(FaHamburger)`
  margin: 0 0.5rem;
  font-size: 1.6rem;
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    /* position: absolute;
    top: -16px;
    right: 20px; */
    transform: translate(-10%, 60%);
    font-size: 2rem;
 margin:0;
 padding: 0;
 position: relative;
    cursor: pointer;
    height: 100px;
    top:-36px;
    background: none;
    margin: 0 30%;
  
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
  padding: 0 6%;
  height: 100%;
  width: 100%;
  margin-top: 1rem;

  color: var(--orange);

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
  button {
    display: inline-block;
    border: 2px solid var(--orange);
    border-radius: 50px;
    color: var(--orange);
    text-decoration: none;
    font-size: 1.1rem;
    white-space: nowrap;
    width: 18%;
    background: var(--dark);
    height: 40px;
    font-weight: 600;
    vertical-align: middle;
    padding: 0 1%;
    right: 20px;
    margin-top: -2rem;
    position: absolute;
 

    @media screen and (max-width: 960px) {
      display: flex;
    justify-content: center;
    align-items: center;
      /* margin-top: -8.5rem;
      padding: 2%;
      margin-left: 0.3rem;
      position: relative;
      right: 10%;
      min-width: 20%; */

      

    }
  }
h4 {
  font-size: 1.1rem;
  background: none;
  font-weight:600;
  display: inline-flex;
  padding: 2%;
  margin: -8% 1%;
  text-align: center; 
  justify-content: center;


    line-height: 65px;
  @media screen and (max-width: 960px) {
    display: none !important;
  }
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

const NavLink = styled(Link)`
  color: var(--orange);
  display: flex;
  justify-self: flex-start;
  text-decoration: none;
  padding: 0 2rem;
  height: 80px;
  cursor: pointer;
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
    width: 100%;
    background: var(--dark);
    &:hover {
      border: none;
    }
  }
`

const NavPhone = styled.a`
  color: var(--orange);

  display: flex;
  justify-self: flex-start;
  border: 2px solid var(--orange);
  text-decoration: none;
  padding: 0 2rem;
  height: 80px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    color: var(--white);
  }
  @media screen and (max-width: 960px) {
    /* width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background: var(--dark); */
  }
`
