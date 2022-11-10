
import * as React from "react"
import NavbarHp from "./NavbarHp"
import FooterOne from "./FooterOne"
import Footer from './Footer'
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
 

  return (
    <>
    <GlobalStyle />
      <NavbarHp />
      
        <main>{children}</main>
    
       <Footer />
    </>
  )
}


export default Layout
