import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPhoneAlt } from 'react-icons/fa';
import Button from './Button';
import Turbotech from './icons/Turbotech'

function CollapsibleExample() {
  return (
    <>
    <style type="text/css">
    {`
.navbar {
    z-index:1000;
    padding-top:2%;
    text-transform:uppercase;
    font-size: 1rem;
}

#nav-dropdown{
    color:#FE9D2B;
}


  

  @media only screen and (max-width: 768px) {
    div.container {
        background-color: #0C0C0C;
        padding: 20px;}
    }
    .dropdown-menu.show{
        background-color: #0C0C0C;
        border: none;
        
      }
      .dropdown-item{
        color: #FE9D2B;
    }
  }

  .dropdown-menu.show{
    background-color: #0C0C0C;
    border: none;
    
  }



.dropdown-item{
    color: #FE9D2B;
}

#btn-contact {
    border: 1px solid #FE9D2B;
    color:#FE9D2B;
    text-transform:uppercase;
    border-radius: 50px;
    text-align: center;
    padding: 14px;
    text-decoration: none;
}
.navbar-toggler{
    border-color:#FE9D2B;
}

.navbar-toggler-icon{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28254, 157, 43, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");)
}

`}
  </style>
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"var(--dark)", paddingBottom:"30px"}}>
      <Container>

      <Navbar.Brand href="/"><Turbotech style={{'height':'150px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1 justify-content-evenly" >
            <Nav.Link href="/debouchage" style={{color:"#FE9D2B"}}>Débouchage</Nav.Link>
            <Nav.Link href="/installation" style={{color:"#FE9D2B"}}>Installation</Nav.Link>
            <Nav.Link href="#/entretien"  style={{color:"#FE9D2B"}}>Entretien</Nav.Link>
            <Nav.Link href="#/depannage"  style={{color:"#FE9D2B"}}>Dépannage</Nav.Link>
  
            <Nav.Link href="/contact" style={{color:"#FE9D2B"}}>Contact</Nav.Link>
          </Nav>
    
        </Navbar.Collapse>
        <Navbar.Text>
            <a href="#" id="btn-contact"><FaPhoneAlt /> 0472 01 47 58</a>
          </Navbar.Text>
      </Container>
    </Navbar>
    </>
  );
  
}

export default CollapsibleExample;