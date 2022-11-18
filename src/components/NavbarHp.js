import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { FaPhoneAlt } from "react-icons/fa"
import Turbotech from "./icons/Turbotech"

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
    font-weight:500;
}

  @media only screen and (max-width: 768px) {
    div.container {
        background-color: var(--dark);
        padding: 20px;}
    }

  }

  #btn-style a:hover{
    
      transform: translateY(-2px);
      color: var(--white);
      border: 2px solid var(--white);
    
  }
.navbar-toggler{
    border-color:var(--orange);
}

.navbar-toggler-icon{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28254, 157, 43, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");)
}

`}
      </style>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "var(--dark)", paddingBottom: "30px" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <Turbotech style={{ height: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex-grow-1 justify-content-evenly">
              <Nav.Link href="/turbotech-web/debouchage" style={{ color: "var(--orange)" }}>
                Débouchage
              </Nav.Link>
              <Nav.Link href="/turbotech-web/installation" style={{ color: "var(--orange)" }}>
                Installation
              </Nav.Link>
              <Nav.Link href="/turbotech-web/entretien" style={{ color: "var(--orange)" }}>
                Entretien
              </Nav.Link>
              <Nav.Link href="/turbotech-web/depannage" style={{ color: "var(--orange)" }}>
                Dépannage
              </Nav.Link>

              <Nav.Link href="/turbotech-web/contact" style={{ color: "var(--orange)" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>
            <PhoneButton id="btn-style"
              style={{
                color: "var(--orange)",
                textAlign: "center",
                border: "2px solid var(--orange)",
                borderRadius: "25px",
                padding: "14px",
                textDecoration: "none",
                cursor:'pointer'

              }}
            >
              <FaPhoneAlt /> 0472 01 47 58
            </PhoneButton>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  )
}

export default CollapsibleExample

const PhoneButton = styled.a`
  border: 2px solid var(--orange);
  color: var(--orange);
  text-transform: uppercase;
  border-radius: 50px;
  text-align: center;
  padding: 14px;
  text-decoration: none;

  a:hover {
    transform: translateY(-2px);
    color: var(--white);
    border: 2px solid var(--white);
  }
`
