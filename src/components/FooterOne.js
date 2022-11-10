import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {TbPhoneOutgoing} from "react-icons/tb"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterOne = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Contactez-nous</h1>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLink to="/about"><TbPhoneOutgoing /> Téléphone: 0477/XXXXXXXX</FooterLink>
          <FooterLink to="/about">Facebook</FooterLink>
          <FooterLink to="/about">Gmail</FooterLink>
          <FooterLink to="/about">Compte Pro</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
      
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default FooterOne

const FooterContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 47,5% 47,5%;
  color: var(--white);

`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: var(--white);
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and(max-width:400px) {
    padding: 1rem;
}
`
const FooterLink = styled.h2`
font-size:14px;
margin-bottom:16px;
color: var(--white);
`
const FooterLinkTitle = styled(Link)`
text-decoration:none;
margin-bottom: 0.5rem;
font-size: 14px;
color: var(--white);

&:hover{
    color: var(--orange);
    transition: 0.3s ease-out;
}
`
