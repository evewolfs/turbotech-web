import React, {useEffect, useState} from "react"
import {FaBars, FaTimes, FaPhoneAlt} from "react-icons/fa"
import {IconContext } from "react-icons/lib"
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    PhoneLink,
    NavLinks,
    NavLogo,
    NavMenu,
} from './NavbarElements'
import Turbotech from "../icons/Turbotech"


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeNav = () => {
        if (window.scrollY <- 80){
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])



  return (
<>
<IconContext.Provider value={{color: "orange"}}>
<Nav active={scroll} click={click}>
<NavbarContainer>
   
    <NavLogo to='/' onClick={closeMobileMenu}>
    <Turbotech />    
</NavLogo>
<MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
    </MobileIcon>

    <NavMenu onClick={handleClick} click={click} >
        <NavLinks to='/debouchage'>Debouchage</NavLinks>
        <NavLinks to='/installation'>Installation</NavLinks>
        <NavLinks to='/depannage'>Depannage</NavLinks>
        <NavLinks to='/entretien'>Entretien</NavLinks>
        <NavLinks to='/contact'>Contact</NavLinks>
    </NavMenu>
   


<PhoneLink href='tel:0032484915516'><FaPhoneAlt /><h4>+32 484 91 55 16</h4></PhoneLink>
     
</NavbarContainer>

</Nav>
</IconContext.Provider>
</>
  )
}

export default Navbar