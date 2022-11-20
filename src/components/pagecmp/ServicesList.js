import React from "react"
import styled from "styled-components"

function ServicesList(props) {
  const map1 = props.servicelist.map(item => <ListItem>{item}</ListItem>)
  return (
    <ParagraphRow>
    
   
        <ListContainer>
          <ListTitle>Types {props.pagetitle} </ListTitle>
          <br /> {map1}
        </ListContainer>
   
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
  margin-top: 2%;
  margin-bottom: 4%;
`

const ListTitle = styled.div`
  color: var(--white);
  font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 600;
  line-height: 2.2rem;
  text-align: left;
`

const ParagraphRow = styled.div`
  display: flex;
  width: 100%;
  margin: 1% 2% ;
  padding: 1% 2%;
  /* margin: 3rem clamp(2rem, 2vw, 4rem);
  padding: 3rem clamp(1rem, 1vw, 2rem); */
`
