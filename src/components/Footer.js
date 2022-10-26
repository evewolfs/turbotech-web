import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { RiBillFill } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import LogoMini from '../assets/images/turbotech-logo-mini.svg'




const Footer = () => {
  return (

    <StyledContainer>
    <StyledRow>  
        
{/*         
    <Col sm={2}><IconBox>
           <img src={LogoMini}/>
           <IconTextLogo>CHAUFFAGE & SANITAIRE</IconTextLogo>
        </IconBox></Col> */}
      <Col sm={3}>
        <IconBox>
            <FaPhoneAlt size={24} color="#FE9D2B"/>
            <IconText>0477 / 43 26 71</IconText>
        </IconBox>
        </Col>
      <Col sm={3}>  <IconBox>
            <FaEnvelope size={24} color="#FE9D2B"/>
            <IconText>contactez-nous</IconText>
        </IconBox>
        </Col>
      <Col sm={3}><IconBox>
            <RiBillFill size={24} color="#FE9D2B"/>
            <IconText>TVA: 3425.111.8765</IconText>
        </IconBox></Col>
        <Col sm={3}><IconBox>
            <BsFacebook size={24} color="#FE9D2B"/>
            <IconText>suivez-nous</IconText>
            </IconBox></Col>
            
       
      
    
    </StyledRow>
  </StyledContainer>
  )
}

export default Footer

const StyledContainer = styled(Container)`
color: white;
column-gap: 2%;
`


const StyledRow = styled(Row)`
background-color: #0C0C0C;
margin-left: calc((100vw - 100%) / -2) !important;
padding-left: calc((100vw - 100%) / 2);
margin-right: calc((100vw - 100%) / -2) !important;
padding-right: calc((100vw - 100%) / 2);
padding-top: 3%;
padding-bottom: 1%;
`

const IconBox = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  


`

const IconText = styled.div`
padding: 20px;
flex-basis: 100%;
text-align: center;
font-weight: 500;
font-size: 1.1rem;
text-transform: uppercase;
`

const IconTextLogo = styled.div`
padding: 6%;
flex-basis: 100%;
text-align: center;
font-weight: 500;
font-size: 1rem;
`