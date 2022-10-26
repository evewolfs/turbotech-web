
import * as React from "react"
import Navbar from "./Navbar"
import FooterOne from "./FooterOne"
import Footer from './Footer'
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
 

  return (
    <>
    <GlobalStyle />
      <Navbar />
      
        <main>{children}</main>
    
       <Footer />
    </>
  )
}


export default Layout
