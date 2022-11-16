import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {RiFacebookCircleLine} from "react-icons/ri"
import {FiMail} from "react-icons/fi"


const Footer = () => {
  return (
    <StyledContainer>
      <StyledRow>
      <StyledCol xs lg="4">
          <FooterText>
            {" "}
            Besoin d’un devis <br/>ou d’un rendez-vous?
          </FooterText>
          <FooterButton>
         Appelez maintenant

          </FooterButton>
        </StyledCol>
      </StyledRow>
      <DarkRow>
      <Col xs lg="4">
        <LinkBanner>
        <IconBox> <a href="example.com"  >
     <RiFacebookCircleLine size={34} style={{textDecoration: 'none'}} /></a></IconBox>
        <IconBox> <a href="example.com" style={{textDecoration: 'none'}} ><FiMail size={30} /></a></IconBox>
        <IconBox> <a href="examle.com" style={{textDecoration: 'none'}}  ><TVAButton>TVA</TVAButton></a></IconBox>
             
    
    
        </LinkBanner>
      </Col> </DarkRow>
    </StyledContainer>
  )
}

export default Footer

const StyledContainer = styled(Container)`
  color: white;
  column-gap: 2%;
  background-color: none;
`


const StyledRow = styled(Row)`
   display: flex;
  margin: 0 auto;
  justify-content: center;
  padding-top: 3%;
  padding-bottom: 1%;
  background-color: var(--orange);
`

const DarkRow = styled(Row)`
   display: flex;
  margin: 0 auto;
  justify-content: center;
  padding-top: 3%;
  padding-bottom: 1%;
  background-color: var(--dark);
`

const StyledCol = styled(Col)`
 background-color: var(--orange);
`


const FooterText = styled.div`
  color: var(--dark);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  text-align: center;
  background-color: var(--orange);

`

const FooterButton = styled.div`
  padding: 1%;
  margin: 4% 2%;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: var(--orange);
  color: var(--dark);
  text-transform: uppercase;
  border: 1px solid var(--dark);
  border-radius: 50px;
:hover{

  color: var(--orange);
  border: 1px solid var(--orange);
}

`

const LinkBanner = styled.div`
display: flex;
justify-content: center;
align-items:center;
 text-decoration: none;
 color: var(--white) !important;




`
const TVAButton = styled.div`
color: var(--white);
font-size:0.6rem;
font-weight: 600;
border: 2px solid var(--white);
border-radius: 19px;
padding: 6px;
:hover{

color: var(--orange);
border: 2px solid var(--orange);
}



`

const IconBox = styled.div`
padding: 2%;
`