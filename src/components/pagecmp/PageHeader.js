import React from "react"
import styled from "styled-components"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function PageHeader ({color, pText}) {

  return (
 
      <ParagraphRow>
    <Col xs lg="10" >
          <CardHeading style={{color}}>{pText}</CardHeading>
        </Col>
      </ParagraphRow>

  )
}


const ParagraphRow = styled(Row)`
  display: flex;
  justify-content: center;
  width: clamp(30rem, 80vw, 60rem);
  margin: 0 clamp(2rem, 2vw, 4rem);
  padding: 0 clamp(1rem, 1vw, 2rem);
`


const CardHeading = styled.ul`
  color: var(--white);
  font-weight: 600;
  text-align: left;
  font-size: clamp(1.4rem, 6vw, 2rem);
  line-height: 1.6rem;



`

