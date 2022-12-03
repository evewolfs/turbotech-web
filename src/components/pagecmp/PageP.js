import React from "react"
import styled from "styled-components"

const PageP = props => {
  return (
    <ParagraphRow>
 
        <CardP>{props.paragraph}</CardP>
   
    </ParagraphRow>
  )
}

export default PageP

const ParagraphRow = styled.div`
  display: flex;
  justify-content: center;
  width: clamp(26rem, 80vw, 60rem);
  margin: 1% 2% ;
  padding: 1% 2%;

  @media (max-width: 768px) {
width: 90%;
padding: 2% 4%;
margin:  2%; 
flex-wrap: wrap;
  }

`

const CardP = styled.div`
  color: var(--white);
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 500;
  line-height: clamp(1.5rem, 3vw, 2rem);
  text-align: left;
  margin-top: 4%;
  margin-bottom: 0;

`
