import React from 'react'
import styled from "styled-components"
import {Container, Row, Col} from "react-bootstrap"
import Bosch from '../../assets/images/bosch.png'
import Bulex from '../../assets/images/bulex.png'
import Daikin from '../../assets/images/daikin.png'
import Dedietrich from '../../assets/images/dedietrich.png'
import Facq from '../../assets/images/facq.png'
import Junkers from '../../assets/images/junkers.png'
import Vaillant from '../../assets/images/vaillant.png'
import Vanmarcke from '../../assets/images/vanmarcke.png'
import Viessman from '../../assets/images/viessman.png'



const BrandsBanner = () => {
  return (
    <BBContainer>
         <Col xs lg="1"></Col>
         <Col xs lg="10">
       </Col>
    <ParagraphRow>
    <Col xs lg="1"> </Col>
         <StyledColumn xs="4" lg="1"><img src={Vaillant} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="1"><img src={Viessman} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="1"><img src={Facq} style={{width:'70px', transform:'translateY(13px)'}} /></StyledColumn>
         <StyledColumn xs="4" lg="1"><img src={Vanmarcke} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="1"><img src={Bulex} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="2"></StyledColumn>
  
         </ParagraphRow>    
         
         <ParagraphRow>
         <Col xs lg="2"></Col>
        <StyledColumn xs="4" lg="1"><img src={Daikin} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="1"><img src={Dedietrich} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="1"><img src={Junkers} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="1"><img src={Bosch} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="1"><img src={Bosch} style={{width:'130px',padding:'4%' }} /></StyledColumn>
         <StyledColumn xs="4" lg="2"></StyledColumn>
   </ParagraphRow>
   </BBContainer>
)   
}

export default BrandsBanner

const BBContainer = styled(Container)`

  ` 

const ParagraphRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  

`
const StyledColumn = styled(Col)`

object-fit: scale-down;

`

const ListTitle = styled.div`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;

`
