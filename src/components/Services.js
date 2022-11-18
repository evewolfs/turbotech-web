import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Debouchage } from "./icons/Debouchage"
import { Depannage } from "./icons/Depannage"
import { Entretien } from "./icons/Entretien"
import { Installation } from "./icons/Installation"

const Services = () => {
  return (
    <ServicesContainer>
    <Row className="justify-content-md-center" >
     <Col xs lg="4">
     <Link href="/installation">
      <ServiceItem>
        <Installation />
        <ServiceTitle>Installation</ServiceTitle>
      </ServiceItem>
      </Link>
     </Col> 

      <Col xs lg="4">
      <Link href="/debouchage">
 <ServiceItem >
        <Debouchage />
        <ServiceTitle> Débouchage</ServiceTitle>
      </ServiceItem>
      </Link>
      </Col>
 </Row> 
 <Row className="justify-content-md-center" >

     <Col xs lg="4">
     <Link href="/depannage">
      <ServiceItem>
        <Depannage />
        <ServiceTitle>Dépannage</ServiceTitle>     
      </ServiceItem> </Link> </Col>

      <Col xs lg="4">
      <Link href="/entretien">
      <ServiceItem>
        <Entretien />
        <ServiceTitle>Entretien </ServiceTitle>

      </ServiceItem>
      </Link>
      </Col>
      </Row>
    </ServicesContainer>
  )
}

export default Services

const ServicesContainer = styled(Container)`
padding-top:4%;
padding-bottom:4%;
`

const ServicesRow = styled(Row)`
display: flex;
    margin: 0 auto;
    justify-content: center;
`
const ServiceItem = styled.div`
  padding: 1.8rem;
  margin: 1.2rem;
  border-radius: 4px;
  border: 1px solid var(--white);
  &:hover {
    transform: translateY(-4px);
}
  `

const ServiceTitle = styled.div`
  text-transform: uppercase;
  text-align: left;
  color: var(--white);
  font-weight: 700;
  font-size: 2rem;
  margin-top: 6%;
  letter-spacing: 1px;




`
