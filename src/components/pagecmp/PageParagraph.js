import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ServicesList from "./ServicesList"
import { FaPhoneAlt } from "react-icons/fa"

const PageParagraph = props => {
  const map1 = props.pageheading.map(item => <ListItem>{item}</ListItem>)

  return (
    <Container fluid>
      <ParagraphRow>
        <Col xs lg="5">
          <CardHeading>{map1}</CardHeading>
          <CardTitle>{props.title}</CardTitle>
        </Col>
        <Col xs lg="3"></Col>
      </ParagraphRow>
      <ParagraphRow>
        <Col xs lg="5">
          {" "}
          <CardP>
            {props.paragraph}{" "}
          </CardP>
        </Col>
        <Col xs lg="3"></Col>
      </ParagraphRow>
      <ParagraphRow>
        <Col xs lg="5">
          <ServicesList />
        </Col>
        <Col xs lg="3"></Col>
      </ParagraphRow>
      <ButtonCall><FaPhoneAlt size={24}/> +32 467 89 56<a href="#">
    
    </a></ButtonCall>
    </Container>
  )
}

export default PageParagraph

const ParagraphRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`

const CardTitle = styled.div`
  color: var(--orange);
  margin-bottom: 4%;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.2rem;
  text-align: left;
`

const CardHeading = styled.div`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  text-align: left;
  padding-top: 4%;
  margin-top: 4%;
  margin-bottom: 4%;
`

const ListItem = styled.ul`
  color: var(--white);
  font-size: 2rem;
  line-height: 2.6rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const CardP = styled.div`
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6rem;
  text-align: left;
  text-align: left;
  margin-top: 4%;
  margin-bottom:4%;
`
const ButtonCall = styled.div`
padding-top:2%;
padding-bottom:2%;
border: 1px solid var(--orange);
border-radius: 50px;
text-align: center;
font-size: 1.8rem;
text-transform: uppercase;
color: var(--orange);

`