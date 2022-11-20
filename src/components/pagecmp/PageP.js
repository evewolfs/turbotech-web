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
  width: clamp(30rem, 80vw, 60rem);
  margin: 0 clamp(2rem, 2vw, 4rem);
  padding: 0 clamp(1rem, 1vw, 2rem);
`

const CardP = styled.div`
  color: var(--white);
  font-size: clamp(1.4rem, 3vw, 1.6rem);
  font-weight: 500;
  line-height: clamp(1.6rem, 3vw, 2rem);
  text-align: left;
  text-align: left;
  margin-top: 4%;
  margin-bottom: 4%;
`
