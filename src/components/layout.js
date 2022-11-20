import * as React from "react"
import Navbar from "../components/Navbar"
// import Header from "./Header"
import Footer from './Footer'
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
 

  return (
    <>
    <GlobalStyle />
      {/* <Header /> */}
    <Navbar />
        <main>{children}</main>
       <Footer />
    </>
  )
}


export default Layout
