import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PageParagraph = (props) => {
  return (
    <Container fluid>
      <Col xs lg="8">
      <CardTitle>{props.title}</CardTitle>
          <CardP>{props.paragraph}</CardP>
        </Col>
        <Col xs lg="4">
        </Col>

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
 color: var(--white);
  padding-top: 4%;
  margin-top: 8%;
  margin-bottom: 4%;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 3.2rem;
  text-align: left;
  padding: 0% 16%;
  width: 40vw;
`

const CardP = styled.div`
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 300;
  padding-bottom: 4%;
  line-height: 1.6rem;
  text-align: left;
  padding: 2% 16%;
`
