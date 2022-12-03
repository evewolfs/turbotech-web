import React from "react"
import styled from "styled-components"
import Video from "../assets/videos/turbotech-video2.mp4"
import Logo from "../assets/images/turbotech-logo2209.svg"
import {IoIosArrowDropdown} from 'react-icons/io'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <img src={Logo} />
          <HeroH1>Chauffage et Sanitaire</HeroH1>
          <DownArrow size={40}/>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 30vh;
  position: relative;
  margin-top: 200px;
  padding-bottom: 20px;
  color: var(--white);

  :before {
    content: "";
    position: absolute;
    top: O;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  height: 20vh;
  position: relative;
  margin-top: 60px;

  }

`



const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  max-height: 100%;
  padding: 0;
  color: var(--white);
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.6rem, 6vw, 4rem);
  margin: 1rem;
  letter-spacing: 1px;
  font-weight: 400;
  padding-top: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding-top: 0.2rem;
    margin: 0.2rem;
  }
`

const DownArrow = styled(IoIosArrowDropdown)`
  position: absolute;
  top: calc(40vh - 60px);
  left: calc(50% - 14px);
  animation: jumpInfinite 1.5s infinite;

  color: var(--orange);
justify-content: center;
@media (max-width: 768px) {
  display: none;
  }



  @keyframes jumpInfinite {
    0% {
      margin-top: 0;
    }
    50% {
      margin-top: 20px;
    }
    100% {
      margin-top: 0;
    }
  }
`
