import React, { Component } from "react"
import styled from "styled-components"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function ServicesList(props) {
  const map1 = props.servicelist.map(item => <ListItem>{item}</ListItem>)
  return (
    <ParagraphRow>
    
      <Col xs lg="10">
        <ListContainer>
          <ListTitle>Quel genre {props.pagetitle} ?</ListTitle>
          <br /> {map1}
        </ListContainer>
      </Col>
   
    </ParagraphRow>
  )
}
export default ServicesList

const ListItem = styled.li`
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 500;

`

const ListContainer = styled.div`

  text-align: left;

`

const ListTitle = styled.div`
  color: var(--white);
  font-size: clamp(1.4rem, 6vw, 2rem);
  font-weight: 300;
  line-height: 2.2rem;
  text-align: left;
`

const ParagraphRow = styled(Row)`
  display: flex;

  justify-content: center;
  width: clamp(30rem, 80vw, 60rem);
  margin: 3rem clamp(2rem, 2vw, 4rem);
  padding: 3rem clamp(1rem, 1vw, 2rem);
`
