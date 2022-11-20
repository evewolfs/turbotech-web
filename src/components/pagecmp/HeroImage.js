import React from "react"
import styled from "styled-components"

const HeroImage = props => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg>
          {" "}

          <img src={props.img} />
        </ImgBg>
        <HeroTitle>{props.title}</HeroTitle>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroImage

const HeroTitle = styled.div`
  font-size: clamp(2rem, 10vw, 4rem);
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  /* text-shadow: 2px 2px 4px #000000; */
  z-index: 100;
  display: inline;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  text-shadow: 1px 1px 3px rgba(80, 80, 80, 0.8);
  
  `

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 auto;
margin-bottom: clamp(3rem, 4vw, 6rem);
  color: var(--white);
`

const HeroBg = styled.div`
  top: 0px;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 500px;
  overflow: hidden;
`

const ImgBg = styled.div`
  width: 100%;
  height: 100%;
  /* -o-object-fit: none; */
  object-fit: scale-down;
  background-size: cover;
background-repeat: no-repeat;
  /* filter: sepia(var(--value, 100%)); */
  /* filter: sepia(100%) hue-rotate(-360deg); */
  @media screen and (max-width: 960px) {
    height:200px;
    }
 
`
