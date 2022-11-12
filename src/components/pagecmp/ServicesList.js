import React,{Component } from 'react'
import styled from 'styled-components';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

    function ServicesList(props){

        const map1 = props.servicelist.map(item => <ListItem>{item}</ListItem> )
        return(
            <ParagraphRow>
            <Col xs lg="5">
            <ListContainer><ListTitle>Nos types de {props.pagetitle} </ListTitle><br/> {map1}</ListContainer>
            </Col>
            <Col xs lg="3"></Col>
          </ParagraphRow>
            
        )
    }
export default ServicesList;

const ListItem = styled.li`
color: var(--white);
font-size: 1.2rem;

`




const ListContainer = styled.div`
margin-top: 2%;
color: var(--white);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6rem;
  text-align: left;
  text-align: left;
  margin-bottom: 8%;

`

const ListTitle = styled.div`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  text-align: left;
`

const ParagraphRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`
