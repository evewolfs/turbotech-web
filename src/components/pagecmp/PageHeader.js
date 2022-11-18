import React from "react"
import styled from "styled-components"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PageHeader = (props) => {
    const map2 = props.pageheading.map(item => <ListItem>{item}</ListItem>)

  return (
 
      <ParagraphRow>
    <Col xs lg="10">
          <CardHeading>{map2}</CardHeading>
        </Col>
      </ParagraphRow>

  )
}

export default PageHeader

const ParagraphRow = styled(Row)`
  display: flex;
  justify-content: center;
  width: clamp(30rem, 80vw, 60rem);
  margin: 0 clamp(2rem, 2vw, 4rem);
  padding: 0 clamp(1rem, 1vw, 2rem);
`


const CardHeading = styled.ul`
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
  list-style-type: none !important;
  &:nth-child(4) {
    color: var(--orange) !important;
    }
`