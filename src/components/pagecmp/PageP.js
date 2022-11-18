import React from "react"
import styled from "styled-components"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PageP = props => {
  return (
    <ParagraphRow>
      <Col xs lg="10">
        <CardP>{props.paragraph}</CardP>
      </Col>
    </ParagraphRow>
  )
}

export default PageP

const ParagraphRow = styled(Row)`
  display: flex;
  justify-content: center;
  width: clamp(30rem, 80vw, 60rem);
  margin: 0 clamp(2rem, 2vw, 4rem);
  padding: 0 clamp(1rem, 1vw, 2rem);
`

const CardP = styled.div`
  color: var(--white);
  font-size: clamp(1.4rem, 3vw, 1.6rem);
  font-weight: 600;
  line-height: clamp(1.8rem, 3vw, 2.2rem);
  text-align: left;
  text-align: left;
  margin-top: 4%;
  margin-bottom: 4%;
`
