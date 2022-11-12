import React from "react"
import styled from "styled-components"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PageP = (props) => {


  return (
   
      <ParagraphRow>
        <Col xs lg="5">
         
          <CardP>
            {props.paragraph}
          </CardP>
        </Col>
        <Col xs lg="3"></Col>
      </ParagraphRow>
     
 
  )
}

export default PageP

const ParagraphRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
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
