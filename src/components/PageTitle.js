import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PageTitle = (props) => {
  return (
    <Container fluid>
      <ParagraphRow>
        <Col xs lg="4">
          <CardP>{props.title}</CardP>
        </Col>
        <Col xs lg="8">
        </Col>
      </ParagraphRow>
      <PageParagraph>
      <Col xs lg="8">
          {/* <CardP>{props.paragraph}</CardP> */}
        </Col>
        <Col xs lg="4">
        </Col>
      </PageParagraph>
    </Container>
  )
}

export default PageTitle


const ParagraphRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`
