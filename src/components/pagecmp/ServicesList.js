import React from "react"
import styled from "styled-components"

function ServicesList(props) {
  const map1 = props.servicelist.map(item => <ListItem>{item}</ListItem>)
  return (
    <ParagraphRow>
      <ListContainer>
        <ListTitle>Quel genre {props.pagetitle} ?</ListTitle>
        <br /> {map1}
      </ListContainer>
    </ParagraphRow>
  )
}
export default ServicesList

const ListItem = styled.li`
  color: var(--white);
  font-size: clamp(1.4rem, 3vw, 1.6rem);
  font-weight: 500;
`

const ListContainer = styled.div`
  text-align: left;
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

  /* width: 100%; */
  width: clamp(30rem, 80vw, 60rem);
  margin: 0 clamp(2rem, 2vw, 4rem);
  padding: 0 clamp(1rem, 4vw, 2rem);
  /* margin: 3rem clamp(2rem, 2vw, 4rem);
  padding: 3rem clamp(1rem, 1vw, 2rem); */
`
